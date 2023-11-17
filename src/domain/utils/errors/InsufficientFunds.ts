import { HttpException, HttpStatus } from '@nestjs/common';

export class InsufficientFundsException extends HttpException {
  constructor() {
    super(
      `usuário não possui saldo suficiente para realizar a transferência!`,
      HttpStatus.PAYMENT_REQUIRED,
    );
  }
}
