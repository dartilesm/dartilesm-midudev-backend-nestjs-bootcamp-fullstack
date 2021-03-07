import { Injectable } from '@nestjs/common';
import { Notes } from './notes.interface';

@Injectable()
export class NotesService {
  notes: Notes[] = [
    {
      id: 1,
      content: 'Me tengo que suscribir a @midudev en YouTube',
      date: '2019-05-30T17:30:31.098Z',
      important: true,
    },
    {
      id: 2,
      content: 'Tengo que estudiar las clases del Fullstack Bootcamp',
      date: '2019-05-30T18:39:34.091Z',
      important: false,
    },
    {
      id: 3,
      content: 'Repasar los retos de JS de midudev',
      date: '2019-05-30T19:20:14.298Z',
      important: true,
    },
  ];

  getNotes(noteId?: number): Notes[] | Notes {
    const notes = noteId
      ? this.notes.find(({ id }) => id === noteId)
      : this.notes;
    return notes;
  }

  addNotes(note: Notes) {
    this.notes = [...this.notes, note];
  }

  deleteNotes(noteId?: number): void {
    this.notes = this.notes.filter(({ id }) => id !== noteId);
  }
}
