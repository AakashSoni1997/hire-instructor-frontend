import React from "react"
import { useCountdown } from "../hooks/useCountDown"
import DateTimeDisplay from "./DateTimeDisplay";
import "./countDownTimer.scss"

const CountdownTimer = ({ targetDate, hourShow }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        hourVisible={hourShow}
      />
    );
  }
};


const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds, hourVisible }) => {

  return (
    <div className="show-counter">
      {/* <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p> */}
      {hourVisible &&
        <>
          <DateTimeDisplay value={hours} type={'hrs'} isDanger={false} />
          <span> </span>
        </>
      }
      <DateTimeDisplay value={minutes} type={'mins'} isDanger={false} />
      <span> </span>
      <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  );
}

export default CountdownTimer;