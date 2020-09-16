// the object with values stored in "createElement" is being imported from the lib directory
import { createElement } from '../lib';
// a class is being defined with the name "TodoList", with an opening curlybrace for the code block
class TodoList {
  // theere is a constructor with 1 parameter, "onToggle", then there is the opening curlybrace for the code block
  constructor(onToggle) {
    // the value stored in the variable onToggle is being assign the property onToggle of the this object
    this.onToggle = onToggle;
    // the bind method of the handleChange property of the this object is being called with one argument, the value stored
    // in this and the rturn value is being assined the handleChange property of the this object
    this.handleChange = this.handleChange.bind(this);
  }

  // the handleChange function is being called with 1 argument, "event", then there is the opening curlybrace for the codeblock
  handleChange(event) {
    // the closest method of the target property of the event object is being called with 1 argument '[data-todo-id]'
    const todoItem = event.target.closest('[data-todo-id]');
    // there is a conditional statement evaluating whether or not the value stored in "todoItem" is falsey and if it is false the handleChange
    // function is to be returned
    if (!todoItem) return;
    // the parseInt method is being called with 2 arguments, the getAttribute method of the todoItem object is being called with 1 argument
    // 'data-todo-id' and the second argument of the parseInt method definition is the number 10
    const todoId = parseInt(todoItem.getAttribute('data-todo-id'), 10);
    // the onToggle method of the this object is being called with 1 argument, the value stroed in the variable todoId
    this.onToggle(todoId);
  }

  // the renderCheckbox function is being called with 1 argument, "todo", then there is the opening curlybrace for the codeblock
  renderCheckbox(todo) {
    // the createElement method is being called with 2 arguments, "input" and an object, the return value is being assigned to the constant variable named
    // checkbox
    const checkbox = createElement('input', {
      // the object has 3 prperties
      type: 'checkbox',
      id: `task${todo.id}`,
      class: 'form-check-input'
    // the closing curlybrace for the object and the cloring parantheses for the createElement function definition
    });
    // the isCompleted property of the todo object is being assigned to the checked property of the checked object
    checkbox.checked = todo.isCompleted;
    // the value stored in the variable named checkbox is being returned
    return checkbox;
  }

  // the renderTodoItem function is being called with 1 argument, "todo", then there is the opening curlybrace for the codeblock
  renderTodoItem(todo) {
    // the isCompleted property of the todo object is being assigned to the constant variable names lableStryle
    const labelStyle = todo.isCompleted
      ? 'cursor: pointer; text-decoration: line-through; opacity: 0.5; font-style: italic;'
      : 'cursor: pointer; text-decoration: inherit;';
    // there is a constant variable named todoItem and it is being called
    const todoItem = (
      // the cleateElement function is being called with 3 arguments, "li", an object with 2 properties, and an array, there is opening bracket for an array
      createElement('li', { class: 'list-group-item', 'data-todo-id': todo.id }, [
        // the cleateElement function is being called with 3 arguments, "div, "an object with 1 property, and a sub-array, there is opening bracket for a sub-array
        createElement('div', { class: 'form-check d-flex' }, [
          // the renderCheckbox of the this object is being called with 1 argument, the value stored in the variable todo
          this.renderCheckbox(todo),
          // the cleateElement function is being called with 3 arguments, 'lable', and object with 3 properties and the task property of the todo obect
          createElement('label', { style: labelStyle, class: 'form-check-label flex-grow-1', for: `task${todo.id}` }, todo.task)
        // the closing bracket for the sub-array and the closing parantheses for the cleateElement function definition
        ])
        // the closing bracket for the array and the closing parantheses for the cleateElement function definition
      ])
    // the closing parantheses for the todoItem definition
    );
    // the value stored in the variable todoItem is being returned
    return todoItem;
  }

  // the render function is being called with 1 argument, "todos", then there is the opening curlybrace for the codeblock
  render(todos) {
    // there is a constant variable named todoist having variables assigned
    const todoList = (
      // the cleateElement function is being called with 3 arguments, "ul", an object with 1 property, and the map method of the todosobject arrow function
      // that has 1 paremeter "todo"
      createElement('ul', { class: 'list-group shadow-sm mb-4' }, todos.map(todo => {
        // the renderTodoItem method of the thi object is being called with one argument, te value stored in the variable todo and the return value
        // is being returned
        return this.renderTodoItem(todo);
      // the closing curlybrace for the createElement function definition, the closing paranethses for the cleateElement definition and the arrow function definition
      }))
    // closing parantheses for the todoList assignment
    );
    // the addEventListener method of the todoList object is being called with 2 arguments, "change" an the handleChange property of the this object
    todoList.addEventListener('change', this.handleChange);
    // the value stored in the variable todoList is being returned
    return todoList;
  }
}
// the value stored in "TodoList" is being exported as a default
export default TodoList;
