import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      isError: false
    };
  }

  componentDidMount() {
    /* your code here */
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ users: data }))
      .then(loading => this.setState({ isLoading: false }))
      .then(loadError => this.setState({ isError: true }))
      .catch(error => console.error(error));
  }

  render() {
    if (this.state.isError) {
      return <p>No Users were found!</p>;
    } else {
      return this.state.isLoading
        ? <p>Loading...</p>
        : <UserList users={this.state.users}/>;
    }
  }
}

export default App;
