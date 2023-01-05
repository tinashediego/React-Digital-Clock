import React, { useState,useEffect } from "react";
import "./App.css";

const App = () => {
  
  const date = new Date();
  const hour = date.getHours()
  const minute = date.getMinutes()
  const status = 'AM'

  const [second, setSecond] = useState(date.getSeconds())  
  function refreshClock() {
    setSecond(new Date().getSeconds());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div>
      <span className="hourHand">
      {hour<10?'0'+hour.toString():hour}
      </span>

      <span className="fullColon">
      :
      </span>

      <span className="minuteHand">
      {minute<10?'0'+minute.toString():minute}
      </span>

      <span className="fullColon">
      :
      </span>

      <span className="secondHand">
      {second<10?'0'+second.toString():second}
      </span>

      <span className="statusTag">
      {hour>=13?'PM':'AM'}
      </span>

    </div>
  );
}

export default App;
