import { IAction } from './action';
import { IElement } from './element';

export interface IPizza {
  name: string;
  action: Array<IAction>;
  element: Array<IElement>;
}
