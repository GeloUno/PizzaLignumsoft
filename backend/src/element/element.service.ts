import { Injectable, ConflictException } from '@nestjs/common';
import { CreateElementDto } from './dto/create-element.dto';
import { UpdateElementDto } from './dto/update-element.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Element, ElementDocument } from './schema/element.schema';
import { Model } from 'mongoose';
import Monngoose from 'mongoose';

@Injectable()
export class ElementService {
  constructor(
    @InjectModel(Element.name) private elementModel: Model<ElementDocument>,
  ) {}
  create(createElementDto: CreateElementDto) {
    return this.elementModel.create(createElementDto);
  }

  findAll() {
    return this.elementModel.find().lean().exec();
  }

  findOne(id: string) {
    if (!Monngoose.Types.ObjectId.isValid(id))
      throw new ConflictException('No id');
    return this.elementModel.findById(id).lean().exec();
  }
  findByAction(id: string) {
    if (!Monngoose.Types.ObjectId.isValid(id))
      throw new ConflictException('No id');
    return this.elementModel.find({ action: id }).lean().exec();
  }

  addAction(id: string, updateElementDto: UpdateElementDto) {
    if (!Monngoose.Types.ObjectId.isValid(id))
      throw new ConflictException('No id');
    return this.elementModel
      .findByIdAndUpdate(id, updateElementDto, { new: true })
      .lean()
      .exec();
  }

  remove(id: string) {
    if (!Monngoose.Types.ObjectId.isValid(id))
      throw new ConflictException('No id');
    return this.elementModel.findByIdAndDelete(id);
  }
}
