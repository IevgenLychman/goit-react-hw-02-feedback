export const FeedbackOptions = ({ items, onLeaveFeedback }) => {
  return (
    <div>
      {items.map(item => (
        <button key={item} type="button" onClick={() => onLeaveFeedback(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};
