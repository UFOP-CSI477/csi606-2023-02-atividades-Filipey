import { IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  body: string;

  @IsNumber()
  post_id: number;

  @IsNumber()
  user_id: number;
}
