import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/models/todo-item';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoList!: TodoItem[];
  todoItem!: TodoItem;
  todoLength!: number;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.todoService.getTodoItems().subscribe((list) => (this.todoList = list));
  }

  addItem(title: string) {
    this.todoService
      .getTodoItems()
      .subscribe((list) => (this.todoLength = list.length));
    this.todoItem = { title: title, status: true, id: this.todoLength };
    this.todoService
      .addTodoItems(this.todoItem)
      .subscribe((item) => this.todoList.push(item));
  }

  deleteItem(id: number) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
    this.todoService.deleteTodoItems(id).subscribe();
  }
}
