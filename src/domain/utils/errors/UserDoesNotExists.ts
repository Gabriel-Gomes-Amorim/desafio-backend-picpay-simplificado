import { HttpException, HttpStatus } from '@nestjs/common';

export class UserDoesNotExistsException extends HttpException {
  constructor() {
    super(`usuário não existe!`, HttpStatus.NOT_FOUND);
  }
}
