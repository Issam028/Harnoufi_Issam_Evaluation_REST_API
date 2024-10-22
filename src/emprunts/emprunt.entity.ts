import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Livre } from '../livres/livre.entity';
import { Utilisateur } from '../utilisateurs/utilisateur.entity';

@Entity()
export class Emprunt {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Livre)
  livre: Livre;

  @ManyToOne(() => Utilisateur)
  utilisateur: Utilisateur;

  @Column()
  dateEmprunt: Date;

  @Column()
  dateRetour: Date;
}
