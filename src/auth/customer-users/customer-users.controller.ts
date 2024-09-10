import { Body, Controller, Post } from '@nestjs/common'
import { UsersService } from 'src/auth/users/users.service'
import { CreateUserDto } from 'src/auth/users/dto/create-user.dto'
import { UserPresenter } from 'src/auth/users/user.presenter'

@Controller('users')
export class CustomerUsersController {
  constructor(private usersService: UsersService) {}

  @Post('customer')
  async create(@Body() data: CreateUserDto) {
    const user = await this.usersService.createCommonUser(data)
    return new UserPresenter(user)
  }
}
