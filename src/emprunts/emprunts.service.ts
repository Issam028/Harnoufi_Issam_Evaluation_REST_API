import { Injectable } from '@nestjs/common';
import { Emprunt } from './emprunt.entity';
import { Livre } from '../livres/livre.entity';
import { Utilisateur } from '../utilisateurs/utilisateur.entity';

@Injectable()
export class EmpruntsService {
  private emprunts: Emprunt[] = [];
  private idCounter = 1;

  findAll(): Emprunt[] {
    return this.emprunts;
  }

  findOne(id: number): Emprunt {
    return this.emprunts.find(emprunt => emprunt.id === id);
  }

  create(emprunt: Emprunt): Emprunt {
    emprunt.id = this.idCounter++;
    this.emprunts.push(emprunt);
    return emprunt;
  }

  remove(id: number): void {
    this.emprunts = this.emprunts.filter(emprunt => emprunt.id !== id);
  }
}
