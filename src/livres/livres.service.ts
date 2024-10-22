import { Injectable } from '@nestjs/common';
import { Livre } from './livre.entity';

@Injectable()
export class LivresService {
  private livres: Livre[] = [];
  private idCounter = 1;

  findAll(): Livre[] {
    return this.livres;
  }

  findOne(id: number): Livre {
    return this.livres.find(livre => livre.id === id);
  }

  create(livre: Livre): Livre {
    livre.id = this.idCounter++;
    this.livres.push(livre);
    return livre;
  }

  update(id: number, livre: Livre): Livre {
    const index = this.livres.findIndex(l => l.id === id);
    if (index !== -1) {
      this.livres[index] = { ...livre, id };
      return this.livres[index];
    }
    return null;
  }

  remove(id: number): void {
    this.livres = this.livres.filter(livre => livre.id !== id);
  }
}
