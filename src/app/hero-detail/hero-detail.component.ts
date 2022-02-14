import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { IHero } from '../ihero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

 hero?:IHero;

  constructor(private heroService:HeroService, private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {

    this.getHero();
  }
  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe( x => this.hero = x);
  }
  goBack():void{
    this.location.back();
  }

}
