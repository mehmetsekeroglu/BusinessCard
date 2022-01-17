import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../models/todo-item';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( @Inject('baseUrl') private baseUrl: String,
                                  private http: HttpClient) { }


  getTodoItems():Observable<TodoItem[]>{
    return this.http.get<TodoItem[]>(this.baseUrl+"todo")
  }

  addTodoItems(item:TodoItem):Observable<TodoItem>{
    return this.http.post<TodoItem>(this.baseUrl+"todo", item)
  }

  deleteTodoItems(id:number):Observable<TodoItem>{
    return this.http.delete<TodoItem>(this.baseUrl+"todo/"+id)
  }

}


