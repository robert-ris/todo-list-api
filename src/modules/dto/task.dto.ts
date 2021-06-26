import { IsNumber, IsOptional, IsString } from 'class-validator';

export class TaskDto {
  @IsNumber()
  @IsOptional()
  id?: number;
  
  @IsString()
  @IsOptional()
  taskName?: string;

  @IsString()
  @IsOptional()
  taskDescription?: string;
}