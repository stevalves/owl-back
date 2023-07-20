import { Injectable } from '@nestjs/common';
import { ProjectsRepository } from '../project.repository';
import { CreateProjectDto } from '../../dto/create-project.dto';
import { Project } from '../../entities/project.entitie';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProjectsPrimaRepository implements ProjectsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProjectDto): Promise<Project> {
    const project = new Project();
    Object.assign(project, { ...data });

    const newProject = await this.prisma.project.create({
      data: {
        id: project.id,
        name: project.name,
        description: project.description,
        main_tech: project.main_tech,
        cover_gif: project.cover_gif,
        cover_image: project.cover_image,
        technologies: project.technologies,
        userId: project.user_id,
      },
    });

    return newProject;
  }

  async findOne(id: string): Promise<Project> {
    const project = await this.prisma.project.findUnique({ where: { id } });
    return project;
  }

  private groupby(projects: Project[], key: string) {
    return projects.reduce((acc, cur) => {
      (acc[cur[key]] = acc[cur[key]] || []).push(cur);
      return acc;
    }, {});
  }

  async findAll(group: string): Promise<object | Project[]> {
    const projects = await this.prisma.project.findMany();

    if (group) {
      return this.groupby(projects, group);
    }

    return projects;
  }
}
