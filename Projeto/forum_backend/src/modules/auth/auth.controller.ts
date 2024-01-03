import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SkipAuth } from 'src/decorators/routes-security.decorator';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @SkipAuth()
  signIn(@Body() signInDto: Record<string, string>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
