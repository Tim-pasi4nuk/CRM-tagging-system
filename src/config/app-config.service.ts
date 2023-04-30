import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConfigService {
  public readonly DATABASE_DIALECT: 'postgres';
  public readonly DATABASE_HOST: string;
  public readonly DATABASE_PASSWORD: string;
  public readonly DATABASE_PORT: number;
  public readonly DATABASE_USER: string;
  public readonly DATABASE_NAME: string;

  private readonly PORT: number;

  constructor(private readonly configService: ConfigService) {
    this.DATABASE_DIALECT = this.configService.getOrThrow('DATABASE_DIALECT');
    this.DATABASE_HOST = this.configService.getOrThrow('DATABASE_HOST');
    this.DATABASE_PASSWORD = this.configService.getOrThrow('DATABASE_PASSWORD');
    this.DATABASE_PORT = this.configService.getOrThrow('DATABASE_PORT');
    this.DATABASE_USER = this.configService.getOrThrow('DATABASE_USER');
    this.DATABASE_NAME = this.configService.getOrThrow('DATABASE_NAME');

    this.PORT = parseInt(configService.getOrThrow('PORT'), 10);
  }

  public get appPort() {
    return this.PORT;
  }
}
