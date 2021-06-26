import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';
import { TasksController } from './task.controller';
import { TasksService } from './task.service';


@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
      Task
    ]),
  ],
  controllers: [TasksController],
  providers: [
    TasksService
  ],
})
export class TasksModule { }
