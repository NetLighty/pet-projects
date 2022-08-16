import { renderPageTemplate } from '../../utils/utils';
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

  static getWinnersAndGarageBlocks(): {garage: Element | null, winners: Element | null} {
    const garage = document.querySelector('.garage');
    const winners = document.querySelector('.winners');
    return { garage, winners };
  }

  static showGarage(): void {
    const winnerAndGarage = App.getWinnersAndGarageBlocks();
    winnerAndGarage.garage?.classList.remove('hiden');
    winnerAndGarage.winners?.classList.add('hiden');
  }

  static showWinners(): void {
    const winnerAndGarage = App.getWinnersAndGarageBlocks();
    winnerAndGarage.garage?.classList.add('hiden');
    winnerAndGarage.winners?.classList.remove('hiden');
  }

  async start(): Promise<void> {
    renderPageTemplate();
    const winnersButton = document.querySelector('.winners-button');
    const garageButton = document.querySelector('.garage-button');
    winnersButton?.addEventListener('click', () => App.showWinners());
    garageButton?.addEventListener('click', () => App.showGarage());
    this.garage.refreshGarage();
    this.winners.renderWinnersPage();
  }
}

export default App;
