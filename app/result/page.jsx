'use client';

import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import wordApi from '../api/wordApi';
import { get } from 'lodash';
import Question from './Question';
import styles from './styles.module.css'
import LoadingScreen from '../loading';
const Result = () => {
    const params = useSearchParams();
    const quizId = params.get('id');
    const { data: dataResult, isLoading, isFetching } = useQuery({
        queryKey: 'getResult',
        queryFn: () => wordApi.getResult(quizId),
        enabled: !!quizId,
    });
    const data = get(dataResult, ['data', 'result', 'content']);
    const [current, setCurrent] = useState(0);
    const onNext = () => {
        if (current < data.length - 1) setCurrent(prev => prev + 1);
    }
    const onPrev = () => {
        if (current > 0) setCurrent(prev => prev - 1);
    }
    if (isLoading || isFetching) return <LoadingScreen />;
    return (
        <div className={styles.glassCard}>
            <div className={styles.container}>
                <Question
                    currentData={data?.[current]}
                    current={current}
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
                        {current === data?.length - 1 ? 'Xong' : <>Tiếp &gt;&gt;</>}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Result;