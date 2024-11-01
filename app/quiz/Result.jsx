import Image from 'next/image';
import React from 'react'
import {size} from 'lodash';
import styles from './styles.module.css'

const highImg = [
    '/leo-high.jpg'
]

const averageImg = [
    '/cat-unknown.jpg',
    '/cat.jpg',

];

const failImg = [
    '/leo-fail.webp',
    '/sad-cat.gif'
]

const randomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

const Result = ({ data, onRefresh }) => {
    const {correct,result} = data;
    const percent = Math.floor((correct*100) / size(result));
    const renderColor = (val) => {
        if (val >= 80) return '#00FF9E';
        if (val >= 60) return '#e9850f';
        return '#dd1a08';
    }
    const renderImage = (val) => {
        if (val >= 80) {
            const a = randomNumber(highImg.length);
            return highImg[a];
        }
        if (val >= 60) {
            const a = randomNumber(averageImg.length);
            return averageImg[a];
        }
        const a = randomNumber(failImg.length);
        return failImg[a];
    }
    return (
        <div className='w-full items-center justify-center flex flex-col'>
            <div className='rounded-xl'>
                <Image
                className='rounded-[50px]'
                    src={renderImage(percent)}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: 300 , height: 'auto' }}
                />
            </div>
            <div className='text-2xl mt-12'>
                Số câu trả lời đúng là <span style={{ color: renderColor(percent) }}>{correct}/{size(result)}</span>
            </div>
            <div className='mt-8'>
                <button
                    onClick={onRefresh}
                    className={`${styles.btn} w-[200px] bg-gradient-to-tr from-electricViolet via-pink-600 to-vibrantBlue rounded-2xl`}>
                    <div className='text-xl p-4 text-center'>
                    Chơi lại
                    </div>
                </button>
            </div>
        </div>
    );
}
 
export default Result;