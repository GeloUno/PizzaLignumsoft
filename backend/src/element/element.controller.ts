import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ElementService } from './element.service';
import { CreateElementDto } from './dto/create-element.dto';
import { UpdateElementDto } from './dto/update-element.dto';

@Controller('element')
export class ElementController {
  constructor(private readonly elementService: ElementService) {}

  @Post()
  create(@Body() createElementDto: CreateElementDto) {
    return this.elementService.create(createElementDto);
  }

  @Get()
  findAll() {
    return this.elementService.findAll();
  }
  @Get('byaction/:id')
  findAllByAction(@Param('id') id: string) {
    return this.elementService.findAllByAction(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.elementService.findOne(id);
  }

  @Patch(':id')
  addAction(
    @Param('id') id: string,
    @Body() updateElementDto: UpdateElementDto,
  ) {
    return this.elementService.addAction(id, updateElementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.elementService.remove(id);
  }
}
