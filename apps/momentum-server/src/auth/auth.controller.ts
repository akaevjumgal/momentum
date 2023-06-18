import {
  Body,
  Controller,
  Post,
  UseGuards,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../schemas/user.schema';
import { AuthGuard } from '@nestjs/passport';
import { SignInDto } from './auth.model';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('local'))
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('registration')
  async createUser(@Body() signUpDto: CreateUserDto) {
    return this.authService.signUp(signUpDto);
  }
}
