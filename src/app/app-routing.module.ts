import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CricketComponent } from './cricket/cricket.component';
import { SoccerComponent } from './soccer/soccer.component';

const routes: Routes = [
  { path : '', redirectTo : 'cricket', pathMatch : 'full'},
  { path : 'cricket', component : CricketComponent},
  { path : 'soccer', component : SoccerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
