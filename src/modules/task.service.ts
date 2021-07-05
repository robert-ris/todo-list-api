import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from "moment";
import { FindOneOptions, Repository } from "typeorm";
import { Task } from '../entities/task.entity';
import { TaskDto } from "./dto/task.dto";
import { UpdateStatusDto } from "./dto/updateStatus.dto";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) readonly repository: Repository<Task>,
  ) {}
  
  async findAll() {
    return this.repository.find();
  }

  async find(options: FindOneOptions) {
    return this.repository.findOne(options);
  }

  async create(dto: TaskDto) {
    return this.repository.save({
      ...dto,
      status: 0,
      createdAt: moment.utc().format('YYYY-MM-DD HH:mm:ss')
    });
  }

  async update(id: number, dto: TaskDto) {
    return this.repository.update(id, dto);
  }

  async updateStatus(id: number, dto: UpdateStatusDto) {
    return this.repository.update(id, dto);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}