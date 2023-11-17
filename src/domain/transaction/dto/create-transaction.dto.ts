import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({ description: 'Valor a ser trânsferido!' })
  @IsNotEmpty()
  @IsNumber()
  value: number;

  @ApiProperty({ description: 'Id do pagador' })
  @IsNotEmpty()
  @IsUUID()
  payerId: string;

  @ApiProperty({ description: 'Id do beneficiário' })
  @IsNotEmpty()
  @IsUUID()
  payeeId: string;
}
