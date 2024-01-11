export const Options = ({ value, valueSet }) => {
  const handleClick = type => {
    const newFeedbackTypes = { ...value };
    newFeedbackTypes[type] += 1;

    valueSet(newFeedbackTypes);
  };

  const handleReset = () => {
    valueSet({ good: 0, neutral: 0, bad: 0 });
  };

  const hasFeedback = value.good + value.neutral + value.bad > 0;

  return (
    <div>
      <button onClick={() => handleClick('good')}>Good</button>
      <button onClick={() => handleClick('neutral')}>Neutral</button>
      <button onClick={() => handleClick('bad')}>Bad</button>
      {hasFeedback && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};
