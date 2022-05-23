import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};
/*
const countdown = styled`
.show-counter {
  padding: 0.5rem;
}

.show-counter .countdown-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding: 0.5rem;
  border: 1px solid #ebebeb;
  border-radius: 0.25rem;
  text-decoration: none;
  color: white;
}

.show-counter .countdown {
  line-height: 1.25rem;
  padding: 0 0.75rem 0 0.75rem;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.show-counter .countdown > p {
  margin: 0;
}

.show-counter .countdown > span {
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1rem;
}
`;
*/

export { useCountdown };
