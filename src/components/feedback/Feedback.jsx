import React from 'react';

export class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = type => {
    const wtf = type;
    this.setState(prevState => ({
      wtf: prevState.good + 1,
    }));
  };

  //   addFeedback = () => {
  //     this.setState(prevState => {
  //       return {
  //         good: prevState.value + 1,
  //       };
  //     });
  //   };

  render() {
    // const { step } = this.props;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.addFeedback(good)}>
          Good
        </button>
        <button type="button" onClick={this.addFeedback}>
          Neutral
        </button>
        <button type="button" onClick={this.addFeedback}>
          Bad
        </button>
        <p>Statistics</p>
        <ul>
          <li>Good {this.state.good}</li>
          <li>Neutral {this.state.neutral}</li>
          <li>Bad {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}
