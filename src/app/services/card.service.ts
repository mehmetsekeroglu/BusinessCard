import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

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
}
