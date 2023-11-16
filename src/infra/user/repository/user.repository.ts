import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

export default class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepostitory: Repository<User>,
  ) {}

  public async create(user: User): Promise<User> {
    return this.userRepostitory.create(user);
  }

  public async save(user: User): Promise<User> {
    return this.userRepostitory.save(user);
  }

  public async findById(id: string): Promise<User | null> {
    const findUser = this.userRepostitory.findOne({
      where: {
        id,
      },
    });
    return findUser;
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.userRepostitory.findOne({
      where: {
        email,
      },
    });
  }

  public async findByCpfCnpj(cpfCnpj: string): Promise<User | null> {
    return this.userRepostitory.findOne({
      where: {
        cpfCnpj,
      },
    });
  }

  public async remove(id: number): Promise<void> {
    await this.userRepostitory.delete(id);
  }
}
