import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { Utilisateur } from './utilisateur.entity';

@Controller('utilisateurs')
export class UtilisateursController {
  constructor(private readonly utilisateursService: UtilisateursService) {}

  @Get()
  findAll() {
    return this.utilisateursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.utilisateursService.findOne(+id);
  }

  @Post()
  create(@Body() utilisateur: Utilisateur) {
    return this.utilisateursService.create(utilisateur);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() utilisateur: Utilisateur) {
    return this.utilisateursService.update(+id, utilisateur);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.utilisateursService.remove(+id);
  }
}
