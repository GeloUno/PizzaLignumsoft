import { Injectable } from '@nestjs/common';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Action, ActionDocument } from './schema/action.schema';
import { Model } from 'mongoose';

@Injectable()
export class ActionService {
  constructor(
    @InjectModel(Action.name) private actionModel: Model<ActionDocument>,
  ) {}
  create(createActionDto: CreateActionDto) {
    // create() {
    return this.actionModel.create(createActionDto);
  }

  findAll() {
    return `This action returns all action`;
  }

  findOne(id: number) {
    return `This action returns a #${id} action`;
  }

  update(id: number, updateActionDto: UpdateActionDto) {
    return `This action updates a #${id} action`;
  }

  remove(id: number) {
    return `This action removes a #${id} action`;
  }
}
