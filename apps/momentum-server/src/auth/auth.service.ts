import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../schemas/user.schema';
import { SignInDto } from './auth.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn({ username, password }: SignInDto) {
    const user = await this.validateUser(username, password);

    const payload = { sub: user._id, username: user.username };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(signUpDto: CreateUserDto) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(signUpDto.password, saltOrRounds);
    const user = await this.usersService.create({
      ...signUpDto,
      password: hashedPassword,
    });

    return user;
  }

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOne(username);

    if (!user) throw new NotAcceptableException('Could not find the user');

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      return user;
    }
  }
}
