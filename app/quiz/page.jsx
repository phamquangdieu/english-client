'use client';
import styles from './styles.module.css';
import Question from './Question';
import Count from './Count';
import { useState } from 'react';
import Result from './Result'
import { useMutation, useQuery } from '@tanstack/react-query';
import wordApi from '../api/wordApi';
import LoadingScreen from '../loading';

export default function QuizScreen() {
  const { data: dataQuestions, isLoading, refetch, isFetching } = useQuery({
    queryKey: 'questions',
    queryFn: () => wordApi.getQuestions(),
  });
  const idQuiz = dataQuestions?.data?.id;
  const data = dataQuestions?.data?.content;
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState();
  const { mutate } = useMutation({
    mutationKey: 'checkResult',
    mutationFn: wordApi.checkResult,
    onSuccess: (data) => {
      setResult(data?.data);
    }
  });
  const onNext = () => {
    if (current < data.length - 1) setCurrent(prev => prev + 1);
    else {
      mutate({
        id: idQuiz,
        answers: selectedAnswer,
      });
    }
  }
  const onPrev = () => {
    if (current > 0) setCurrent(prev => prev - 1);
  }
  const onRefresh = () => {
    setResult(null);
    setCurrent(0);
    setSelectedAnswer({});
    refetch();
  }
  if (isLoading || isFetching) return <LoadingScreen />
  return (
    <div className={styles.glassCard}>
      {!result && (
        <div className='absolute top-10 right-10'>
          <Count />
        </div>
      )}
      <div className={styles.container}>
        {result ? <Result data={result} onRefresh={onRefresh} /> : (
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
                  {current === data.length - 1 ? 'Xong' : <>Tiếp &gt;&gt;</>}
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
