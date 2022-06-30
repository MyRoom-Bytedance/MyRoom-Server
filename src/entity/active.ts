import {Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import {Project} from "./project";

@Entity()
export class Active {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Project)
  @JoinColumn()
  project: Project;
}