import { createWinnerTableRow } from '../../../utils/utils';
import AppController from '../../controller/appController';
import { ICarDB, IWinner } from '../../controller/appController.types';
import { OrderTypes, SortTypes, WinnerInfo } from './winners.types';

class Winners {
  pageLimit: number;

  controller: AppController;

  allCars: ICarDB[];

  allWinners: IWinner[];

  currentPage: number;

  currentSort: SortTypes;

  currentOrder: OrderTypes;

  constructor(controller: AppController) {
    this.controller = controller;
    this.pageLimit = 10;
    this.allWinners = [];
    this.allCars = [];
    this.currentPage = 1;
    this.currentSort = 'wins';
    this.currentOrder = 'ASC';
    this.initWinners();
  }

  async initWinners() {
    this.allCars = await this.controller.getCars();
    this.allWinners = await this.controller.getWinners();
  }

  async getWinnersPage(page: number, sort: SortTypes, order: OrderTypes) {
    const winners = await this.controller.getWinners({
      _page: `${page}`, _limit: `${this.pageLimit}`, _sort: sort, _order: order
    });
    return winners;
  }

  async renderWinnersPage() {
    const winnersData: IWinner[] = await this.getWinnersPage(
      this.currentPage,
      this.currentSort,
      this.currentOrder
    );
    const winnersTableBody = document.querySelector('.winners-table-body');
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
  }

  async updateWinner(id: number, wins: number, time: number, lastTime: number) {
    const bestTime = time < lastTime ? time : lastTime;
    await this.controller.updateWinner({ id, wins, time: bestTime });
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
    await this.renderWinnersPage();
  }
}

export default Winners;
