// the object with values stored in "createElement" and "noop" is being imported from the lib directory
import { createElement, noop } from '../lib';
// the value stored in TodoList is being imported from the todo-list directory
import TodoList from './todo-list';
// the value stored in TodoForm is being imported from the todo-form directory
import TodoForm from './todo-form';

// a class is being called with the name "TodoApp", with an opening curlybrace for the code block
class TodoApp {
  // the is a constructor with 4 arguements, 3 named, "container", "nextId", "todos" ana 1 is the value
  // stored in the vriable "noop" is being assign to the parameter "onUpdate", then there is the opening curlybrace for the code block
  constructor(container, nextId, todos, onUpdate = noop) {
    // the value stored in the variable constainer is being assign the property container of the this object
    this.container = container;
    // the value stored in the variable todos is being assign the property todos of the this object
    this.todos = todos;
    // the value stored in the variable nextId is being assign the property nextId of the this object
    this.nextId = nextId;
    // the value stored in the variable null is being assign the property todoForm of the this object
    this.todoForm = null;
    // the value stored in the variable null is being assign the property todoList of the this object
    this.todoList = null;
    // the value stored in the variable false is being assign the property  of isStarted the this object
    this.isStarted = false;
    // the value stored in the variable onUpdate is being assign the property onUpdate of the this object
    this.onUpdate = onUpdate;
    // the bind method of the addTodo property of the this object is being called with one argument, "this"
    // and the return value is being assigned to the addTodo property of the this object
    this.addTodo = this.addTodo.bind(this);
    // the bind method of the toggleCompleted property of the this object is being called with one argument, "this"
    // and the return value is being assigned to the toggleCompleted property of the this object
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  // the start function is being called, with no arguements and an opeing curlybrace for the codeblock
  start() {
    // there is a conditional statement that on the condition that the isStarted property of the this object is truthy
    // the start function is to be returned
    if (this.isStarted) return;
    // a new TodoForm is being called with one argument, the addTodo property of the this object, and the return value is being assigned
    // to the todoform property of the this object
    this.todoForm = new TodoForm(this.addTodo);
    // a new TodoList is being called with one argument, the toggleCompleted property of the this object, and the return value is being assigned
    // to the todoList property of the this object
    this.todoList = new TodoList(this.toggleCompleted);
    this.update();
    // true is being assign the property isStarted of the this object
    this.isStarted = true;
  }

  // the addTodo function is being calledwith one parameter, "task", and an opeing curlybrace for the codeblock
  addTodo(task) {
    // the nextId property of the this object is being assigned to the constant variable named "id"
    const id = this.nextId;
    // false id being assigned to the constant variable isCompleted
    const isCompleted = false;
    // an object with 3 properties is being assigned to the constant variable newTodo
    const newTodo = { id, task, isCompleted };
    // the concat method of the property todos of the this object is being called with 1 parameter, the
    // value stored in the variable "newTodo" and the return value is being assign the property todos of the this object
    this.todos = this.todos.concat(newTodo);
    // the nextId property of the this object is being incrimented by 1
    this.nextId++;
    // the update function of the this object is being called
    this.update();
  }

  toggleCompleted(todoId) {
    // the map method of the todo property of the this object is being called with one parameter, the anonymous arrow function,
    // and the return value is being assigned to the todos property of the this object, there is
    // the opening curlybrace for the code block
    this.todos = this.todos.map(todo => {
      // there is an if statement checking the condition whether the value stored in the variable "todo.id" is not striclty equal
      // to the value stored in the variable "todoId", if that evaluates to true, the value stored in "todo is returned"
      if (todo.id !== todoId) return todo;
      // the assign method of the object Object is being called with 3 arguments, and empty object, the value stored in the variable "todo"
      // and an object with the property of the value stoed in the variable "isCompleted" and true if the value of the variable stored in "isCompleted"
      // is not the value stored in the object
      return Object.assign({}, todo, { isCompleted: !todo.isCompleted });
    });
    // the update function of the this object is being called
    this.update();
  }

  // // the update function is being called, with no arguements and an opening curlybrace for the codeblock
  update() {
    // an empty string is being assign the property of the property "innerHTML of the container property of the
    // of the this object
    this.container.innerHTML = '';
    // the append method of the container property of the this object is being called with 3 arguments
    this.container.append(
      // the createElement method is being called with 3 argument, 'h1', and object with a property and value, and 'JS Todo'
      createElement('h1', { class: 'mb-4' }, 'JS Todo'),
      // the render method othe todoForm property of the this object is being called wth no arguments
      this.todoForm.render(),
      // the render method of the todoList property of the this object is being called with 1 argument, the todo property of the this object
      this.todoList.render(this.todos)
    );
    // the this object is being assigned to the constant object with to properties, the values stored in "nextId" and "todos"
    const { nextId, todos } = this;
    // the onUpdate method os the this object is being called with one argument, the object with 2 properties, the values stored in
    // "nextId" and "todos"
    this.onUpdate({ nextId, todos });
  }
}

// the value stored in "TodoApp" is being exported as a default
export default TodoApp;
