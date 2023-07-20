import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { ProjectsRepository } from './repositories/project.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ProjectsPrimaRepository } from './repositories/prisma/projects-prisma.repository';

@Module({
  controllers: [ProjectsController],
  providers: [
    ProjectsService,
    PrismaService,
    {
      provide: ProjectsRepository,
      useClass: ProjectsPrimaRepository,
    },
  ],
})
export class ProjectsModule {}
