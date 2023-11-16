import { HttpException, HttpStatus } from '@nestjs/common';

export class CpfCnpjException extends HttpException {
  constructor() {
    super('O cpf/cnpj já foi cadastrado!', HttpStatus.BAD_REQUEST);
  }
}
