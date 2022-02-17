import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { UserDto } from './dto/username.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(@Res() res: Response) {
    res.status(HttpStatus.ACCEPTED).json([]);
  }

  @Get('/test')
  getString(): UserDto {
    return this.appService.getString();
  }
}
