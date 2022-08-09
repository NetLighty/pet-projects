import {
  carDriveAnimation, createCarBlockElement, generateCarsNumber, getDistanceBetweenElems,
  getPaginationButtons,
  getRandomCarName,
  getRandomColor, renderWinnerMessage, startRaceButtonClass, stopRaceButtonClass, unknownCarName
} from '../../../utils/utils';
import AppController from '../../controller/appController';
import { DriveData, ICarDB } from '../../controller/appController.types';
import {
  CarElements, CarRaceResult, EngineData, Storage
} from './garage.types';

class Garage {
  controller: AppController;

  generateCarsButton: HTMLElement | null;

  createButton: Element | null;

  carsInPage: ICarDB[];

  selectedCarId: number;

  updateTextInput: HTMLInputElement | null;

  storage: Storage;

  pageLimit: number;

  currentPage: number;

  allCars: ICarDB[];

  constructor(controller: AppController) {
    this.controller = controller;
    this.allCars = [];
    this.pageLimit = 7;
    this.currentPage = 1;
    this.carsInPage = [];
    this.storage = { animations: [] };
    this.selectedCarId = 0;
    this.updateTextInput = document.getElementById('text-update') as HTMLInputElement | null;
    this.generateCarsButton = document.getElementById('generate-cars-button');
    this.createButton = document.getElementById('create-button');
    this.initGarage();
  }

  async initGarage() {
    const updateButton = document.getElementById('update-button') as HTMLInputElement | null;
    const startRaceButton = document.querySelector('.start-race-button') as HTMLButtonElement | null;
    startRaceButton?.addEventListener('click', () => this.startRace());
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
        const deleteButton = carBlock.querySelector('.delete');
        const selectButton = carBlock.querySelector('.select');
        const startRaceButton = carBlock.querySelector(startRaceButtonClass);
        const stopRaceButton = carBlock.querySelector(stopRaceButtonClass);
        deleteButton?.addEventListener('click', () => this.deleteCar(car.id));
        selectButton?.addEventListener('click', () => this.selectCar(car.id));
        startRaceButton?.addEventListener('click', () => this.startCarEngine(car.id));
        stopRaceButton?.addEventListener('click', () => this.stopCarEngine(car.id));
        carBlocksContainer?.append(carBlock);
      });
    }
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
    if (this.updateTextInput && selectedCarName) {
      this.updateTextInput.value = selectedCarName;
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
    const colorInput = document.getElementById('colorpicker-update') as HTMLInputElement | null;
    if (this.updateTextInput && colorInput) {
      await this.controller.updateCar(this.selectedCarId, {
        name: this.updateTextInput.value, color: colorInput.value
      });
      this.updateTextInput.value = '';
    }
    await this.refreshGarage();
  }

  static getCarBlockElements(id: number) {
    const carBlock = document.getElementById(`${id}`) as HTMLDivElement | null;
    const carImg = carBlock?.querySelector('.car__img') as HTMLImageElement | null;
    const flag = carBlock?.querySelector('.flag') as HTMLImageElement | null;
    return { block: carBlock, img: carImg, flag: flag };
  }

  async startCarEngine(id: number): Promise<CarRaceResult> {
    const carElements: CarElements = Garage.getCarBlockElements(id);
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

  async startRace() {
    const responses: Promise<CarRaceResult>[] = [];
    this.carsInPage.forEach((car) => {
      responses.push(this.startCarEngine(car.id));
    });
    const winnerIdAndTime = await Promise.any(responses);
    const winnerInfo = this.carsInPage.find((winner) => winner.id === winnerIdAndTime.id);
    const winnerName = winnerInfo?.name;
    if (winnerName) {
      console.log('render winner message');
      renderWinnerMessage(winnerInfo.name, winnerIdAndTime.time);
    }
  }

  async stopCarEngine(id: number) {
    const carElements = Garage.getCarBlockElements(id);
    if (carElements.img) {
      await this.controller.ruleCarEngine(id, 'stopped');
      cancelAnimationFrame(this.storage.animations[id].id);
      carElements.img.style.transform = 'translateX(0) scale(-1, 1)';
    }
  }
}

export default Garage;
