import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateVideoDto } from './dtos/create-video.dto';
import { UpdateVideoDto } from './dtos/update-video.dto';
import { VideoEntity } from './entities/video.entity';
import { VideosService } from './videos.service';

@ApiTags('VIDEOS')
@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get()
  async findAll(): Promise<VideoEntity[]> {
    return this.videosService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<VideoEntity> {
    return this.videosService.findById(id);
  }

  @Post()
  async create(@Body() createVideoDto: CreateVideoDto): Promise<VideoEntity> {
    return this.videosService.create(createVideoDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id') id: string,
    @Body() updateVideoDto: UpdateVideoDto,
  ): Promise<void> {
    return this.videosService.update(id, updateVideoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    return this.videosService.delete(id);
  }
}
