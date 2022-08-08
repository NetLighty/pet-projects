/* import { ICarDB } from "../../controller/appController.types"; */

import { createCarBlockElement } from '../../../utils/utils';
import AppController from '../../controller/appController';
import { ICarDB } from '../../controller/appController.types';

class Garage {
  controller: AppController;

  constructor(controller: AppController) {
    this.controller = controller;
  }

  async renderCars() {
    const carsData: ICarDB[] = await this.controller.getCars();
    const carBlocksContainer = document.querySelector('.cars-list');
    if (carBlocksContainer) {
      carBlocksContainer.innerHTML = '';
      carsData.forEach((carData) => {
        const carBlock = createCarBlockElement(carData);
        const deleteButton = carBlock.querySelector('.delete');
        // const selectButton = carBlock.querySelector('.select');
        deleteButton?.addEventListener('click', () => this.deleteCar(carData.id));
        carBlocksContainer?.append(carBlock);
      });
    }
  }

  async deleteCar(id: number) {
    await this.controller.deleteCar(id);
    await this.renderCars();
  }
}

export default Garage;
