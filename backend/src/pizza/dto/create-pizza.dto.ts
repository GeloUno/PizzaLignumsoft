import { IsNotEmpty } from 'class-validator';
import { IAction } from '../../interfaces/action';
import { IElement } from '../../interfaces/element';
export class CreatePizzaDto {
  @IsNotEmpty()
  name: string;
  action: Array<IAction | string>;
  element: Array<IElement | string>;
}
