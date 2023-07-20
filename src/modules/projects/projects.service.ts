import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsRepository } from './repositories/project.repository';

@Injectable()
export class ProjectsService {
  constructor(private projectRepository: ProjectsRepository) {}

  async create(data: CreateProjectDto) {
    const project = await this.projectRepository.create(data);
    return project;
  }

  async findAll(group: string | undefined) {
    return this.projectRepository.findAll(group);
  }

  async findOne(id: string) {
    const findProject = await this.projectRepository.findOne(id);
    return findProject;
  }
}
