import { Component, OnInit } from '@angular/core';
import { Question } from '../model/model.question';
import { SoccerService } from '../service/soccer.service';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent implements OnInit {

  flag : boolean = true;
  soccer_questions : Question[] = [];

  constructor(private soccer_service : SoccerService) { }

  ngOnInit(): void {
    this.soccer_service.loadQuestions().subscribe(
      data => this.soccer_questions = data,
      e => console.log(e),
      () => console.log(this.soccer_questions)
    )
  }

  loadSoccerQuestions() {
    this.soccer_service.loadQuestions().subscribe(
      data => this.soccer_questions = data,
      e => console.log(e),
      () => console.log(this.soccer_questions)
    )
  }

}
