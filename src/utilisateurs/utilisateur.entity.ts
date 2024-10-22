import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomUtilisateur: string;

  @Column()
  motDePasse: string;
}
