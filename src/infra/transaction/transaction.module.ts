import { Module } from '@nestjs/common';
import { TransactionController } from './http/transaction.controller';
import { TransactionService } from 'src/domain/transaction/services/transaction.service';
import { UserModule } from '../user/user.module';
import { Transaction } from './entities/transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import TransactionRepository from './repository/transaction.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction]), UserModule],
  controllers: [TransactionController],
  providers: [TransactionService, TransactionRepository],
  exports: [],
})
export class TransactionModule {}
