import { Injectable } from '@nestjs/common';
import { TestMessage } from './app.interface';

@Injectable()
export class AppService {

  getMessage(): TestMessage {
    return {test: "OK"};
  }
}
