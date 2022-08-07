import AppController from '../controller/appController';

class App {
  controller: AppController;

  constructor() {
    this.controller = new AppController();
  }

  async start(): Promise<void> {
    const cars = await this.controller.getCars();
    console.log(cars);
  }
}

export default App;
