import { Controller, Get } from '@nestjs/common';
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
  @Get('first-route')
  getHello(): string {
    return this.helloService.getHello();
  }
}
