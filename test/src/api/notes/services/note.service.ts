import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from '../dtos/create-note.dto';
import { NoteRepository } from '../repositories/note.repository';
import { User } from '../../users/entites/user.entity';

@Injectable()
export class NoteService {
  constructor(private repository: NoteRepository) {}

  createNote(createNoteDto: CreateNoteDto, user: User) {
    let { text, title } = createNoteDto;
    return this.repository.save([
      {
        text,
        title,
        user_id: user.id,
      },
    ]);
  }
  findAllNotes(user: User) {
    return this.repository.find({ user_id: user.id });
  }
  async findNoteById(id: number, user: User) {
    let note = await this.repository.findOne({ id, user_id: user.id });
    if (!note) {
      throw new NotFoundException(`Note  not found`);
    }
    return note;
  }
}
