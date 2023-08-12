import { IElement } from 'src/interfaces/element';
import { IAction } from '../../interfaces/action';

export class CreateActionDto implements IAction {
  name: string;
  element?: IElement;
}
