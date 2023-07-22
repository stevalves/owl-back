import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  ArrayMinSize,
} from 'class-validator';

export class CreateProjectDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  main_tech: string;

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  technologies: string[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  cover_image: string | null;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  cover_gif: string | null;
}
