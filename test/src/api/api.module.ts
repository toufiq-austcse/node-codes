import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from '../core/database/database.module';

@Module({
  imports: [ UsersModule,DatabaseModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
