import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid', {
    name: 'user_id',
  })
  userId: string;

  @ApiProperty()
  @Column('varchar', {
    name: 'first_name',
    nullable: false,
  })
  firstName: string;

  @ApiProperty()
  @Column('varchar', {
    name: 'last_name',
    nullable: false,
  })
  lastName: string;

  @ApiProperty()
  @Column('varchar', {
    name: 'last_name',
    nullable: false,
  })
  email: string;
}
