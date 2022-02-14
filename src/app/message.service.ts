import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //creation d'un tableau vide de messages (string)
  messages: string[] = [];
  
  //function d'ajout d'un message au tableau
  add(m:string){
    this.messages.push(m);
  }
  //function de vidage du tableau
  clear(){
    this.messages = [];
  }

  constructor() { }
}
