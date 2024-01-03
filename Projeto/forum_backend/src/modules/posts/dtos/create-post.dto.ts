import { IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsNumber()
  user_id: number;
}
