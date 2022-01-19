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
  completedTask!: TodoItem;
  completedTasks!: TodoItem[];
  openTask!: TodoItem;
  openTasks!: TodoItem[];
  todoLength!: number;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getItems();
    this.getCompletedItems();
    this.getOpenItems();
    
  }

  getItems() {
    this.todoService.getTodoItems().subscribe((list) => list = this.todoList);
   
  }

  getOpenItems() {
    this.todoService.getTodoItems().subscribe((list) => {
      this.openTasks= list.filter(item=>item.status===true)
    });
  }

  getCompletedItems() {
    this.todoService.getTodoItems().subscribe((list) => {
      this.completedTasks= list.filter(item=>item.status===false)
    });
  }


  addItem(title: string) {
    this.todoService
      .getTodoItems()
      .subscribe((list) => (this.todoLength = list.length));
    this.todoItem = { title: title, status: true, id: this.todoLength };
    this.todoService
      .addTodoItems(this.todoItem)
      .subscribe((item) => this.openTasks.push(item));
  }

  deleteItem(id: number) {
    this.openTasks = this.openTasks.filter((todo) => todo.id !== id);
    this.completedTasks = this.completedTasks.filter((todo) => todo.id !== id);
    this.todoService.deleteTodoItems(id).subscribe();
  }

  changeStatus(item: TodoItem) {
    this.completedTask = { title: item.title, status: !item.status, id: item.id };
    this.todoService.updateTodoItems(this.completedTask).subscribe();
    this.getOpenItems()
    this.getCompletedItems()
  }
}
