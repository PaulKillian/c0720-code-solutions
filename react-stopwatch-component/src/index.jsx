import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      status: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.timer = this.timer.bind(this);
    this.clock = this.clock.bind(this);
  }

  handleClick() {
    const watch = setInterval(this.timer, 1000);
    if (this.state.status === true) {
      clearInterval(watch);
    }
    this.setState({ status: true });
  }

  timer() {
    this.setState({ seconds: this.state.seconds + 1 });
    this.clock();
  }

  clock() {
    if (this.state.status === false) {
      return (
        <div className="container flex">
          <div className="watch flex">
            <div className="number-dimensions">{this.state.seconds}</div>
          </div>
          <div className="icon-dimensions flex-bottom">
            <i className="far fa-play-circle flex-bottom " onClick={this.handleClick}></i>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container flex">
          <div className="watch flex">
            <div className="number-dimensions">{this.state.seconds}</div>
          </div>
          <div className="icon-dimensions flex-bottom">
            <i className="far fa-pause-circle flex-bottom " onClick={this.handleClick}></i>
          </div>
        </div>
      );
    }
  }

  render() {
    return this.clock();
  }
}

ReactDOM.render(
  <StopWatch />,
  document.getElementById('root')
);
