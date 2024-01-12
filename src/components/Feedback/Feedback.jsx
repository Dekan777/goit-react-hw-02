import css from './Feedback.module.css';
export const Feedback = ({ value: { good, neutral, bad } }) => {
  const totalFeedback = good + neutral + bad;
  const positive = Math.round(((good + neutral) / totalFeedback) * 100);
  return (
    <div>
      {totalFeedback > 0 ? (
        <>
          <p className={css.text}>Good: {good}</p>
          <p className={css.text}>Neutral: {neutral}</p>
          <p className={css.text}>Bad: {bad}</p>
          <p className={css.text}>Total:{totalFeedback}</p>
          <p className={css.text}>Positive{positive}</p>
        </>
      ) : (
        <p className={css.text}>No feedback yet.</p>
      )}
    </div>
  );
};
