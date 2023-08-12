import { IAction } from './action';
import { IElement } from './element';

export interface IPizza {
  name: string;
  action: Array<IAction | string>;
  element: Array<IElement | string>;
}
