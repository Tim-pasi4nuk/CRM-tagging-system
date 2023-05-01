import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TagService } from './tag.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Tag } from 'src/entities';
import { CreateTagDto } from './dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@ApiTags('Tag')
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get(':userId')
  @ApiResponse({
    status: 200,
    type: [Tag],
  })
  @ApiOperation({ summary: 'Get tags by userId' })
  async getTagsByUserId(@Param('userId') userId: string): Promise<Tag[]> {
    return await this.tagService.getTagByUserId(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Create tag' })
  @ApiResponse({ status: 201, type: Tag })
  async createTag(@Body() body: CreateTagDto): Promise<Tag> {
    return await this.tagService.createTag(body);
  }

  @Patch(':tagId')
  @ApiResponse({ status: 200, type: Tag })
  @ApiOperation({ summary: 'Update tag by tagId' })
  async updateTag(
    @Param('tagId') tagId: string,
    @Body() updateScriptDto: UpdateTagDto,
  ): Promise<Tag> {
    return await this.tagService.updateTag(tagId, updateScriptDto);
  }

  @Delete(':tagId')
  @ApiResponse({ status: 204 })
  @ApiOperation({ summary: 'Delete tag by tagId' })
  async deleteTagById(@Param('tagId') tagId: string): Promise<void> {
    await this.tagService.deleteTag(tagId);
  }
}
