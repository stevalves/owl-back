import { randomUUID } from 'node:crypto';

export class Project {
  readonly id: string;
  name: string;
  description: string;
  main_tech: string;
  technologies: Array<string>;
  cover_image: string | null;
  cover_gif: string | null;
  user_id?: string;

  constructor() {
    this.id = randomUUID();
  }
}
