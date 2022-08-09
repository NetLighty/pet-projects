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

export interface WinnersParams {
  _page: string;
  _limit: string;
  _sort: 'id' | 'wins' | 'time';
  _order: 'ASC' | 'DESC';
}

export interface DriveData {
  success: boolean;
}

export type fetchData = ICar | IWinner;
export type apiDataRes = ICarDB | IWinner;
export type EngineStatus = 'started' | 'stopped';
export type DriveStatus = 'drive';
