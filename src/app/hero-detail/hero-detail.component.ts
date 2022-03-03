import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Team } from '../Team';
import { HttpErrorResponse } from '@angular/common/http';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

 hero?:Hero;

  constructor(private heroService:HeroService, private teamService: TeamService, private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  public onAddToTeam(addToTeamForm: NgForm):void{

    document.getElementById('#new-hero-team')?.click();
    this.teamService.addHeroToTeam(addToTeamForm.value)
    .subscribe( (response: Team) => {
      console.log(response);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    
    );
}
  
  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe( x => this.hero = x);
  }

  save():void{
    if(this.hero){
      this.heroService.updateHero(this.hero)
      .subscribe( () => this.goBack());
    }
  }
  goBack():void{
    this.location.back();
  }

}
