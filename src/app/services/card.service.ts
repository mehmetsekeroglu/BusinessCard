import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  

  constructor(
    @Inject('apiUrl') private apiUrl: String,
    private http: HttpClient
  ) { }

  getCards(){
    return this.http.get(this.apiUrl+"/cards")
  }

  addCard(card:Card){
    return this.http.post(this.apiUrl+"/cards", card)
  }
}
