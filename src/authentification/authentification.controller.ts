import { Controller, Post, Body } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';

@Controller('authentification')
export class AuthentificationController {
  constructor(private readonly authentificationService: AuthentificationService) {}

  @Post('login')
  async login(@Body() body: { nomUtilisateur: string; motDePasse: string }) {
    return this.authentificationService.login(body);
  }
}
