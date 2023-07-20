import { CreateProjectDto } from '../dto/create-project.dto';
import { Project } from '../entities/project.entitie';

export abstract class ProjectsRepository {
  abstract create(data: CreateProjectDto): Promise<Project>;
  abstract findOne(id: string): Promise<Project | undefined>;
  abstract findAll(group: string | undefined): Promise<Project[] | object>;
}
