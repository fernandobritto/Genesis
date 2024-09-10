import { Module } from '@nestjs/common'
import { UsersService } from './users/users.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'
import { HandymanUsersController } from './handyman-users/handyman-users.controller'
import { CustomerUsersController } from './customer-users/customer-users.controller'
import { AdminUsersController } from './admin-users/admin-users.controller'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: '123456',
      signOptions: { expiresIn: '10000s' },
    }),
  ],
  controllers: [
    AuthController,
    HandymanUsersController,
    CustomerUsersController,
    AdminUsersController,
  ],
  providers: [UsersService, AuthService],
})
export class AuthModule {}
