import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, NgForm, Form } from '@angular/forms';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notesForm: FormGroup;
  notesArray = [];
  constructor() { }

  ngOnInit() {
    this.notesForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)])
    })
  }

  onSubmit() {
    console.log(this.notesForm.get('title').value)
    console.log(this.notesForm.get('description').value)
    this.notesArray.push(
      {
        id: this.uuid(),
        title: this.notesForm.get('title').value,
        description: this.notesForm.get('description').value,
        done: false,
      }
    )
  }

  markNoteAsDone(id) {
    console.log('done', id);
    const note = this.notesArray.filter(note => note.id === id);
    console.log(note[0]);
    note[0].done = true;
  }

  markNoteAsDelete(id) {
    console.log('delete', id)
    const tempNotesArr = this.notesArray.filter(note => note.id !== id);
    this.notesArray = tempNotesArr;
  }

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
