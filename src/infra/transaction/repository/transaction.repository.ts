import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from '../entities/transaction.entity';

export default class TransactionRepository {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepostitory: Repository<Transaction>,
  ) {}

  public async create(transaction: Transaction): Promise<Transaction> {
    return this.transactionRepostitory.create(transaction);
  }

  public async save(transaction: Transaction): Promise<Transaction> {
    return this.transactionRepostitory.save(transaction);
  }

  public async findById(id: string): Promise<Transaction | null> {
    const findTransaction = this.transactionRepostitory.findOne({
      where: {
        id,
      },
    });
    return findTransaction;
  }
}
