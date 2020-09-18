import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTopic: 0 };
  }

  render() {
    return (
      <div className="flex">
        <div>Hypertext Markup Language</div>
        <div className="hidden"></div>
        <div>Cascading Style Sheet</div>
        <div className="hidden"></div>
        <div>JavaScript</div>
        <div className="hidden"></div>
      </div>
    );
  }
}

export default Accordion;
