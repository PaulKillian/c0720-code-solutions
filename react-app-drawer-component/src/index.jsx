import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuClick: false };
    this.menuIconClick = this.menuIconClick.bind(this);
  }

  menuIconClick() {
    if (this.state.menuClick === false) {
      this.setState({ menuClick: true });
      this.render();
    } else {
      this.setState({ menuClick: false });
      this.render();
    }
  }

  render() {
    if (this.state.menuClick === false) {
      return (
        <div className="flex">
          <div>
            <i className="fas fa-bars fa-lg icon-margin" onClick={this.menuIconClick}></i>
          </div>
          <div></div>
        </div>
      );
    } else {
      return (
        <div className="flex">
          <div className="menu-shadow menu-col">
            <h3>Menu</h3>
            <p onClick={this.menuIconClick}>About</p>
            <p onClick={this.menuIconClick}>Get Started</p>
            <p onClick={this.menuIconClick}>Sign In</p>
          </div>
          <div className="right-col pointer" onClick={this.menuIconClick}></div>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById('root')
);
