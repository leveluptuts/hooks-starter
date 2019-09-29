import React, { Component } from "react";

export default class Refactor extends Component {
  state = {
    isToggled: false
  };

  toggle = () => {
    this.setState(state => {
      return { isToggled: !state.isToggled };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.isToggled && <h2>Hello!</h2>}
      </div>
    );
  }
}