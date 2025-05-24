import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post('signup')
  async signupUser(@Body() userData: CreateUserDto): Promise<any> {
    const account = await this.prismaService.account.create({
      data: {
        email: userData.email,
        password: userData.password,
      },
    });

    console.log('🚀 ~ UsersController ~ signupUser ~ account:', account);

    return new Promise((resolve) => {
      resolve(console.log(account));
    });
  }
}
