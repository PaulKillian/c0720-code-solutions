// the value stored in TodoApp is being imported from the todo-app directory in the components directory
import TodoApp from './components/todo-app';

// the querySelector method of the document object is being called with 1 argument, '#app" and the return value is
// beig assigned the constant variable named "container"
const container = document.querySelector('#app');

// the number 4 is being assigned to the constant variable named "nextId"
const nextId = 4;

// an array literal is being defined and is being assigned to the constant variable named "todos"
const todos = [
  // this array has 3 objects with 3 properties each
  {
    id: 1,
    task: 'Learn to code.',
    isCompleted: false
  },
  {
    id: 2,
    task: 'Build projects.',
    isCompleted: false
  },
  {
    id: 3,
    task: 'Get a job.',
    isCompleted: false
  }
];

// a new  TodoApp object is being called with 4 arguments, the value stored in the vriable named container, the value stored in the vriable named
// nextId, the value stored in the vriable named todos and an arrows function named newState, then the openng curly-
// brace for the arrow function code block
const app = new TodoApp(container, nextId, todos, newState => {
  /* eslint-disable no-console */
  // the log method of the console object is being called with one argument, the value stored in the variable newState
  console.log(newState);
  // the closing curlybrace for the arrow functon and the closing parantheses for the new TodoApp call
});

// the starte method of the app object is being called with no arguments
app.start();
