import { Transaction } from 'src/infra/transaction/entities/transaction.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  fullName: string;

  @Column()
  cpfCnpj: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  type: string;

  @Column()
  balance: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.payer)
  transactionsPayer?: Transaction[];

  @OneToMany(() => Transaction, (transaction) => transaction.payee)
  transactionsPayee?: Transaction[];
}
