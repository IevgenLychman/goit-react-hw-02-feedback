import React from 'react';
import { Statistics } from 'components/statistic/Statistics';
import { FeedbackOptions } from 'components/feedbackOption/FeedbackOptions';
import { SectionTitle } from 'components/sectionTitle/SectionTitle';

export class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = options => {
    this.setState(prevState => ({
      [options]: prevState[options] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const sum = this.state.good + this.state.neutral + this.state.bad;
    if (!sum) {
      return 0;
    }
    return Math.round((this.state.good * 100) / sum);
  };

  render() {
    const sum = this.state.good + this.state.bad + this.state.neutral;

    return (
      <>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            items={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {sum === 0 ? (
            'There is no feedback'
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </SectionTitle>
      </>
    );
  }
}
