import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private http: HttpClient
  ) { }

  getCards(){
    return this.http.get("https://demo.limantech.com/cards/public/api/cards")
  }
}
