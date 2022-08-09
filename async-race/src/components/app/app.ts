import AppController from '../controller/appController';
import Garage from '../view/garage/garage';
import Winners from '../view/winners/winners';

class App {
  controller: AppController;

  garage: Garage;

  winners: Winners;

  constructor() {
    this.controller = new AppController();
    this.winners = new Winners(this.controller);
    this.garage = new Garage(this.controller, this.winners);
  }

  /* showGarage() {

  }
  showWinners() {

  }
 */
  async start(): Promise<void> {
    /* const winnersButton = document.querySelector('.winners-button');
    const garagebutton = document.querySelector('.garage-button'); */
    this.garage.refreshGarage();
    this.winners.renderWinnersPage();
  }
}

export default App;
