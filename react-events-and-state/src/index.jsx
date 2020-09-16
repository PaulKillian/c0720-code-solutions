import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.setState = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState = { isClicked: true };
  }

  render() {
    if (this.setState.isClicked === false) {
      return <button onClick={this.handleClick}>Hello</button>;
    } else {
      return <button onClick={this.handleClick}>Tim!</button>;
    }
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
