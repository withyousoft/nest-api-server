import { IsString, IsNotEmpty } from 'class-validator';

export class EmailConfirmationDto {
  @IsString()
  @IsNotEmpty()
  token: string;
}

export default EmailConfirmationDto;
