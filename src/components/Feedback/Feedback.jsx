export const Feedback = ({ value: { good, neutral, bad } }) => {
  const totalFeedback = good + neutral + bad;

  return (
    <div>
      {totalFeedback > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </>
      ) : (
        <p>No feedback yet.</p>
      )}
    </div>
  );
};
