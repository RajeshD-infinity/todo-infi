import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NotesRoutingModule } from './notes.routing.module';
import { NotesService } from './services/notes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteComponent } from './components/note/note.component';



@NgModule({
  declarations: [NotesListComponent, NoteComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    NotesService
  ]
})
export class NotesModule { }
