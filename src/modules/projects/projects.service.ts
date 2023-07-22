import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsRepository } from './repositories/project.repository';

@Injectable()
export class ProjectsService {
  constructor(private projectRepository: ProjectsRepository) {}

  async create(data: CreateProjectDto, userId: string) {
    const project = await this.projectRepository.create(data, userId);
    return project;
  }

  async findAll(group: string | undefined) {
    return this.projectRepository.findAll(group);
  }

  async findOne(id: string) {
    const findProject = await this.projectRepository.findOne(id);
    if (!findProject) {
      throw new NotFoundException('Project not found');
    }
    return findProject;
  }
}
