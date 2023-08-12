import { ConflictException, Injectable } from '@nestjs/common';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Action, ActionDocument } from './schema/action.schema';
import { Model } from 'mongoose';
import Monngoose from 'mongoose';

@Injectable()
export class ActionService {
  constructor(
    @InjectModel(Action.name) private actionModel: Model<ActionDocument>,
  ) {}
  create(createActionDto: CreateActionDto) {
    return this.actionModel.create(createActionDto);
  }

  findAll() {
    return `This action returns all action`;
  }

  findOne(id: string) {
    if (!Monngoose.Types.ObjectId.isValid(id))
      throw new ConflictException('No id');
    return `This action returns a #${id} action`;
  }

  update(id: string, updateActionDto: UpdateActionDto) {
    if (!Monngoose.Types.ObjectId.isValid(id))
      throw new ConflictException('No id');
    return `This action updates a #${id} action`;
  }

  remove(id: string) {
    if (!Monngoose.Types.ObjectId.isValid(id))
      throw new ConflictException('No id');
    return this.actionModel.findByIdAndDelete(id);
  }
}
