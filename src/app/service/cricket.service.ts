import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../model/model.question';

@Injectable({
  providedIn: 'root'
})
export class CricketService {

  constructor(private http : HttpClient) { }

  loadQuestions() : Observable<Question[]> {
    return this.http.get<Question[]>("http://localhost:3000/cricket");
  }

}
