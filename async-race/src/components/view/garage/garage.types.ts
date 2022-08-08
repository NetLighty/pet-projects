import { AnimationInfo } from '../../../utils/utils.types';

export type CarsDB = Record<string, string[]>

export interface EngineData {
  velocity: number;
  distance: number;
}

export interface Storage {
  animations: AnimationInfo[];
}
