import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn('uuid', {
    name: 'user_id',
  })
  userId: string;

  @Column('varchar', {
    name: 'first_name',
    nullable: false,
  })
  firstName: string;

  @Column('varchar', {
    name: 'last_name',
    nullable: false,
  })
  lastName: string;
}
