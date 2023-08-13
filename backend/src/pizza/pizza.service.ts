import { Injectable, ConflictException } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pizza, PizzaDocument } from './schema/pizza.schema';
import Monngoose from 'mongoose';

@Injectable()
export class PizzaService {
  constructor(
    @InjectModel(Pizza.name) private pizzaModel: Model<PizzaDocument>,
  ) {}
  create(createPizzaDto: CreatePizzaDto) {
    return this.pizzaModel.create(createPizzaDto);
  }

  findAll() {
    return this.pizzaModel
      .find()
      .select(['-__v', '-updatedAt', '-createdAt'])
      .lean()
      .exec();
  }

  findOne(id: string) {
    if (!Monngoose.Types.ObjectId.isValid(id))
      throw new ConflictException('No id');
    return this.pizzaModel
      .findById(id)
      .populate('action')
      .populate('element')
      .lean()
      .exec();
  }
  findOneByAction(id: string) {
    if (!Monngoose.Types.ObjectId.isValid(id))
      throw new ConflictException('No id');
    return this.pizzaModel
      .find({ action: id })
      .populate('action')
      .populate('element')
      .lean()
      .exec();
  }
  findOneByElement(id: string) {
    if (!Monngoose.Types.ObjectId.isValid(id))
      throw new ConflictException('No id');
    return this.pizzaModel
      .find({ element: id })
      .populate('action')
      .populate('element')
      .lean()
      .exec();
  }

  async addActionElement(id: string, updatePizzaDto: UpdatePizzaDto) {
    if (!Monngoose.Types.ObjectId.isValid(id))
      throw new ConflictException('No id');

    return this.pizzaModel.findByIdAndUpdate(
      id,
      {
        $push: {
          action: updatePizzaDto.action,
          element: updatePizzaDto.element,
        },
      },
      { new: true },
    );
  }

  remove(id: string) {
    if (!Monngoose.Types.ObjectId.isValid(id))
      throw new ConflictException('No id');
    return this.pizzaModel.findByIdAndDelete(id);
  }
}
