import { Test, TestingModule } from '@nestjs/testing';
import { HandymanUsersController } from './handyman-users.controller';

describe('HandymanUsersController', () => {
  let controller: HandymanUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HandymanUsersController],
    }).compile();

    controller = module.get<HandymanUsersController>(HandymanUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
