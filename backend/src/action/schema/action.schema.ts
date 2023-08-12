import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as SchemaMongoose } from 'mongoose';
import { IAction } from '../../interfaces/action';
import { IElement } from '../../interfaces/element';
export type ActionDocument = Action & Document;

@Schema({ timestamps: true })
export class Action implements IAction {
  @Prop({ unique: true })
  name: string;

  @Prop([
    { type: SchemaMongoose.Types.ObjectId, ref: 'Element', unique: false },
  ])
  element: Array<IElement | string>;
}
export const ActionSchema = SchemaFactory.createForClass(Action);
