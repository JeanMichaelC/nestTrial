import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
  return 'Hello World from my backend 2!';
  }
}
