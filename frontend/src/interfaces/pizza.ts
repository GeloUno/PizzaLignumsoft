import { IAction } from './action';
import { IElement } from './element';

export interface IPizza {
  _id: string;
  name: string;
  action: Array<IAction>;
  element: Array<IElement>;
}
