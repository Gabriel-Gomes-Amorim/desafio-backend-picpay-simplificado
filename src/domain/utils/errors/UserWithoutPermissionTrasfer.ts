import { HttpException, HttpStatus } from '@nestjs/common';

export class UserWithoutPermissionTrasferException extends HttpException {
  constructor() {
    super(
      `usuário não tem permissão de fazer trasferencia!`,
      HttpStatus.FORBIDDEN,
    );
  }
}
