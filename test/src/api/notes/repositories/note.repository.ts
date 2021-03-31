import { Injectable } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { Note } from '../entities/note.entity';

@EntityRepository(Note)
export class NoteRepository extends Repository<Note> {}
