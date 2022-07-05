import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleGoodClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  hendleNeutralClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  hendleBadClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <section>
        <h1>Please leave feedback</h1>

        <div>
          <button type="button" onClick={this.hendleGoodClick}>
            Good
          </button>
          <button type="button" onClick={this.hendleNeutralClick}>
            Neutral
          </button>
          <button type="button" onClick={this.hendleBadClick}>
            Bad
          </button>
        </div>

        <div>
          <h2>Statistic</h2>
          <ul>
            <li>Good:{this.state.good}</li>
            <li>Neutral:{this.state.neutral}</li>
            <li>Bad:{this.state.bad}</li>
            <li>Total:{total}</li>
            <li>Positive feedback:{positivePercentage}%</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Feedback;
