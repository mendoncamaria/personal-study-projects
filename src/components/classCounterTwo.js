import React, { Component } from 'react';

export class ClassCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  DecrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };
  resetCount = () => {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  };
  incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    }
  };
  DecrementFive = () => {
    for (let i = 0; i < 5; i++) {
      this.setState((prevState) => {
        return {
          count: prevState.count - 1,
        };
      });
    }
  };
  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.resetCount}>Reset</button>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.DecrementCount}>Decrement</button>
        <button onClick={this.incrementFive}>Increment by 5</button>
        <button onClick={this.DecrementFive}>Decrement by 5</button>
      </div>
    );
  }
}

export default ClassCounterTwo;
