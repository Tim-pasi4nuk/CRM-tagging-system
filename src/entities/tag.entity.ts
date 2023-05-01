import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('Tag')
export class Tag {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid', {
    name: 'tag_id',
  })
  tagId: string;

  @ApiProperty()
  @Column('varchar', {
    name: 'name',
    nullable: false,
  })
  name: string;

  @ApiProperty()
  @Column('varchar', {
    name: 'color',
    nullable: false,
  })
  color: string;

  @ApiProperty()
  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
