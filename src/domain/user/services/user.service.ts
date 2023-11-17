import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import UserRepository from 'src/infra/user/repository/user.repository';
import { EmailException } from '../../utils/errors/EmailExists';
import { CpfCnpjException } from '../../utils/errors/CpfCnpjExits';
import { User } from 'src/infra/user/entities/user.entity';
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, cpfCnpj } = createUserDto;

    const isEmailAlreadyExists = await this.userRepository.findByEmail(email);

    if (isEmailAlreadyExists) {
      throw new EmailException();
    }

    const isCpfCnpjAlreadyExists = await this.userRepository.findByCpfCnpj(
      cpfCnpj,
    );

    if (isCpfCnpjAlreadyExists) {
      throw new CpfCnpjException();
    }

    const createUser = {
      fullName: createUserDto.fullName,
      cpfCnpj: createUserDto.cpfCnpj,
      email: createUserDto.email,
      password: await bcrypt.hash(createUserDto.password, 10),
      type: createUserDto.type,
      balance: createUserDto.balance,
    };

    const newUser = await this.userRepository.create(createUser);

    const createdUser = await this.userRepository.save(newUser);

    return {
      ...createdUser,
      password: undefined,
    };
  }

  //Método para buscar dados do usuario para login
  findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }
}
