import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <h1
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />:
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />:
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />:
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        </h1>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  
};

export default CountdownTimer;