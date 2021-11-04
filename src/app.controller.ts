import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TestMessage } from './app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getTestMessage(): TestMessage {
    return this.appService.getMessage();
  }

  @Get('alive')
  heartbeat() {
    return 'alive';
  }
}
