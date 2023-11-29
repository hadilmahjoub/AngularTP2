import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];

  constructor() {}

  getTodos(): Todo[] {
    this.todos = [
      new Todo('todo1', 'content1'),
      new Todo('todo2', 'content2'),
      new Todo('todo3', 'content3'),
    ];
    return this.todos;
  }

  logTodos() {
    console.log(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index < 0) {
      alert('Todo not found!');
    } else {
      this.todos.splice(index, 1);
    }
  }
}
