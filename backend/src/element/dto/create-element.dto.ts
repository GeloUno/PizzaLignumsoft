import { IAction } from 'src/interfaces/action';
import { IElement } from '../../interfaces/element';

export class CreateElementDto implements IElement {
  name: string;
  action?: IAction[];
}
