import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.btnList}>
      {options.map(option => (
        <li className={css.btnItem} key={option}>
          <button
            className={css.button}
            type="button"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export { FeedbackOptions };
