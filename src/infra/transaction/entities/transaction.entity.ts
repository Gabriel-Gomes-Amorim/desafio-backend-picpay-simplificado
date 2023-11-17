import { User } from 'src/infra/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('transaction')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  value: number;

  @ManyToOne(() => User)
  @JoinColumn()
  payer: User;

  @ManyToOne(() => User)
  @JoinColumn()
  payee: User;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;
}
