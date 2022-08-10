import { EngineData } from '../view/garage/garage.types';
import {
  DriveData,
  DriveStatus,
  EngineStatus, fetchData, ICar, ICarDB, IWinner
} from './appController.types';

class AppController {
  apiUrl: string;

  constructor() {
    this.apiUrl = 'http://127.0.0.1:3000';
  }

  async getCars(params?: Record<string, string>): Promise<ICarDB[]> {
    const res = await AppController.request(this.apiUrl + '/garage?' + new URLSearchParams(params), 'GET');
    return res.json();
  }

  async getCar(id: number): Promise<ICarDB> {
    const res = await AppController.request(this.apiUrl + `/garage/${id}`, 'GET');
    return res.json();
  }

  async createCar(data: ICar): Promise<Response> {
    const res = await AppController.request(this.apiUrl + '/garage', 'POST', data);
    return res;
  }

  async updateCar(id: number, data: ICar): Promise<Response> {
    const res = await AppController.request(this.apiUrl + `/garage/${id}`, 'PUT', data);
    return res;
  }

  async deleteCar(id: number): Promise<Response> {
    const res = await AppController.request(this.apiUrl + `/garage/${id}`, 'DELETE');
    return res;
  }

  async ruleCarEngine(id: number, status: EngineStatus): Promise<EngineData> {
    const res = await AppController.request(this.apiUrl + '/engine?' + new URLSearchParams({ id: `${id}`, status }), 'PATCH');
    return res.json();
  }

  async driveCarEngine(id: number, status: DriveStatus): Promise<DriveData> {
    const res = await AppController.request(this.apiUrl + '/engine?' + new URLSearchParams({ id: `${id}`, status }), 'PATCH').catch();
    return res.status !== 200 ? { success: false } : { success: true };
  }

  async getWinners(params?: Record<string, string>): Promise<IWinner[]> {
    const res = await AppController.request(this.apiUrl + '/winners?' + new URLSearchParams(params), 'GET');
    return res.json();
  }

  async getWinner(id: string): Promise<IWinner> {
    const winner: Response = await AppController.request(this.apiUrl + `/winners/${id}`, 'GET');
    return winner.json();
  }

  async createWinner(data: IWinner): Promise<Response> {
    const res = await AppController.request(this.apiUrl + '/winners', 'POST', data);
    return res;
  }

  async deleteWinner(id: string): Promise<IWinner> {
    const winner: Response = await AppController.request(this.apiUrl + `/winners/${id}`, 'DELETE');
    return winner.json();
  }

  async updateWinner(data: IWinner): Promise<IWinner> {
    const winner: Response = await AppController.request(this.apiUrl + `/winners/${data.id}`, 'PUT', data);
    return winner.json();
  }

  static async request(url: string, method: string, data?: fetchData) {
    const res = await fetch(url, { method, body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    return res;
  }
}

export default AppController;
