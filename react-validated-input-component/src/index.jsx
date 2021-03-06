import React from 'react';
import ReactDOM from 'react-dom';

class Validator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      passLength: 0
    };
    this.passwordLength = this.passwordLength.bind(this);
  }

  passwordLength(event) {
    this.setState({ value: event.target.value });
    this.setState({ passLength: this.state.passLength + 1 });
  }

  render() {
    if (this.state.passLength === 0) {
      return (
        <>
          <form className="flex-form">
            <label>Password</label>
            <input type="password" name="user_password"
              value={this.state.value}
              onChange={this.passwordLength}></input>
          </form>
          <div className="flex-errors">
            <p>A password is required</p>
            <i className="fas fa-times xIcon2"></i>
          </div>
        </>
      );
    } if (this.state.passLength > 0 && this.state.passLength < 8) {
      return (
        <>
          <form className="flex-form">
            <label>Password</label>
            <input type="password" name="user_password"
              value={this.state.value}
              onChange={this.passwordLength}></input>
          </form>
          <div className="flex-errors">
            <p className="passShort">Your password is too short</p>
            <i className="fas fa-times xIcon"></i>
          </div>
        </>
      );
    } else if (this.state.passLength >= 8) {
      return (
        <>
          <form className="flex-form">
            <label>Password</label>
            <input type="password" name="user_password"></input>
          </form>
          <div className="flex-success">
            <i className="fas fa-check check-color"></i>
          </div>
        </>
      );
    }
  }
}

ReactDOM.render(
  <Validator />,
  document.getElementById('root')
);
