import { useEffect, useState } from "react";

const d = new Date();

export default function Bottom(props) {
  const [isShow, setIsShow] = useState(false);

  function showDetailBox() {
    setIsShow((prevValue) => !prevValue);
  }

  const dayOfYear = (date) =>
    Math.floor(
      (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
    );

  function weekYear() {
    const currentDate = d;
    const year = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate - year) / (24 * 60 * 60 * 1000));
    const week = Math.ceil((currentDate.getDay() + 1 + days) / 7);
    return week;
  }

  return (
    <div className="bottom">
      <div className="short-details">
        <span className="location">
          In {props.city} {props.country}
        </span>
        <button onClick={showDetailBox} className="more">
          {isShow ? "Less" : "More"}
          <img
            className="arrow"
            src={`./svg/${isShow ? "up" : "drop"}-arrow.png`}
            alt="arrow"
          />
        </button>
      </div>
      <div data-show={isShow} className="full-details">
        <div className="time-zone-details">
          <div className="time-zone">
            <div className="country">
              <span>CURRENT TIMEZONE</span>
              <h5>{props.timezone}</h5>
            </div>
            <div className="day-number">
              <span>DAY OF THE WEEK</span>
              <h5>{d.getDay()}</h5>
            </div>
          </div>
          <div className="numbers">
            <div className="day-in-year">
              <span>DAY OF THE YEAR</span>
              <h5>{dayOfYear(d)}</h5>
            </div>
            <div className="week-in-year">
              <span>WEEK NUMBER</span>
              <h5>{weekYear()}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
