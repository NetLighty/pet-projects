/* import { ICarDB } from "../../controller/appController.types"; */

import {
  createCarBlockElement, generateCarsNumber, getRandomCarName, getRandomColor
} from '../../../utils/utils';
import AppController from '../../controller/appController';
import { ICarDB } from '../../controller/appController.types';

class Garage {
  controller: AppController;

  generateCarsButton: HTMLElement | null;

  carsAmountElement: Element | null;

  createButton: Element | null;

  cars: ICarDB[];

  selectedCarId: number;

  updateTextInput: HTMLInputElement | null;

  constructor(controller: AppController) {
    this.controller = controller;
    this.cars = [];
    this.selectedCarId = 0;
    this.updateTextInput = document.getElementById('text-update') as HTMLInputElement | null;
    this.generateCarsButton = document.getElementById('generate-cars-button');
    this.carsAmountElement = document.querySelector('.cars-amount');
    this.createButton = document.getElementById('create-button');
    this.initGarage();
  }

  async initGarage() {
    const updateButton = document.getElementById('update-button') as HTMLInputElement | null;
    this.generateCarsButton?.addEventListener('click', () => this.generateCars(generateCarsNumber));
    this.createButton?.addEventListener('click', () => this.createCar());
    updateButton?.addEventListener('click', () => this.updateCar());
  }

  async refreshGarage() {
    await this.renderCars();
    this.renderCarsAmount();
  }

  async renderCars() {
    const carsData: ICarDB[] = await this.controller.getCars();
    this.cars = carsData;
    const carBlocksContainer = document.querySelector('.cars-list');
    if (carBlocksContainer) {
      carBlocksContainer.innerHTML = '';
      this.cars.forEach((car) => {
        const carBlock = createCarBlockElement(car);
        const deleteButton = carBlock.querySelector('.delete');
        const selectButton = carBlock.querySelector('.select');
        deleteButton?.addEventListener('click', () => this.deleteCar(car.id));
        selectButton?.addEventListener('click', () => this.selectCar(car.id));
        carBlocksContainer?.append(carBlock);
      });
    }
  }

  renderCarsAmount() {
    if (this.carsAmountElement) {
      this.carsAmountElement.innerHTML = `${this.cars.length}`;
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
      await this.controller.createCar({ name: textInput.value, color: colorInput.value });
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
}

export default Garage;
