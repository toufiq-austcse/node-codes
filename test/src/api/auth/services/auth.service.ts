import { Injectable } from '@nestjs/common';
import { SignUpDto } from '../dtos/signup.dto';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../../users/services/user.service';
import { CreateUserDto } from '../../users/dtos/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/api/users/entites/user.entity';
import { LoginDto } from '../dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async authenticate(authToken: string) {
    let token = authToken.split(' ')[1];
    let data = this.jwtService.decode(token);
    let id = data['id'];
    let user = await this.userService.getUserById(id);
    delete user.password;
    return user;
  }
  async register(dto: SignUpDto) {
    let { name, email, password } = dto;
    let user: CreateUserDto = {
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    };

    let createdUser = await this.userService.createUser(user);
    let expiresIn = '6d';
    let accessToken = await this.getJwtToken(createdUser, expiresIn);
    return {
      accessToken,
      expiresIn,
    };
  }

  async login(loginDto: LoginDto) {
    let { email, password } = loginDto;
    let user = await this.userService.findUserByEmail(email);

    let expiresIn = '6d';
    let accessToken = await this.getJwtToken(user, expiresIn);
    return {
      accessToken,
      expiresIn,
    };
  }
  async getJwtToken(createdUser: User, expiresIn: string) {
    return this.jwtService.signAsync(
      {
        id: createdUser.id,
      },
      {
        expiresIn,
      },
    );
  }
}
