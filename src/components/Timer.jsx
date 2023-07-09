import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import "../styles/timer.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [s, setS] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [m, setM] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  var timer;

  useEffect(() => {
    if (isPlaying) {
      if (s == seconds && m == minutes) {
        clearInterval(timer);
        setIsPlaying(false); // Clear the interval if inputted values match timer values
      } else {
        timer = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);

          if (seconds == 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            setSeconds(0);
          }
        }, 1000);
      }
    }
    return () => clearInterval(timer);
  }, [isPlaying, seconds, minutes, s, m]);

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
    setIsPlaying(false);
  };

  const play = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="timerCon">
      <h1>Time</h1>
      <h1>
        {minutes < 10 ? "0" + minutes : minutes} :{" "}
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>

      <div className="inputTime">
        <div>
          <label htmlFor="minutes">minutes</label>{" "}
          <label htmlFor="seconds">seconds</label>
        </div>
        <div>
          <input
            name="minutes"
            type="text"
            className="inputs"
            value={m}
            onChange={(event) => setM(event.target.value)}
          />{" "}
          :{" "}
          <input
            name="seconds"
            type="text"
            className="inputs"
            value={s}
            onChange={(event) => setS(event.target.value)}
          />
        </div>
      </div>

      <div className="button-con">
        <button onClick={restart}>reset</button>

        <div className="playStop">
          {isPlaying ? (
            <FaPause
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
              onClick={play}
            />
          ) : (
            <FaPlay
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
              onClick={play}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;
