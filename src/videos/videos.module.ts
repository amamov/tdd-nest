import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideosController } from './videos.controller';
import { VideoEntity } from './entities/video.entity';
import { VideosRepository } from './videos.repository';
import { VideosService } from './videos.service';

@Module({
  imports: [TypeOrmModule.forFeature([VideoEntity])],
  controllers: [VideosController],
  providers: [VideosService, VideosRepository],
})
export class VideosModule {}
