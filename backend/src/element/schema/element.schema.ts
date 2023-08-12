import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as SchemaMongoose } from 'mongoose';
import { IElement } from '../../interfaces/element';
import { IAction } from 'src/interfaces/action';

export type ElementDocument = Element & Document;

@Schema({ timestamps: true })
export class Element implements IElement {
  @Prop()
  name: string;
  @Prop({ type: SchemaMongoose.Types.ObjectId, ref: 'Action', unique: false })
  action?: IAction;
}

export const ElementSchema = SchemaFactory.createForClass(Element);
