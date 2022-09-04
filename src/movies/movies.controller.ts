import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { getEnvironmentData } from 'worker_threads';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `return one movie with the id: ${id}`;
  }

  @Post()
  create() {
    return 'create a movie';
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return `delete movie with the id: ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') id: string) {
    return `patch movie with the id: ${id}`;
  }

}
