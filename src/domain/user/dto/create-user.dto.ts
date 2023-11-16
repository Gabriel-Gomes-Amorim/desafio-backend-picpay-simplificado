import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsPhoneNumber,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Nome do usuário' })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({ description: 'Cpf ou Cnpj' })
  @IsNotEmpty()
  @IsString()
  cpfCnpj: string;

  @ApiProperty({ description: 'Endereço de email do usuário' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Senha do usuário' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
