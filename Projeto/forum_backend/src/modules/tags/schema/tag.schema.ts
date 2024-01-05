import { Tag } from '@prisma/client';

export class TagSchema implements Tag {
  id: number;
  name: string;
}
