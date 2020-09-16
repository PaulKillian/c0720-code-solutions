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

    return (
      <div className="container flex">
        <div className="watch flex" onClick={this.handleClick}>
          <div className="number-dimensions">0</div>
        </div>
        <div className="icon-dimensions flex-bottom">
          <i className="far fa-play-circle flex-bottom " onClick={this.handleClick}></i>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <HotButton />,
  document.getElementById('root')
);
