import { Comment } from '@prisma/client';

export class CommentSchema implements Comment {
  id: number;
  created_at: Date;
  updated_at: Date;
  body: string;
  post_id: number;
  user_id: number;
}
