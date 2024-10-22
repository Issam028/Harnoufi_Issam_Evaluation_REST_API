import { Injectable } from '@nestjs/common';
import { Utilisateur } from './utilisateur.entity';

@Injectable()
export class UtilisateursService {
  private utilisateurs: Utilisateur[] = [];
  private idCounter = 1;

  findAll(): Utilisateur[] {
    return this.utilisateurs;
  }

  findOne(id: number): Utilisateur {
    return this.utilisateurs.find(utilisateur => utilisateur.id === id);
  }

  create(utilisateur: Utilisateur): Utilisateur {
    utilisateur.id = this.idCounter++;
    this.utilisateurs.push(utilisateur);
    return utilisateur;
  }

  findByNomUtilisateur(nomUtilisateur: string): Utilisateur | undefined {
    return this.utilisateurs.find(u => u.nomUtilisateur === nomUtilisateur);
  }
  

  update(id: number, utilisateur: Utilisateur): Utilisateur {
    const index = this.utilisateurs.findIndex(u => u.id === id);
    if (index !== -1) {
      this.utilisateurs[index] = { ...utilisateur, id };
      return this.utilisateurs[index];
    }
    return null;
  }

  remove(id: number): void {
    this.utilisateurs = this.utilisateurs.filter(utilisateur => utilisateur.id !== id);
  }
}
