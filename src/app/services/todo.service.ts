import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoItems!:TodoItem[]

  constructor( @Inject('baseUrl') private baseUrl: String,
                                  private http: HttpClient) { }

  getTodoItems():Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.baseUrl+"todo")
  }


  getCopleteItem(): Observable<TodoItem> {
    return this.http.get<TodoItem[]>(this.baseUrl + 'todo?featured=true').pipe(map(todo => todo[0]))
     
  }
  addTodoItem(todo:TodoItem): Observable<any>{
    return this.http.post(this.baseUrl+"todo", todo)
  }

  updateTodoItem(todo:TodoItem, todoId:string): Observable<any>{
    return this.http.put(this.baseUrl+"todo/"+ todoId, todo)
  }

  deleteTodoItem(todoId:string):Observable<any>{
    return this.http.delete(this.baseUrl+ "todo/"+ todoId)
  }
}
