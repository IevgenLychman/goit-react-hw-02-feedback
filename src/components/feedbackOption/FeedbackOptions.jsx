import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ items, onLeaveFeedback }) => {
  return (
    <>
      {items.map(item => (
        <Button key={item} type="button" onClick={() => onLeaveFeedback(item)}>
          {item}
        </Button>
      ))}
    </>
  );
};
