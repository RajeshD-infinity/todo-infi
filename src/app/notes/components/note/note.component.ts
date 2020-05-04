import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input('note') note:any;
  @Output('done') done:EventEmitter<any>= new EventEmitter();
  @Output('delete') delete:EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  markAsDone() {
    this.done.emit(this.note.id);
  }

  deleteNote() {
    this.delete.emit(this.note.id);
  }

}
