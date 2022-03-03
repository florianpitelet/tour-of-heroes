import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';
import { Team } from './Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiServerUrl = environment.apiUrl;

  constructor( private http: HttpClient, private messageService: MessageService) { }

  public getTeam(teamId: number): Observable<Team>{
    this.messageService.add("Equipe recupérée");
    return this.http.get<Team>(`${this.apiServerUrl}/team/all/${teamId}`);
  }

  public getTeams():Observable<Team[]>{
    this.messageService.add("Equipes récupérées");
    return this.http.get<Team[]>(`${this.apiServerUrl}/team/all`);
  }

  public addTeam(team: Team):Observable<Team>{
    this.messageService.add("Equipe ajoutée");
    return this.http.post<Team>(`${this.apiServerUrl}/team/add`, team);
  }

  public updateTeam(team: Team): Observable<Team>{
    this.messageService.add("Equipe mise à jour");
    return this.http.put<Team>(`${this.apiServerUrl}/team/update`, team);
  }

  public deleteTeam(teamId: number): Observable<void>{
    this.messageService.add("Equipe supprimé");
    return this.http.delete<void>(`${this.apiServerUrl}/team/delete/${teamId}`);
  }
  public addHeroToTeam(teamId: number){
    this.messageService.add("heros ajouté a la team");
    return this.getTeam(teamId);
  }
}
