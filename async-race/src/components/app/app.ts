import AppController from '../controller/appController';
import Garage from '../view/garage/garage';

class App {
  controller: AppController;

  garage: Garage;

  constructor() {
    this.controller = new AppController();
    this.garage = new Garage(this.controller);
  }

  async start(): Promise<void> {
    this.garage.refreshGarage();
    // this.garage.generateCars(100);
  }
}

export default App;
