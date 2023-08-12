import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as SchemaMongoose } from 'mongoose';
export type ActionDocument = Action & Document;

@Schema({ timestamps: true })
export class Action {
  @Prop()
  name: string;

  @Prop([
    { type: SchemaMongoose.Types.ObjectId, ref: 'Element', unique: false },
  ])
  element: Array<Action | string>;
}
export const ActionSchema = SchemaFactory.createForClass(Action);
