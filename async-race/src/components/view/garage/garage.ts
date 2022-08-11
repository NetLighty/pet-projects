import {
  carDriveAnimation, createCarBlockElement, createExplosionGif, generateCarsNumber,
  getDistanceBetweenElems,
  getPaginationButtons,
  getRandomCarName,
  getRandomColor, renderWinnerMessage, startRaceButtonClass, stopRaceButtonClass, unknownCarName
} from '../../../utils/utils';
import AppController from '../../controller/appController';
import { DriveData, ICarDB } from '../../controller/appController.types';
import Winners from '../winners/winners';
import {
  CarElements, CarRaceResult, EngineData, Storage
} from './garage.types';

class Garage {
  controller: AppController;

  generateCarsButton: HTMLElement | null;

  createButton: Element | null;

  carsInPage: ICarDB[];

  selectedCarId: number;

  textUpdateInput: HTMLInputElement | null;

  storage: Storage;

  pageLimit: number;

  currentPage: number;

  allCars: ICarDB[];

  colorUpdateInput: HTMLInputElement | null;

  winners: Winners;

  constructor(controller: AppController, winners: Winners) {
    this.controller = controller;
    this.winners = winners;
    this.allCars = [];
    this.pageLimit = 7;
    this.currentPage = 1;
    this.carsInPage = [];
    this.storage = { animations: [] };
    this.selectedCarId = 0;
    this.textUpdateInput = document.getElementById('text-update') as HTMLInputElement | null;
    this.colorUpdateInput = document.getElementById('colorpicker-update') as HTMLInputElement | null;
    this.generateCarsButton = document.getElementById('generate-cars-button');
    this.createButton = document.getElementById('create-button');
    this.initGarage();
  }

  async initGarage() {
    const updateButton = document.getElementById('update-button') as HTMLInputElement | null;
    const startRaceButton = document.querySelector('.start-race-button') as HTMLButtonElement | null;
    const resetButton = document.querySelector('.reset-button') as HTMLButtonElement | null;
    startRaceButton?.addEventListener('click', () => this.startRace());
    resetButton?.addEventListener('click', () => this.resetCars());
    this.generateCarsButton?.addEventListener('click', () => this.generateCars(generateCarsNumber));
    this.createButton?.addEventListener('click', () => this.createCar());
    updateButton?.addEventListener('click', () => this.updateCar());
  }

  async refreshGarage() {
    this.allCars = await this.controller.getCars();
    await this.renderCarsPage(this.currentPage);
    this.renderCarsAmount();
    this.renderPaginationButtons();
  }

  async changePage(page: number) {
    this.currentPage = page;
    this.renderPageNumber();
    await this.renderCarsPage(page);
  }

  renderPaginationButtons() {
    const buttonsContainer = document.querySelector('.pagination');
    const pagesNumber = this.allCars.length / this.pageLimit;
    const buttons = getPaginationButtons(pagesNumber);
    if (buttonsContainer) {
      buttonsContainer.innerHTML = '';
      buttons.forEach((button, index) => {
        button.addEventListener('click', () => this.changePage(index + 1));
        buttonsContainer.append(button);
      });
    }
  }

  async renderCarsPage(page: number) {
    const carsData: ICarDB[] = await this.controller.getCars({ _page: `${page}`, _limit: `${this.pageLimit}` });
    this.carsInPage = carsData;
    const carBlocksContainer = document.querySelector('.cars-list');
    if (carBlocksContainer) {
      carBlocksContainer.innerHTML = '';
      this.carsInPage.forEach((car) => {
        const carBlock = createCarBlockElement(car);
        this.setCarBlockListeners(carBlock);
        carBlocksContainer?.append(carBlock);
      });
    }
  }

  setCarBlockListeners(carBlock: HTMLDivElement) {
    const deleteButton = carBlock.querySelector('.delete');
    const selectButton = carBlock.querySelector('.select');
    const startRaceButton = carBlock.querySelector(startRaceButtonClass);
    const stopRaceButton = carBlock.querySelector(stopRaceButtonClass);
    deleteButton?.addEventListener('click', () => this.deleteCar(+carBlock.id));
    selectButton?.addEventListener('click', () => this.selectCar(+carBlock.id));
    startRaceButton?.addEventListener('click', () => this.startCarEngine(+carBlock.id));
    stopRaceButton?.addEventListener('click', () => this.stopCarEngine(+carBlock.id));
  }

  renderCarsAmount() {
    const carsAmountElement = document.querySelector('.cars-amount');
    if (carsAmountElement) {
      carsAmountElement.textContent = `${this.allCars.length}`;
    }
  }

  renderPageNumber() {
    const pageNumberElement = document.querySelector('.page-number');
    if (pageNumberElement) {
      pageNumberElement.textContent = `${this.currentPage}`;
    }
  }

  async generateCars(n: number) {
    const responses = [];
    for (let i = 0; i < n; i += 1) {
      const randomColor = getRandomColor();
      const randomName = getRandomCarName();
      responses.push(this.controller.createCar({ color: randomColor, name: randomName }));
    }
    await Promise.all(responses);
    await this.refreshGarage();
  }

  async deleteCar(id: number) {
    await this.controller.deleteCar(id);
    await this.winners.deleteWinner(id);
    await this.refreshGarage();
  }

  async createCar() {
    const textInput = document.getElementById('text-create') as HTMLInputElement | null;
    const colorInput = document.getElementById('colorpicker-create') as HTMLInputElement | null;
    if (textInput && colorInput) {
      const name = textInput.value ? textInput.value : unknownCarName;
      await this.controller.createCar({ name, color: colorInput.value });
      await this.refreshGarage();
    }
  }

  selectCar(id: number) {
    const selectedCarBlock = document.getElementById(`${id}`);
    const pastSelectedCarBlock = document.getElementById(`${this.selectedCarId}`);
    const selectedCarName = selectedCarBlock?.querySelector('.car__name')?.textContent;
    const selectedCarColor = selectedCarBlock?.querySelector('.car__img')?.getAttribute('fill');
    if (this.textUpdateInput && this.colorUpdateInput && selectedCarColor && selectedCarName) {
      this.textUpdateInput.value = selectedCarName;
      this.colorUpdateInput.value = selectedCarColor;
    }
    if (this.selectedCarId === id) {
      selectedCarBlock?.classList.toggle('selected');
    } else {
      selectedCarBlock?.classList.add('selected');
      pastSelectedCarBlock?.classList.remove('selected');
    }
    this.selectedCarId = id;
  }

  async updateCar() {
    if (this.textUpdateInput && this.colorUpdateInput) {
      await this.controller.updateCar(this.selectedCarId, {
        name: this.textUpdateInput.value, color: this.colorUpdateInput.value
      });
      this.textUpdateInput.value = '';
    }
    await this.refreshGarage();
  }

  static getCarBlockElements(id: number) {
    const carBlock = document.getElementById(`${id}`) as HTMLDivElement | null;
    const carImg = carBlock?.querySelector('.car__img') as HTMLImageElement | null;
    const flag = carBlock?.querySelector('.flag') as HTMLImageElement | null;
    return { block: carBlock, img: carImg, flag: flag };
  }

  static changeButtonsDisabled(carId: number) {
    const carElements: CarElements = Garage.getCarBlockElements(carId);
    if (carElements.block) {
      const startButton: HTMLButtonElement | null = carElements.block.querySelector('.start-race-button');
      const stopButton: HTMLButtonElement | null = carElements.block.querySelector('.stop-race-button');
      if (startButton && stopButton) {
        if (stopButton.disabled) {
          stopButton.disabled = false;
          startButton.disabled = true;
        } else {
          stopButton.disabled = true;
          startButton.disabled = false;
        }
      }
    }
  }

  async startCarEngine(id: number): Promise<CarRaceResult> {
    const carElements: CarElements = Garage.getCarBlockElements(id);
    Garage.changeButtonsDisabled(id);
    const engineData: EngineData = await this.controller.ruleCarEngine(id, 'started');
    const animationTime = engineData.distance / engineData.velocity;
    let driveRes: DriveData = {
      success: false
    };
    if (carElements.img && carElements.flag) {
      const distanceBetweenCarAndFlag = getDistanceBetweenElems(carElements.img, carElements.flag);
      this.storage.animations[id] = carDriveAnimation(
        carElements.img,
        distanceBetweenCarAndFlag,
        animationTime
      );
      driveRes = await this.controller.driveCarEngine(id, 'drive');
      if (!driveRes.success) {
        cancelAnimationFrame(this.storage.animations[id].id);
      } else {
        return Promise.resolve({ id, time: animationTime });
      }
    }
    return Promise.reject(id);
  }

  static setStartRaceButtonDisabled(status: boolean) {
    const startRaceButton = document.querySelector('.start-race-button') as HTMLButtonElement | null;
    if (startRaceButton) {
      startRaceButton.disabled = status;
    }
  }

  static setResetButtonDisabled(status: boolean) {
    const resetButton = document.querySelector('.reset-button') as HTMLButtonElement | null;
    if (resetButton) {
      resetButton.disabled = status;
    }
  }

  async startRace() {
    Garage.setStartRaceButtonDisabled(true);
    const responses: Promise<CarRaceResult>[] = [];
    this.carsInPage.forEach((car) => {
      responses.push(this.startCarEngine(car.id));
    });
    const winnerIdAndTime = await Promise.any(responses).catch(() => {
      renderWinnerMessage(false, '', 0);
    });
    if (winnerIdAndTime) {
      const winnerInfo = this.carsInPage.find((winner) => winner.id === winnerIdAndTime.id);
      const winnerName = winnerInfo?.name;
      if (winnerName) {
        renderWinnerMessage(true, winnerName, winnerIdAndTime.time);
      }
      if (winnerInfo) {
        this.winners.addWinnerInfo({
          id: winnerInfo.id,
          name: winnerInfo.name,
          color: winnerInfo.color,
          time: winnerIdAndTime.time
        });
      }
    }
    Garage.setResetButtonDisabled(false);
  }

  async stopCarEngine(id: number): Promise<EngineData> {
    const carElements = Garage.getCarBlockElements(id);
    let res: EngineData = {
      velocity: 0,
      distance: 0
    };
    Garage.changeButtonsDisabled(id);
    if (carElements.img) {
      res = await this.controller.ruleCarEngine(id, 'stopped');
      cancelAnimationFrame(this.storage.animations[id].id);
      carElements.img.style.transform = 'translateX(0) scale(-1, 1)';
    }
    return res;
  }

  async resetCars() {
    Garage.setResetButtonDisabled(true);
    const winnerMessage = document.querySelector('.winner-message');
    const promises: Promise<EngineData>[] = [];
    this.carsInPage.forEach((car) => {
      promises.push(this.stopCarEngine(car.id));
    });
    winnerMessage?.remove();
    await Promise.all(promises);
    Garage.setStartRaceButtonDisabled(false);
  }
}

export default Garage;
