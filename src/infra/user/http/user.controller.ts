import { Controller, Post, Body, HttpStatus, Res, Req } from '@nestjs/common';
import { UserService } from '../../../domain/user/services/user.service';
import { CreateUserDto } from 'src/domain/user/dto/create-user.dto';
import { Request, Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post('create')
  async create(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
    @Req() req: Request,
  ): Promise<Response> {
    try {
      const user = await this.userService.create(createUserDto);

      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Usuario cadastrado com sucesso!', user });
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'erro ao criar usuario!', error: error });
    }
  }
}
