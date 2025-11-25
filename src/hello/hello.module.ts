import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
  imports: [], //Imports other modules if needed
  exports: [], //Exports Services if needed in other modules
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
