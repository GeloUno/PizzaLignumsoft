import { Injectable } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pizza, PizzaDocument } from './schema/pizza.schema';

@Injectable()
export class PizzaService {
  constructor(
    @InjectModel(Pizza.name) private pizzaModel: Model<PizzaDocument>,
  ) {}
  create(createPizzaDto: CreatePizzaDto) {
    return this.pizzaModel.create(createPizzaDto);
  }

  findAll() {
    return `This action returns all pizza`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pizza`;
  }

  update(id: number, updatePizzaDto: UpdatePizzaDto) {
    return `This action updates a #${id} pizza`;
  }

  remove(id: number) {
    return `This action removes a #${id} pizza`;
  }
}
