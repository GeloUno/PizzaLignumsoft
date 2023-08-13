import { IElement } from './element';

export interface IAction {
  _id: string;
  name: string;
  element?: Array<IElement | string>;
}
