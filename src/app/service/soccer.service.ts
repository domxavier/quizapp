import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/model.question';

@Injectable({
  providedIn: 'root'
})
export class SoccerService {

  constructor(private http : HttpClient) { }

  loadQuestions() : Observable<Question[]> {
    return this.http.get<Question[]>("http://localhost:3001/soccer");
  }

}
