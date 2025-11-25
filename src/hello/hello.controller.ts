import { Controller } from '@nestjs/common';

//Express
//server.js -> routes-> controller -> services
//Route A -Controller A -> Service A
//Incoming Requests and Responses
//How controllers work is that they use DI(Dependency Injection) to consume services to handle requests and responses but delegate businesss logic to services.
@Controller('hello')
export class HelloController {}
