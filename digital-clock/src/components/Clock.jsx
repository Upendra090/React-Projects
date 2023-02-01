import { useState, useEffect } from "react";
const date = new Date();
export default function Clock(props) {
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    month: date.getMonth(),
    date: date.getDate(),
    day: date.getDay(),
  });

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        month: date.toLocaleString("en-US", { month: "long" }),
        day: weekday[date.getDay()],
        date: date.getDate(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getFirstChar() {
    let hf = "";
    hf += dateTime.hours;
    return hf.charAt(0);
  }

  function getSecondChar() {
    let hf = "";
    hf += dateTime.hours;
    return hf.charAt(1);
  }

  function getDayFirstChar() {
    let dfc = "";
    dfc += dateTime.day;
    return dfc.charAt(0);
  }

  function getDayOtherChar() {
    let oc = "";
    oc += dateTime.day;
    return oc.substring(1, oc.length);
  }

  return (
    <div className="container">
      <div className="clock">
        <div className="greeting-box">
          <img
            src={`./svg/${dateTime.hours >= 18 ? "moon" : "sun"}.svg`}
            alt="day time"
          />
          <span className="greet-msg">
            {dateTime.hours >= 18
              ? "Good Evening"
              : dateTime.hours >= 12
              ? "Good Afternoon"
              : dateTime.hours >= 0
              ? "Good Morning"
              : "Good Night"}
            ,
          </span>
          <span>IT'S CURRENTLY</span>
        </div>
        <div className="digi-clock">
          <h5>
            <span className="fc">{getFirstChar()}</span>
            {getSecondChar()}:
            {dateTime.minutes <= 9 ? "0" + dateTime.minutes : dateTime.minutes}
          </h5>
          <span className="time-loc">{props.country} Standard Time</span>
        </div>
      </div>
      <div className="date">
        <span className="day">
          <span className="fc f">{getDayFirstChar()}</span>
          {getDayOtherChar()},
        </span>
        <span className="month">
          {dateTime.month} {dateTime.date}
        </span>
      </div>
    </div>
  );
}
