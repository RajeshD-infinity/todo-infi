import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NotesService {

  constructor(private http: HttpClient) { }
}
