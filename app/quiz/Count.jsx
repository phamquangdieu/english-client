import React, { useEffect, useRef, useState } from 'react';
import {size} from 'lodash';

const Count = () => {
    const [counter, setCounter] = useState(75);
    let counterInterval = useRef(null);
    useEffect(() => {
        if (counter > 0) {
            counterInterval.current = setInterval(() => {
                setCounter(prev => prev - 1)
            }, 1000);
        }
        return () => clearInterval(counterInterval.current)
    }, [counter]);

    const convertCounter = (val) => {
        let minute = Math.floor(val / 60);
        let second = val % 60;
        second = size(`${second}`) === 1 ? `0${second}` : second;
        return `0${minute}:${second}`
    }

    return (
        <div className='text-2xl' style={{ color: counter <= 30 ? 'red' : 'white'}}>
            {convertCounter(counter)}
        </div>
    );
}
 
export default Count;