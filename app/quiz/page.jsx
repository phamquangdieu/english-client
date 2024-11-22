'use client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import wordApi from '../api/wordApi';
import LoadingScreen from '../loading';
import Count from './Count';
import Question from './Question';
import Result from './Result';
import styles from './styles.module.css';

export default function QuizScreen() {
  const [start, setStart] = useState(false);
  const [type, setType] = useState();
  const {
    data: dataQuestions,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: 'questions',
    queryFn: () => wordApi.getQuestions({ type }),
    enabled: start,
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
    },
  });

  const onNext = () => {
    if (current < data.length - 1) setCurrent((prev) => prev + 1);
    else {
      mutate({
        id: idQuiz,
        answers: selectedAnswer,
      });
    }
  };

  const autoSubmit = () => {
    mutate({
      id: idQuiz,
      answers: selectedAnswer,
    });
  };

  const onPrev = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  const onRefresh = () => {
    setResult(null);
    setCurrent(0);
    setSelectedAnswer({});
    setStart(false);
  };

  const onStart = (type) => {
    setStart(true);
    setType(type);
  };

  if (isLoading || isFetching) return <LoadingScreen />;
  const renderContent = () => {
    if (!start) {
      return (
        <div className="flex gap-4">
          <button
            onClick={() => onStart('b2')}
            className={`${styles.btn} w-[200px] bg-gradient-to-tr from-[#f6d365]  to-[#fda085] rounded-2xl border-[1px] border-white`}
          >
            <div className="text-2xl p-4 text-center">Level B2</div>
          </button>
          <button
            onClick={() => onStart('phrasal_verb')}
            className={`${styles.btn} w-[200px] bg-gradient-to-tr from-[#c94b4b]  to-[#4b134f] rounded-2xl border-[1px] border-white`}
          >
            <div className="text-2xl p-4 text-center">Phrasal Verb</div>
          </button>
          <button
            onClick={() => onStart('phrasal')}
            className={`${styles.btn} w-[200px] bg-gradient-to-tr from-[#5ee7df]  to-[#b490ca] rounded-2xl border-[1px] border-white`}
          >
            <div className="text-2xl p-4 text-center">Phrasal</div>
          </button>
          <button
            onClick={() => onStart('idioms')}
            className={`${styles.btn} w-[200px] bg-gradient-to-tr from-[#f093fb]  to-[#f5576c] rounded-2xl border-[1px] border-white`}
          >
            <div className="text-2xl p-4 text-center">Idioms</div>
          </button>
        </div>
      );
    }
    if (result) {
      return <Result data={result} onRefresh={onRefresh} />;
    }
    return (
      <>
        <Question
          currentData={data[current]}
          current={current}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        />
        <div className="w-full mt-16 flex justify-center items-center gap-4">
          <button
            onClick={onPrev}
            className={`${styles.btn} w-[200px] bg-white rounded-2xl`}
            style={{}}
          >
            <div className="text-2xl p-4 text-center font-bold from-electricViolet via-pink-600 to-vibrantBlue bg-gradient-to-r bg-clip-text text-transparent">
              Quay lại
            </div>
          </button>
          <button
            onClick={onNext}
            className={`${styles.btn} w-[200px] bg-gradient-to-tr from-electricViolet via-pink-600 to-vibrantBlue rounded-2xl`}
          >
            <div className="text-2xl p-4 text-center">
              {current === data.length - 1 ? 'Xong' : <>Tiếp &gt;&gt;</>}
            </div>
          </button>
        </div>
      </>
    );
  };
  return (
    <div className={styles.glassCard}>
      {!result && start && (
        <div className="absolute top-10 right-10">
          <Count autoSubmit={autoSubmit} />
        </div>
      )}
      <div className={styles.container}>{renderContent()}</div>
    </div>
  );
}
