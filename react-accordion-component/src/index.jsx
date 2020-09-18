import React from 'react';
import ReactDOM from 'react-dom';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTopic: 0 };
  }

  render() {
    return (
      <div className="flex">
        <div>Hypertext Markup Language</div>
        <div className="hidden">{this.state.isTopic.html}</div>
        <div>Cascading Style Sheet</div>
        <div className="hidden"></div>
        <div>JavaScript</div>
        <div className="hidden"></div>
      </div>
    );
  }
}

ReactDOM.render(
  <Accordion />,
  document.getElementById('root')
);
