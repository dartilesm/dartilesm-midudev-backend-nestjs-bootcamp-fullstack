import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateNoteDTO } from './dto/create-note.input';
import { Notes } from './notes.interface';
import { NotesService } from './notes.service';

@Controller('api/notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getNotes(): Notes[] {
    return this.notesService.getNotes() as Notes[];
  }

  @Get(':id')
  getNotesById(
    @Param('id') id: number,
    @Res({ passthrough: true }) res: Response,
  ): any {
    const notes = this.notesService.getNotes(id);
    !notes && res.status(HttpStatus.NOT_FOUND);
    return notes;
  }

  @Post()
  addNote(@Body() note: CreateNoteDTO): any {
    const currentNotes = this.notesService.getNotes() as Notes[];
    const ids = currentNotes.map((note) => note.id);
    const maxId = Math.max(...ids);

    const newNote: Notes = {
      id: maxId + 1,
      content: note.content,
      date: new Date().toISOString(),
      important: !!note.important,
    };
    this.notesService.addNotes(newNote);
    return newNote;
  }

  @Delete(':id')
  deleteNotesById(
    @Param('id') id: number,
    @Res({ passthrough: true }) res: Response,
  ): any {
    this.notesService.deleteNotes(id);
    res.status(HttpStatus.NO_CONTENT);
  }
}
