import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NoteController } from './controllers/notes.controller';
import { NoteRepository } from './repositories/note.repository';

import { NoteService } from './services/note.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([NoteRepository])],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NotesModule {}
