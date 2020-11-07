import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { CricketComponent } from './cricket/cricket.component';
import { SoccerComponent } from './soccer/soccer.component';
import { CricketService } from './service/cricket.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainComponent,
    CricketComponent,
    SoccerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CricketService],
  bootstrap: [MainComponent]
})
export class AppModule { }
