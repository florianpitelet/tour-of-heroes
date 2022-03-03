import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Team } from '../Team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
tabTeams: Team[] = [];

  constructor(private teamService: TeamService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams():void{
    this.teamService.getTeams().subscribe(
      (response: Team[]) => {
        this.tabTeams = response;
        console.log(this.tabTeams);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
