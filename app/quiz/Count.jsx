import React, { useEffect, useRef, useState } from 'react';
import { size } from 'lodash';
const soundUrl = '/tick-slow.mp3';
const soundFastUrl = '/tick-fast.mp3';
const Counter = ({ autoSubmit }) => {
  const [counter, setCounter] = useState(60);
  const sound1 = React.useRef(new Audio(soundUrl));
  const sound2 = React.useRef(new Audio(soundFastUrl));
  useEffect(() => {
    const sound = counter > 10 ? sound1.current : sound2.current;
    const intervalId = setInterval(() => {
      if (counter > 0) {
        sound.currentTime = 0;
        sound.play();
        setCounter((prevTime) => prevTime - 1);
      } else {
        autoSubmit();
        sound.pause();
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [counter]);

  const convertCounter = (val) => {
    let minute = Math.floor(val / 60);
    let second = val % 60;
    second = size(`${second}`) === 1 ? `0${second}` : second;
    return `0${minute}:${second}`;
  };

  return (
    <div
      className="text-2xl"
      style={{ color: counter <= 10 ? 'red' : 'white' }}
    >
      {convertCounter(counter)}
    </div>
  );
};

export default Counter;
