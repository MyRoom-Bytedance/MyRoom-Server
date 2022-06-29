import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user';
@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, {nullable: true})
  creator: User;

  @Column({comment: '项目名称'})
  name: string;

  @Column({comment: '项目内容'})
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @DeleteDateColumn()
  // deletedAt: Date;
}