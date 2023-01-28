import React, { useState, useEffect } from 'react';
import "./App.css";

function ComingSoon({ launchDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(launchDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [launchDate, timeLeft]);

  function getTimeLeft(launchDate) {
    const currentTime = new Date().getTime();
    const launchTime = new Date(launchDate).getTime();
    const timeLeft = Math.floor((launchTime - currentTime) / 1000);
    return timeLeft;
  }

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return(
    <div className="section">
    <div className="coming">
      <p>Our site is coming soon!</p>
      <p>Time left until launch:</p>
      <div id="count">
        <div className="countdown" data-count="2023/2/20">
          <div id="wrapper">
            <div id="card1">
              <span>{days}</span>
              <h4>Days</h4>
            </div>
            <div id="card2">
              <span>{hours}</span>
              <h4>Hours</h4>
            </div>
            <div id="card3">
              <span>{minutes}</span>
              <h4>Min</h4>
            </div>
            <div id="card4">
              <span>{seconds}</span>
              <h4>Secs</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ComingSoon;
