import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from '@songify-workspace/api-interfaces';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create(@Body() song: Song) {
    return this.songsService.create(song);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() song: Song) {
    return this.songsService.update(id, song);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songsService.remove(id);
  }
}
