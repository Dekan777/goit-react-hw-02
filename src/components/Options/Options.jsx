export const Options = ({ value, valueSet }) => {
  const handleClick = type => {
    const newFeedbackTypes = { ...value };
    newFeedbackTypes[type] += 1;
    valueSet(newFeedbackTypes);
  };

  return (
    <div>
      <button onClick={() => handleClick('good')}>Good</button>
      <button onClick={() => handleClick('neutral')}>Neutral</button>
      <button onClick={() => handleClick('bad')}>Bad</button>
    </div>
  );
};
