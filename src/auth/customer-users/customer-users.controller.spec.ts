import { Test, TestingModule } from '@nestjs/testing';
import { CustomerUsersController } from './customer-users.controller';

describe('CustomerUsersController', () => {
  let controller: CustomerUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerUsersController],
    }).compile();

    controller = module.get<CustomerUsersController>(CustomerUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
