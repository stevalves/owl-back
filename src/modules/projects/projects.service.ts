import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  create(data: CreateProjectDto) {
    return data;
  }
}
