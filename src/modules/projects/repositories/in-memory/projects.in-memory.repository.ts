import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from '../../dto/create-project.dto';
import { Project } from '../../entities/project.entitie';
import { ProjectsRepository } from '../project.repository';

@Injectable()
export class ProjectsInMemoryRepository implements ProjectsRepository {
  private database: Project[] = [];

  async create(data: CreateProjectDto, userId: string): Promise<Project> {
    const newProject = new Project();
    Object.assign(newProject, { ...data, userId: userId });
    this.database.push(newProject);

    return newProject;
  }

  async findOne(id: string): Promise<Project> {
    const project = this.database.find((value) => value.id === id);
    return project;
  }

  private groupby(projects: Project[], key: string) {
    return projects.reduce((acc, cur) => {
      (acc[cur[key]] = acc[cur[key]] || []).push(cur);
      return acc;
    }, {});
  }

  async findAll(group: string): Promise<object | Project[]> {
    if (group) {
      return this.groupby(this.database, group);
    }
    return this.database;
  }
}
