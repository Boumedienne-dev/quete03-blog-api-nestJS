import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  title: string;

  @Column({ length: 255 })
  context: string;

  @Column({ length: 255 })
  author: string;

  @Column({ length: 255 })
  creationDate: string;
}
