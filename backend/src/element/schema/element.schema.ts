import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IElement } from '../../interfaces/element';
import { IAction } from 'src/interfaces/action';

export type ElementDocument = Element & Document;

@Schema()
export class Element implements IElement {
  @Prop()
  name: string;
  @Prop()
  action?: IAction;
}

export const ElementSchema = SchemaFactory.createForClass(Element);
