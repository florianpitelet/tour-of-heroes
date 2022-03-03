import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TeamsComponent } from './teams/teams.component';

const routes:Routes = [
  {path:'', redirectTo: '/heroes', pathMatch:'full'},
  {path: 'heroes', component: HeroesComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'hero/:id', component: HeroDetailComponent},
  {path:'team', component: TeamsComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
