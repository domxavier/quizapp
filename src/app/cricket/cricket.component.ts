import { Component, OnInit } from '@angular/core';
import { Question } from '../model/model.question';
import { CricketService } from '../service/cricket.service';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {

  flag : boolean = true;
  cricket_questions : Question[] = [];

  constructor(private cricket_service : CricketService) { }

  ngOnInit(): void {
    this.cricket_service.loadQuestions().subscribe (
      data => this.cricket_questions = data,
      e => console.log(e),
      () => console.log(this.cricket_questions)
    )
  }

  loadCricketQuestions() {
    this.cricket_service.loadQuestions().subscribe (
      data => this.cricket_questions = data,
      e => console.log(e),
      () => console.log(this.cricket_questions)
    )
  }

}
