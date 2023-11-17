import { Injectable } from '@nestjs/common';
import UserRepository from 'src/infra/user/repository/user.repository';
import { UserDoesNotExistsException } from '../../utils/errors/UserDoesNotExists';
import { UserWithoutPermissionTrasferException } from '../../utils/errors/UserWithoutPermissionTrasfer';
import { InsufficientFundsException } from '../../utils/errors/InsufficientFunds';
import axios from 'axios';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import TransactionRepository from 'src/infra/transaction/repository/transaction.repository';

@Injectable()
export class TransactionService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly transactionRepository: TransactionRepository,
  ) {}

  async createTransaction(createTransactionDto: CreateTransactionDto) {
    const { payerId, payeeId, value } = createTransactionDto;

    const payer = await this.userRepository.findById(payerId);
    const payee = await this.userRepository.findById(payeeId);

    if (!payer || !payee) {
      throw new UserDoesNotExistsException();
    }

    if (payer.type !== 'common') {
      throw new UserWithoutPermissionTrasferException();
    }

    if (payer.balance <= value) {
      throw new InsufficientFundsException();
    }

    const verifyAuthorization = await this.consultTrasferAuthorization();

    if (verifyAuthorization !== 'Autorizado') {
      throw new UserWithoutPermissionTrasferException();
    }

    payer.balance -= value;
    payee.balance += value;

    await this.userRepository.save(payer);
    await this.userRepository.save(payee);

    const createTransaction = {
      value: createTransactionDto.value,
      payer: payer,
      payee: payee,
    };

    const newTransaction = await this.transactionRepository.create(
      createTransaction,
    );

    const createdTransaction = await this.transactionRepository.save(
      newTransaction,
    );

    await this.sendNotification();

    return {
      ...createdTransaction,
    };
  }

  async consultTrasferAuthorization() {
    try {
      const response = await axios.get(
        'https://run.mocky.io/v3/5794d450-d2e2-4412-8131-73d0293ac1cc',
      );

      return response.data.message;
    } catch (error) {
      console.error('Erro ao verificar o Mocky:', error);
      throw new Error('Erro ao verificar o Mocky');
    }
  }

  async sendNotification() {
    try {
      const response = await axios.get(
        'https://run.mocky.io/v3/54dc2cf1-3add-45b5-b5a9-6bf7e7f1f4a6',
      );

      console.log(response.data.message);
    } catch (error) {
      console.error('Erro ao verificar o Mocky:', error);
      throw new Error('Erro ao verificar o Mocky');
    }
  }
}
