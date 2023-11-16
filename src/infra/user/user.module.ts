import { Module } from '@nestjs/common';
import { UserService } from '../../domain/user/services/user.service';
import { UserController } from './http/user.controller';
import UserRepository from './repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
