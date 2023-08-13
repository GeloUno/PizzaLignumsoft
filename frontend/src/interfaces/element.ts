import { IAction } from './action';

export interface IElement {
  _id: string;
  name: string;
  action?: IAction | string;
}
