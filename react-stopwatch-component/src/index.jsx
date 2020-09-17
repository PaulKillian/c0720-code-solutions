import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      status: false
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.initialStart = this.initialStart.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  initialStart() {
    this.setState({ seconds: this.state.seconds + 1 });
    this.render();
  }

  handleStart() {
    this.start = setInterval(this.initialStart, 1000);
    if (this.state.status === false) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });
      this.handleStop();
    }
  }

  handleStop() {
    if (this.state.status === true) {
      clearInterval(this.start);
    }
    this.setState({ status: false });
  }

  handleReset() {
    this.setState({ seconds: 0 });
    this.handleStop();
  }

  render() {
    if (this.state.status === false) {
      return (
        <div className="container flex">
          <div className="watch flex cursor" onClick={this.handleReset}>
            <div className="number-dimensions">{this.state.seconds}</div>
          </div>
          <div className="icon-dimensions flex-bottom cursor">
            <i className="far fa-play-circle flex-bottom" onClick={this.handleStart}></i>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container flex">
          <div className="watch flex cursor" onClick={this.handleReset}>
            <div className="number-dimensions">{this.state.seconds}</div>
          </div>
          <div className="icon-dimensions flex-bottom cursor">
            <i className="far fa-pause-circle flex-bottom" onClick={this.handleStop}></i>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <StopWatch />,
  document.getElementById('root')
);
