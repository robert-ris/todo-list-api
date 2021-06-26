import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TasksService } from './task.service';

@Controller('tasks')
export class TasksController {
  constructor (
    private service: TasksService,
  ) {}

  @Get('')
  async get() {
    return this.service.findAll();
  }

  @Get(':id')
  async getTask(@Param('id', ParseIntPipe) id: number) {
    return this.service.find({
      where: { id }
    });
  }

  @Post()
  async create(@Body() dto: TaskDto): Promise<any> {
    try {
      return await this.service.create(dto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) dto: TaskDto
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  async delete(
    @Param('id', ParseIntPipe) id:number
  ) {
    return this.service.delete(id);
  }
}