import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  }

  render() {
    if (this.state.isClicked === true) {
      return (
        <div className="outer-switch-bg-color" >
          <div className="switch-bg-color"onClick={this.handleClick}></div>
        </div>
      );
    } else {
      return (
        <div className="outer-switch-bg-color-right flex-right" >
          <div className="switch-bg-color" onClick={this.handleClick}></div>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <HotButton />,
  document.getElementById('root')
);
