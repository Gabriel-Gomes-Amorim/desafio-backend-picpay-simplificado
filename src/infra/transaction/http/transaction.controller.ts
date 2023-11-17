import { Controller, Post, Body, HttpStatus, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { TransactionService } from 'src/domain/transaction/services/transaction.service';
import { CreateTransactionDto } from 'src/domain/transaction/dto/create-transaction.dto';

@Controller('transaction')
@ApiTags('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @IsPublic()
  @Post()
  async Createtransaction(
    @Body() createTransactionDto: CreateTransactionDto,
    @Res() res: Response,
    @Req() req: Request,
  ): Promise<Response> {
    try {
      const transaction = await this.transactionService.createTransaction(
        createTransactionDto,
      );
      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Trasferência realizada com sucesso!', transaction });
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'erro ao fazer transferência!', error: error });
    }
  }
}
