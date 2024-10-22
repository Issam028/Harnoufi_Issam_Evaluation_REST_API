import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UtilisateursService } from '../utilisateurs/utilisateurs.service';

@Injectable()
export class AuthentificationService {
  constructor(
    private readonly utilisateursService: UtilisateursService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(nomUtilisateur: string, motDePasse: string): Promise<any> {
    const utilisateur = await this.utilisateursService.findByNomUtilisateur(nomUtilisateur);
    if (utilisateur && bcrypt.compareSync(motDePasse, utilisateur.motDePasse)) {
      const { motDePasse, ...result } = utilisateur;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.nomUtilisateur, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
