import { Injectable } from '@nestjs/common'
import { DatabaseService } from 'src/database/database/database.service'
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from './dto/create-user.dto'
import { UserRoles } from './user-roles'

@Injectable()
export class UsersService {
  constructor(private databaseService: DatabaseService) {}

  createAdminUser(data: CreateUserDto) {
    return this.databaseService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: [UserRoles.ADMIN],
      },
    })
  }

  createCommonUser(data: CreateUserDto) {
    return this.databaseService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: [UserRoles.CUSTOMER],
      },
    })
  }

  createHandymanUser(data: CreateUserDto) {
    return this.databaseService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: [UserRoles.HANDYMAN],
      },
    })
  }

  generateHash(password: string) {
    return bcrypt.hashSync(password, 10)
  }

  findOne(idOrEmail: number | string) {
    return this.databaseService.user.findFirst({
      where: {
        ...(typeof idOrEmail === 'number' ? { id: idOrEmail } : { email: idOrEmail }),
      },
    })
  }
}
