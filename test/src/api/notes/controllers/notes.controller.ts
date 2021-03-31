import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  Get,
  Param,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CreateNoteDto } from '../dtos/create-note.dto';
import { NoteService } from '../services/note.service';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';

@Controller('notes')
  @UseGuards(JwtAuthGuard)
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createNoteDto: CreateNoteDto, @Req() req: any) {
    return this.noteService.createNote(createNoteDto, req.user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getAll(@Req() req: any) {
    return this.noteService.findAllNotes(req.user);
  }

  @Get(':id')
  getOne(@Param('id') id: number, @Req() req: any) {
    return this.noteService.findNoteById(id, req.user);
  }
}
