import {
  createWinnersView, createWinnerTableRow, getArrow, getPaginationButtons
} from '../../../utils/utils';
import AppController from '../../controller/appController';
import { ICarDB, IWinner } from '../../controller/appController.types';
import { OrderTypes, SortTypes, WinnerInfo } from './winners.types';

class Winners {
  pageLimit: number;

  controller: AppController;

  allCars: ICarDB[];

  allWinners: IWinner[];

  winnersOnPage: IWinner[];

  currentPage: number;

  currentSort: SortTypes;

  currentOrder: OrderTypes;

  constructor(controller: AppController) {
    this.controller = controller;
    this.pageLimit = 10;
    this.allWinners = [];
    this.winnersOnPage = [];
    this.allCars = [];
    this.currentPage = 1;
    this.currentSort = 'wins';
    this.currentOrder = 'DESC';
    this.initWinners();
  }

  async initWinners() {
    const winnersView = createWinnersView();
    const page = document.querySelector('.page');
    page?.append(winnersView);
    const winsCell = document.getElementById('wins');
    const idCell = document.getElementById('id');
    const timeCell = document.getElementById('time');
    winsCell?.addEventListener('click', (e) => this.sortWinners(e));
    winsCell?.append(getArrow());
    idCell?.addEventListener('click', (e) => this.sortWinners(e));
    timeCell?.addEventListener('click', (e) => this.sortWinners(e));
    this.allCars = await this.controller.getCars();
    this.allWinners = await this.controller.getWinners();
    await this.refreshWinners();
  }

  async getWinnersPage(page: number, sort: SortTypes, order: OrderTypes) {
    this.winnersOnPage = await this.controller.getWinners({
      _page: `${page}`, _limit: `${this.pageLimit}`, _sort: sort, _order: order
    });
    return this.winnersOnPage;
  }

  async sortWinners(e: MouseEvent) {
    document.querySelector('.arrow')?.remove();
    const target = e.target as HTMLTableCellElement;
    const arrow = getArrow();
    this.currentOrder = this.currentOrder === 'DESC' ? 'ASC' : 'DESC';
    if (this.currentOrder === 'ASC') {
      arrow.classList.remove('down');
    }
    target.append(arrow);
    this.currentSort = target.id as SortTypes;
    await this.renderWinnersPage();
  }

  async renderWinnersPage() {
    const winnersData: IWinner[] = await this.getWinnersPage(
      this.currentPage,
      this.currentSort,
      this.currentOrder
    );
    const winnersTableBody = document.querySelector('.winners__table__body');
    if (winnersTableBody) {
      winnersTableBody.innerHTML = '';
      winnersData.forEach((winnerData) => {
        const winnerCar = this.allCars.find((car) => {
          return car.id === winnerData.id;
        });
        if (winnerCar && winnersTableBody) {
          const tableRow = createWinnerTableRow({
            id: winnerData.id,
            name: winnerCar.name,
            color: winnerCar.color,
            time: winnerData.time,
            wins: winnerData.wins
          });
          winnersTableBody.append(tableRow);
        }
      });
    }
  }

  async createWinner(id: number, wins: number, time: number) {
    await this.controller.createWinner({ id, wins, time });
    await this.refreshWinners();
  }

  async updateWinner(id: number, wins: number, time: number, lastTime: number) {
    const bestTime = time < lastTime ? time : lastTime;
    await this.controller.updateWinner({ id, wins, time: bestTime });
    await this.refreshWinners();
  }

  async addWinnerInfo(winnerInfo: WinnerInfo) {
    const isExist = this.allWinners.find((winner) => {
      return winner.id === winnerInfo.id;
    });
    if (isExist) {
      await this.updateWinner(winnerInfo.id, isExist.wins + 1, winnerInfo.time, isExist.time);
    } else {
      await this.createWinner(winnerInfo.id, 1, winnerInfo.time);
    }
  }

  renderPaginationButtons() {
    const buttonsContainer = document.querySelector('.winners-pagination');
    const pagesNumber = this.allWinners.length / this.pageLimit;
    const buttons = getPaginationButtons(pagesNumber);
    if (buttonsContainer) {
      buttonsContainer.innerHTML = '';
      buttons.forEach((button, index) => {
        button.addEventListener('click', () => this.changePage(index + 1));
        buttonsContainer.append(button);
      });
    }
  }

  async changePage(page: number) {
    this.currentPage = page;
    await this.renderWinnersPage();
    this.renderPageNumber();
  }

  async refreshWinners() {
    this.allWinners = await this.controller.getWinners();
    await this.renderWinnersPage();
    this.renderPaginationButtons();
    this.renderPageNumber();
    this.renderWinnersAmount();
  }

  async deleteWinner(id: number) {
    await this.controller.deleteWinner(id);
    await this.refreshWinners();
  }

  renderWinnersAmount() {
    const winnersAmountElement = document.querySelector('.winners-amount');
    if (winnersAmountElement) {
      winnersAmountElement.textContent = `${this.allWinners.length}`;
    }
  }

  renderPageNumber() {
    const pageNumberElement = document.querySelector('.winners-page-number');
    if (pageNumberElement) {
      pageNumberElement.textContent = `${this.currentPage}`;
    }
  }
}

export default Winners;
