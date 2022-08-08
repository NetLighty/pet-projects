export interface ICar {
  name: string;
  color: string;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface ICarDB extends ICar {
  id: number;
}

export interface IWinnerDB extends IWinner {
  id: number;
}

export interface winnersParams {
  _page: string;
  _limit: string;
  _sort: 'id' | 'wins' | 'time';
  _order: 'ASC' | 'DESC';
}

export type fetchData = ICar | IWinner;
export type apiDataRes = ICarDB | IWinnerDB;
export type engineStatus = 'started' | 'stopped' | 'drive';
