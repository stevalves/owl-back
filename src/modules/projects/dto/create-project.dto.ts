import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  ArrayMinSize,
} from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  main_tech: string;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  technologies: string[];

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  cover_image: string | null;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  cover_gif: string | null;

  @IsString()
  @IsNotEmpty()
  user_id?: string;
}
