import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];

  constructor() {
  }

  // Simulate POST /todos
  addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    console.log(this.todos);
    return this;
  }

  // Simulate GET /todos
  getAllTodos() {
    return this.todos;
  }

}
