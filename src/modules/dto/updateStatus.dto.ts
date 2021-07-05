import { IsNumber, IsOptional } from 'class-validator';

export class UpdateStatusDto {
  @IsNumber()
  @IsOptional()
  id?: number;
  
  @IsNumber()
  @IsOptional()
  status?: number;
}