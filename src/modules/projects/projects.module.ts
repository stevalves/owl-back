import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { ProjectsRepository } from './repositories/project.repository';
import { ProjectsInMemoryRepository } from './repositories/in-memory/projects.in-memory.repository';

@Module({
  controllers: [ProjectsController],
  providers: [
    ProjectsService,
    {
      provide: ProjectsRepository,
      useClass: ProjectsInMemoryRepository,
    },
  ],
})
export class ProjectsModule {}
