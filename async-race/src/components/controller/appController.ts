import {
  engineStatus, fetchData, ICar, ICarDB, IWinner
} from './appController.types';

class AppController {
  apiUrl: string;

  constructor() {
    this.apiUrl = 'http://127.0.0.1:3000';
  }

  async getCars(params?: Record<string, string>): Promise<ICarDB[]> {
    const cars: ICarDB[] = await AppController.request(this.apiUrl + '/garage?' + new URLSearchParams(params), 'GET');
    return cars;
  }

  async getCar(id: string): Promise<ICarDB> {
    const car = await AppController.request(this.apiUrl + `/garage/${id}`, 'GET');
    return car;
  }

  async createCar(data: ICar): Promise<Response> {
    const res = await AppController.request(this.apiUrl + '/garage', 'POST', data);
    return res;
  }

  async updateCar(id: string, data: ICar): Promise<Response> {
    const res = await AppController.request(this.apiUrl + `/garage/${id}`, 'PUT', data);
    return res;
  }

  async deleteCar(id: string): Promise<Response> {
    const res = await AppController.request(this.apiUrl + `/garage/${id}`, 'DELETE');
    return res;
  }

  async ruleCarEngine(id: string, status: engineStatus): Promise<Response> {
    const res = await AppController.request(this.apiUrl + '/engine?' + new URLSearchParams({ id, status }), 'PATCH');
    return res;
  }

  async getWinners(params?: Record<string, string>): Promise<IWinner[]> {
    const winners: IWinner[] = await AppController.request(this.apiUrl + '/winners?' + new URLSearchParams(params), 'GET');
    return winners;
  }

  async getWinner(id: string): Promise<IWinner> {
    const winner: IWinner = await AppController.request(this.apiUrl + `/winners/${id}`, 'GET');
    return winner;
  }

  async createWinner(data: IWinner): Promise<Response> {
    const res = await AppController.request(this.apiUrl + '/winners', 'POST', data);
    return res;
  }

  async deleteWinner(id: string): Promise<IWinner> {
    const winner: IWinner = await AppController.request(this.apiUrl + `/winners/${id}`, 'DELETE');
    return winner;
  }

  async updateWinner(id: string, data: IWinner): Promise<IWinner> {
    const winner: IWinner = await AppController.request(this.apiUrl + `/winners/${id}`, 'DELETE', data);
    return winner;
  }

  static async request(url: string, method: string, data?: fetchData) {
    const res = await fetch(url, { method, body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    return res.json();
  }
}

export default AppController;
