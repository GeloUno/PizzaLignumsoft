import { IAction } from './action';
import { IElement } from './element';
export type Product =
  | Pick<IElement, '_id' | 'name'>
  | Pick<IAction, '_id' | 'name'>;
