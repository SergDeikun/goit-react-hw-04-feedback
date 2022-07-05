import css from './feedbackOptions.module.css';
// import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={() => onLeaveFeedback(option)}
            type="button"
            className={css.btn}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
