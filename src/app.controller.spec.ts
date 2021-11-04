import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;
  const testMessage = { test: 'OK' };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = new AppService();
  });

  describe('service', () => {
    it('should return  test message', () => {
      expect(appService.getMessage()).toEqual(testMessage);
    });
  });

  describe('controller', () => {
    it('should return test message', async () => {
      jest
        .spyOn(appService, 'getMessage')
        .mockImplementation(() => testMessage);

      expect(await appController.getTestMessage()).toEqual(testMessage);
    });

    it('alive message', async () => {
      expect(await appController.heartbeat()).toBeTruthy();
    });
  });
});
