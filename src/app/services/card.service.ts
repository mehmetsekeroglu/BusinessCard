import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

card!: Card[]
filteredCard!: Card[]  

  constructor(
    @Inject('baseUrl') private baseUrl: String,
    private http: HttpClient
  ) { }

  getCards():void {
    this.http.get<Card[]>(this.baseUrl+"cards")
    .subscribe((res:Card[])=>{
      this.card = this.filteredCard = res;
    })
  }

  addCard(card:Card): Observable<any>{
    return this.http.post(this.baseUrl+"cards", card)
  }

  updateCard(card:Card, cardId:number): Observable<any>{
    return this.http.put(this.baseUrl+"cards/"+ cardId, card)
  }

  deleteCard(cardId:number):Observable<any>{
    return this.http.delete(this.baseUrl+ "cards/"+ cardId)
  }


}


