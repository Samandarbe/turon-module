import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCartDto {
  @IsNotEmpty()
  @IsString()
  card_number: string;
  @IsNotEmpty()
  @IsString()
  card_expire: string;
}
