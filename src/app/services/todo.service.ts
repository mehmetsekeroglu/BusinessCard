import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor( @Inject('baseUrl') private baseUrl: String,
                                  private http: HttpClient) { }


}
