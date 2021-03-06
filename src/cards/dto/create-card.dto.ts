import { IsNotEmpty } from 'class-validator';

export class CreateCardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
