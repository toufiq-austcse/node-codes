import { User } from '../entites/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  async findUserByEmail(email: string) {
    let user = await this.repository.findOne({ email });
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }
  constructor(private repository: UserRepository) {}
  createUser(dto: CreateUserDto): Promise<User> {
    return this.repository.save(dto);
  }
  getUserById(id: number): Promise<User> {
    return this.repository.findOne({ id: id });
  }

  updateUser(id: number, updatedDto: UpdateUserDto): Promise<any> {
    console.log(updatedDto);

    return this.repository.update({ id: id }, updatedDto);
  }
}
