import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: this.state.isClicked + 1 });
  }

  render() {
    if (this.state.isClicked < 3) {
      return <button onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.isClicked === 3 || this.state.isClicked < 6) {
      return <button style={{ backgroundColor: 'indigo' }} color="white" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.isClicked === 6 || this.state.isClicked < 9) {
      return <button style={{ backgroundColor: '#8B008B' }} color="white" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.isClicked === 9 || this.state.isClicked < 12) {
      return <button style={{ backgroundColor: '#F08080' }} color="white" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.isClicked === 12 || this.state.isClicked < 15) {
      return <button style={{ backgroundColor: '#FFA07A' }} onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.isClicked === 15 || this.state.isClicked < 18) {
      return <button style={{ backgroundColor: '#BDB76B' }} onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.isClicked === 18) {
      return <button style={{ backgroundColor: 'white' }} onClick={this.handleClick}>Hot Button</button>;
    }
  }
}

ReactDOM.render(
  <HotButton />,
  document.getElementById('root')
);
