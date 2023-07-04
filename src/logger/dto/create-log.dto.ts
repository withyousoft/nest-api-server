import { IsString, IsNotEmpty } from 'class-validator';

export class CreateLogDto {
  @IsString()
  @IsNotEmpty()
  context: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsString()
  @IsNotEmpty()
  level: string;
}

export default CreateLogDto;
