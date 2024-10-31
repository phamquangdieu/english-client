'use client';
import styles from './styles.module.css';
import Question from './Question';
import Count from './Count';
import { useState } from 'react';
import {data} from './mock'
import Result from './Result'

export default function HomeScreen() {
  const [dataQuestions, setDataQuestions] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [current, setCurrent] = useState(0);
  const [hasResult, setHasResult] = useState(false);
  const onNext = () => {
    if (current < data.length - 1) setCurrent(prev => prev + 1);
    else setHasResult(true);
  }
  const onPrev = () => {
    if (current > 0) setCurrent(prev => prev - 1);
  }
  return (
    <div className={styles.glassCard}>
      {!hasResult && (
        <div className='absolute top-10 right-10'>
          <Count />
        </div>
      )}
      <div className={styles.container}>
        {hasResult ? <Result /> : (
          <>
            <Question
              currentData={data[current]}
              current={current}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
            />
            <div className='w-full mt-16 flex justify-center items-center gap-4'>
              <button
                onClick={onPrev}
                className={`${styles.btn} w-[200px] bg-white rounded-2xl`}  style={{ }}>
                <div className='text-2xl p-4 text-center font-bold from-electricViolet via-pink-600 to-vibrantBlue bg-gradient-to-r bg-clip-text text-transparent'>
                  Quay lại
                </div>
              </button>
              <button
                onClick={onNext}
                className={`${styles.btn} w-[200px] bg-gradient-to-tr from-electricViolet via-pink-600 to-vibrantBlue rounded-2xl`}>
                <div className='text-2xl p-4 text-center'>
                  Tiếp &gt;&gt;
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
