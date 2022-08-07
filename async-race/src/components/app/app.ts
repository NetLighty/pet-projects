import AppController from '../controller/appController';

class App {
  controller: AppController;

  constructor() {
    this.controller = new AppController();
  }

  start(): void {
    const cars = this.controller.getCars();
    console.log(cars);
  }
}

export default App;
