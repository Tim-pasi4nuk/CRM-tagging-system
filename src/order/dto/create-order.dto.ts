import { IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @IsString({ each: true })
  @IsUUID('4', { each: true })
  tagIds: string[];
}
