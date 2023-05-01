import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto';
import { UserService } from './user.service';
import { User } from 'src/entities';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({ status: 200, type: User })
  @ApiOperation({ summary: 'Get all users' })
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Get(':userId')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: User,
  })
  @ApiOperation({ summary: 'Get user by userId' })
  async getUserByUserId(@Param('userId') userId: string): Promise<User> {
    return await this.userService.getUserById(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, type: User })
  async createUser(@Body() body: CreateUserDto): Promise<User> {
    return await this.userService.createUser(body);
  }

  @Patch(':userId')
  @ApiResponse({ status: 200, type: User })
  @ApiOperation({ summary: 'Update user by userId' })
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.updateUser(userId, updateUserDto);
  }

  @Delete(':userId')
  @ApiResponse({ status: 204 })
  @ApiOperation({ summary: 'Delete user by userId' })
  async deleteUserById(@Param('userId') userId: string): Promise<void> {
    await this.userService.deleteUserById(userId);
  }
}
