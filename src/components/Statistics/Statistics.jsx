import PropTypes from 'prop-types';

import { StatisticList, StatisticTypes } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticList>
        <StatisticTypes>Good: {good}</StatisticTypes>
        <StatisticTypes>Neutral: {neutral}</StatisticTypes>
        <StatisticTypes>Bad: {bad}</StatisticTypes>
        <StatisticTypes>Total: {total}</StatisticTypes>
        <StatisticTypes>
          Positive feedback: {positivePercentage}%
        </StatisticTypes>
      </StatisticList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
