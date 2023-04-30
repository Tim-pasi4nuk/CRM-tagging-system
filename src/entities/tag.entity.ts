import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './user.entity';

@Entity('Tag')
export class Tag {
  @PrimaryGeneratedColumn('uuid', {
    name: 'tag_id',
  })
  tagId: string;

  @Column('varchar', {
    name: 'name',
    nullable: false,
  })
  name: string;

  @ManyToMany(() => User, (user) => user.userId)
  @JoinTable({
    name: 'tag_user',
    joinColumn: {
      name: 'tag_id',
    },
    inverseJoinColumn: {
      name: 'user_id',
    },
  })
  user: User;
}
