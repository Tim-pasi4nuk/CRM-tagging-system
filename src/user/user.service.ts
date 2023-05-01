import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto';
import { User } from 'src/entities';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async getUsers(): Promise<User[]> {
    return await this.userRepository.getUsers();
  }

  public async getUserById(userId: string): Promise<User> {
    return await this.userRepository.getUserById(userId);
  }

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(createUserDto);
  }

  public async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    await this.userRepository.updateUser(userId, updateUserDto);
    return await this.getUserById(userId);
  }

  public async deleteUserById(userId: string): Promise<void> {
    await this.userRepository.deleteUserById(userId);
  }
}
