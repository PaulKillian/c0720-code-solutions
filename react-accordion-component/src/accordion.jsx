import React from 'react';

const topics = [
  {
    html: 'Hypertext Markup Language (HTML) is the standard marku lnguage for creating web pages and web applications. With Cascading Style Sheets(CSS) an Javascript, it forms a triad of cornerstone technologis for the World Wide Web.',
    css: 'Cascading Style Sheets (CSS) is a style sheet language used for describing a presentation of a document written in a markup like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and Javascript.',
    js: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: 0 };

    this.revealHTMLText = this.revealHTMLText.bind(this);
    this.revealCSSText = this.revealCSSText.bind(this);
    this.revealJSText = this.revealJSText.bind(this);
  }

  revealHTMLText() {
    if (this.state.isClicked === 1) {
      this.setState({ isClicked: 0 });
    } else {
      this.setState({ isClicked: 1 });
    }
  }

  revealCSSText() {
    if (this.state.isClicked === 2) {
      this.setState({ isClicked: 0 });
    } else {
      this.setState({ isClicked: 2 });
    }
  }

  revealJSText() {
    if (this.state.isClicked === 3) {
      this.setState({ isClicked: 0 });
    } else {
      this.setState({ isClicked: 3 });
    }
  }

  render() {
    if (this.state.isClicked === 0) {
      return (
        <div className="flex col-6">
          <div className="cursor border border-primary" onClick={this.revealHTMLText}>Hypertext Markup Language</div>
          <div className="hidden">{topics[0].html}</div>
          <div className="cursor border border-primary" onClick={this.revealCSSText}>Cascading Style Sheet</div>
          <div className="hidden">{topics[0].css}</div>
          <div className="cursor cursor border border-primary" onClick={this.revealJSText}>JavaScript</div>
          <div className="hidden">{topics[0].js}</div>
        </div>
      );
    } else if (this.state.isClicked === 1) {
      return (
        <div className="flex col-6">
          <div className="cursor border border-primary" onClick={this.revealHTMLText}>Hypertext Markup Language</div>
          <p className="border border-primary">{topics[0].html}</p>
          <div className="cursor cursor border border-primary" onClick={this.revealCSSText}>Cascading Style Sheet</div>
          <div className="hidden"></div>
          <div className="cursor cursor border border-primary" onClick={this.revealJSText}>JavaScript</div>
          <div className="hidden"></div>
        </div>
      );
    } else if (this.state.isClicked === 2) {
      return (
        <div className="flex col-6">
          <div className="cursor cursor border border-primary" onClick={this.revealHTMLText}>Hypertext Markup Language</div>
          <div className="hidden"></div>
          <div className="cursor cursor border border-primary" onClick={this.revealCSSText}>Cascading Style Sheet</div>
          <p className="border border-primary">{topics[0].css}</p>
          <div className="cursor cursor border border-primary" onClick={this.revealJSText}>JavaScript</div>
          <div className="hidden"></div>
        </div>
      );
    } else {
      return (
        <div className="flex col-6">
          <div className="cursor cursor border border-primary" onClick={this.revealHTMLText}>Hypertext Markup Language</div>
          <div className="hidden"></div>
          <div className="cursor cursor border border-primary" onClick={this.revealCSSText}>Cascading Style Sheet</div>
          <div className="hidden"></div>
          <div className="cursor cursor border border-primary" onClick={this.revealJSText}>JavaScript</div>
          <p className="border border-primary">{topics[0].js}</p>
        </div>
      );
    }
  }
}

export default Accordion;
