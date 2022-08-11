import { AnimationInfo } from '../../../utils/utils.types';

export type CarsDB = Record<string, string[]>

export interface EngineData {
  velocity: number;
  distance: number;
}

export type ButtonTypes = 'start' | 'stop';

export interface CarRaceResult {
  id: number;
  time: number;
}

export interface CarElements {
  block: HTMLDivElement | null;
  img: HTMLImageElement | null;
  flag: HTMLImageElement | null;
}

export interface Storage {
  animations: AnimationInfo[];
}
