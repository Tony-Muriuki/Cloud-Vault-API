import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  //Method1
  getHello(): string {
    return 'Hello Nest Js';
  }
}
