import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('/api/todos')
      .then(res => res.json())
      .then(receivedTodos => this.setState({ todos: receivedTodos }))
      .catch(error => console.error(error));
  }

  addTodo(newTodo) {
    /**
     * Use fetch to send a POST request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * add the created todo to the state array.
     *
     * TIP: Be sure to SERIALIZE the todo in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    fetch('/api/todos', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    }).then(res => res.json())
      .then(addedTodos => this.setState(this.state.todos))
      .catch(error => console.error(error));
  }

  toggleCompleted(todoId) {
    /**
     * Find the index of the matching todo in the state array.
     * Find its "isCompleted" status.
     * Make a new Object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in state.
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    let status = null;
    let stateStatusTodo = null;
    let index = 0;
    let stateAllTodos = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].id === todoId) {
        index = i;
        status = this.state.todos[i].isCompleted;
        stateStatusTodo = this.state.todos[i];
        stateStatusTodo.isCompleted = !status;
        stateAllTodos = this.state.todos;
        stateAllTodos[index] = stateStatusTodo;
      }
    }

    fetch(`api/todos/${todoId}`, {
      method: 'patch',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todoId)
    }).then(replace => this.setState(stateAllTodos));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
