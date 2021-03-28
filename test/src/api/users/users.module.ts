import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users.controller';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';

@Module({
        imports:[TypeOrmModule.forFeature([
                UserRepository,
        ])],
        controllers:[UsersController],
        providers:[UserService]
})
export class UsersModule {}
