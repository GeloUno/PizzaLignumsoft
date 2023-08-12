import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as SchemaMongoose } from 'mongoose';
import { Action } from '../../action/schema/action.schema';
import { Element } from '../../element/schema/element.schema';

export type TwoFactorDocument = Pizza & Document;

@Schema({ timestamps: true })
export class Pizza {
  @Prop({ unique: true })
  name: string;

  @Prop([{ type: SchemaMongoose.Types.ObjectId, ref: 'Action', unique: false }])
  action: Array<Action | string>;

  @Prop([
    { type: SchemaMongoose.Types.ObjectId, ref: 'Element', unique: false },
  ])
  element: Array<Element | string>;
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);
