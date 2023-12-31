import { Module } from '@nestjs/common';
import { ElementService } from './element.service';
import { ElementController } from './element.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Element, ElementSchema } from './schema/element.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Element.name, schema: ElementSchema }]),
  ],
  controllers: [ElementController],
  providers: [ElementService],
})
export class ElementModule {}
