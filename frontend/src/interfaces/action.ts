import { IElement } from './element';

export interface IAction {
  name: string;
  element?: Array<IElement | string>;
}
