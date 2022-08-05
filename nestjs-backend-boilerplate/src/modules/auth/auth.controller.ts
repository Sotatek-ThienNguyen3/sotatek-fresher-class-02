import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/models/entities/user.entity';
import { AuthService } from 'src/modules/auth/auth.service';
import { LoginDto } from 'src/modules/auth/dto/login.dto';
import { RefreshAccessTokenDto } from 'src/modules/auth/dto/refresh-access-token.dto';
import { ResponseLogin } from 'src/modules/auth/dto/response-login.dto';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { MailService } from 'src/modules/mail/mail.service';
import { UserService } from 'src/modules/user/users.service';
import { UserID } from 'src/shares/decorators/get-user-id.decorator';
import { ResponseDto } from 'src/shares/dtos/response.dto';

@Controller('auth')
@ApiTags('Auth')
@ApiBearerAuth()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly mailService: MailService,
  ) { }

  @Get('/current')
  @UseGuards(JwtAuthGuard)
  async currentUser(@UserID() userId: number): Promise<ResponseDto<UserEntity>> {
    const user = await this.userService.findUserById(userId);
    return {
      data: user
    };
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<ResponseDto<ResponseLogin>> {
    return { data: await this.authService.login(loginDto) };
  }

  @Post('refresh-access-token')
  @ApiBody({
    type: RefreshAccessTokenDto,
  })
  async refreshAccessToken(
    @Body() refreshAccessTokenDto: RefreshAccessTokenDto,
  ): Promise<ResponseDto<Partial<ResponseLogin>>> {
    return {
      data: await this.authService.refreshAccessToken(refreshAccessTokenDto),
    };
  }

}
