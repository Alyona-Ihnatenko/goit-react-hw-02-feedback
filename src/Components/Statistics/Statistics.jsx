import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';
function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={css.statistics}>
      <ul className={css.statList}>
        <li className={css.statItem}>
          <p className={css.text}>Good:</p>
          <span className={css.description}>{good}</span>
        </li>

        <li className={css.statItem}>
          <p className={css.text}>Neutral:</p>
          <span className={css.description}>{neutral}</span>
        </li>

        <li className={css.statItem}>
          <p className={css.text}>Bad:</p>
          <span className={css.description}>{bad}</span>
        </li>

        <li className={css.statItem}>
          <p className={css.text}>Total:</p>
          <span className={css.description}>{total}</span>
        </li>

        <li className={css.statItem}>
          <p className={css.text}>Positiv feedback:</p>
          <span className={css.description}>{positivePercentage} %</span>
        </li>
      </ul>
    </div>
  );
}
export { Statistics };

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
