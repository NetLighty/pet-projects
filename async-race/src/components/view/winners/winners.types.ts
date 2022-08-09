export type SortTypes = 'id' | 'wins' | 'time';
export type OrderTypes = 'ASC' | 'DESC';

export interface WinnerInfo {
  id: number;
  name: string;
  color: string;
  time: number;
}

export interface AllWinnerData extends WinnerInfo {
  wins: number;
}
