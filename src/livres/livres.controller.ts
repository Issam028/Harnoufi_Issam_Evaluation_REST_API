import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LivresService } from './livres.service';
import { Livre } from './livre.entity';

@Controller('livres')
export class LivresController {
  constructor(private readonly livresService: LivresService) {}

  @Get()
  findAll() {
    return this.livresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.livresService.findOne(+id);
  }

  @Post()
  create(@Body() livre: Livre) {
    return this.livresService.create(livre);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() livre: Livre) {
    return this.livresService.update(+id, livre);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livresService.remove(+id);
  }
}
