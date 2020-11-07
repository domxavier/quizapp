import { Component, OnInit } from '@angular/core';
import { option, Question } from '../model/model.question';
import { CricketService } from '../service/cricket.service';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {

  next_button_flag : boolean = true;
  previous_button_flag : boolean = false;
  cricket_questions;

  constructor(private cricket_service : CricketService) { }

  ngOnInit(): void {
    this.cricket_service.loadQuestions().subscribe (
      data => this.cricket_questions = data,
      e => console.log(e),
      () => console.log(this.cricket_questions.questions)
    )
  }
  
  i : number = 0;
  
  loadNextQuestion() {
    if(this.i < this.cricket_questions.questions.length) {
      this.i++;
    }
    if(this.i == this.cricket_questions.questions.length-1 ) {
      this.next_button_flag = false;
    }

    if(this.i == 0) {
      this.previous_button_flag = false;
    } 
    if (this.i > 0) {
      this.previous_button_flag = true;
    }
  }

  loadPreviousQuestion() {
    if(this.i > -1){
      this.i--;
    }

    if(this.i == this.cricket_questions.questions.length-1 ) {
      this.next_button_flag = false;
    }
    if(this.i <= this.cricket_questions.questions.length-1 ) {
      this.next_button_flag = true;
    }

    if(this.i == 0) {
      this.previous_button_flag = false;
    } 
    if (this.i > 0) {
      this.previous_button_flag = true;
    }
  }

  

}
