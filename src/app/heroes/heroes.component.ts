import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  

  tabHeroes: Hero[] = [];
 
  constructor(private heroService:HeroService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(
      (response: Hero[]) => {
          this.tabHeroes = response;
          console.log(this.tabHeroes);
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
  );
  }

  public onAddHero(addForm: NgForm):void{
    
    document.getElementById('new-hero-add')?.click();
    this.heroService.addHero(addForm.value)
      .subscribe((response: Hero) => {
        console.log(response);
        this.getHeroes();
    },
    (error: HttpErrorResponse) => {
        alert(error.message);
    }
);
  }

  public onDeleteHero(heroId: number): void {

    this.heroService.deleteHero(heroId).subscribe(
        (response: void) => {
            console.log(response);
            this.getHeroes();
        },
        (error: HttpErrorResponse) => {
            alert(error.message);
        }
    );
}

}
