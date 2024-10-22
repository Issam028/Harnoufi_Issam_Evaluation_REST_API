import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { EmpruntsService } from './emprunts.service';
import { Emprunt } from './emprunt.entity';
import { AuthGuard } from '@nestjs/passport';


@Controller('emprunts')
@UseGuards(AuthGuard('jwt'))

export class EmpruntsController {
  constructor(private readonly empruntsService: EmpruntsService) {}

  @Get()
  findAll() {
    return this.empruntsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empruntsService.findOne(+id);
  }

  @Post()
  create(@Body() emprunt: Emprunt) {
    return this.empruntsService.create(emprunt);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empruntsService.remove(+id);
  }
}
