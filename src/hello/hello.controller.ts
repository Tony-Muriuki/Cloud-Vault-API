import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

//Express
//server.js -> routes-> controller -> services
//Route A -Controller A -> Service A
//Incoming Requests and Responses
//How controllers work is that they use DI(Dependency Injection) to consume services to handle requests and responses but delegate businesss logic to services.
@Controller('hello')
export class HelloController {
  //Dependency Injection Implementation: Injecting Hello Service To Our Controller
  constructor(private readonly helloService: HelloService) {}
  @Get()
  getHello(): string {
    return this.helloService.getHello();
  }

  @Get('user/:name')
  getHelloWithName(@Param('name') name: string): string {
    return this.helloService.getHelloWithName(name);
  }

  //3 hello/query?name=John
  @Get('query')
  getHelloWithQuery(@Query('name') name: string): string {
    return this.helloService.getHelloWithName(name ?? 'World');
  }
}
