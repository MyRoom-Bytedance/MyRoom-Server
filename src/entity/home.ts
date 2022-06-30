import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user';
@Entity()
export class Home {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, {nullable: true})
  creator: User;

  @Column({nullable: true, comment: '房源图片'})
  image: string;

  @Column({comment: '房源名称'})
  listing_name: string;

  @Column({comment: '房源价格'})
  pricing: number;

  @Column({comment: '几室'})
  floor_plan_room: number;

  @Column({comment: '几厅'})
  floor_plan_hall: number;

  @Column({comment: '面积'})
  squaremeter: number;

  @Column({comment: '楼层'})
  total_floor: number;

  @Column({nullable: true})
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @DeleteDateColumn()
  // deletedAt: Date;
};