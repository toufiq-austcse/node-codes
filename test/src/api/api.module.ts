import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from '../core/database/database.module';
import { AuthModule } from './auth/auth.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [ UsersModule,DatabaseModule, AuthModule, NotesModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
