import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/username.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getString(): UserDto {
    return {
      name: 'Bitch',
      email: 'Fuck',
    };
  }
}
