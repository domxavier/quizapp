import { Component, OnInit } from '@angular/core';
import { Question } from '../model/model.question';
import { SoccerService } from '../service/soccer.service';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent implements OnInit {

  myAnswer;  
  quiz : boolean = true;
  results : boolean = false;
  next_button_flag : boolean = true;
  previous_button_flag : boolean = false;
  soccer_questions;

  constructor(private soccer_service : SoccerService) { }

  ngOnInit(): void {
    this.soccer_service.loadQuestions().subscribe(
      data => this.soccer_questions = data,
      e => console.log(e),
      () => console.log(this.soccer_questions.questions)
    )
  }

  i : number = 0;

  loadNextQuestion() {
    this.soccer_questions.questions[this.i].selected_answer = this.myAnswer;
    console.log(this.soccer_questions.questions);
    if(this.i < this.soccer_questions.questions.length) {
      this.i++;
    }
    if(this.i == this.soccer_questions.questions.length-1 ) {
      this.next_button_flag = false;
    }

    if(this.i == 0) {
      this.previous_button_flag = false;
    } 
    if (this.i > 0) {
      this.previous_button_flag = true;
    }

    this.myAnswer = this.soccer_questions.questions[this.i].selected_answer;

  }

  loadPreviousQuestion() {
    this.soccer_questions.questions[this.i].selected_answer = this.myAnswer;
    console.log(this.soccer_questions.questions);
    if(this.i > -1){
      this.i--;
    }

    if(this.i == this.soccer_questions.questions.length-1 ) {
      this.next_button_flag = false;
    }
    if(this.i <= this.soccer_questions.questions.length-1 ) {
      this.next_button_flag = true;
    }

    if(this.i == 0) {
      this.previous_button_flag = false;
    } 
    if (this.i > 0) {
      this.previous_button_flag = true;
    }

    this.myAnswer = this.soccer_questions.questions[this.i].selected_answer;
  }

  submitQuiz() {
    this.soccer_questions.questions[this.i].selected_answer = this.myAnswer;
    // console.log("Quiz submitted")
    this.quiz = false;
    this.results = true;
    console.log(this.soccer_questions.questions)
  }

}
