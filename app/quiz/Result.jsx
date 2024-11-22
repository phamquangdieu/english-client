import Image from 'next/image';
import React, { useEffect } from 'react';
import { size } from 'lodash';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const highImg = [
  '/leo-high.jpg',
  '/success-kid.png',
  '/panda-2.jpg',
  '/panda-4.jpeg',
  '/think.jpg'
];

const averageImg = [
  '/cat-unknown.jpg',
  '/cat.jpg',
  '/panda-1.png',
  '/panda-7.jpeg',
  '/panda-9.jpg',
  '/frog-1.jpg',
  '/cat-4.jpeg',
  '/cat-5.jpg',
  '/confuse.jpg'
];

const failImg = [
  '/leo-fail.webp',
  '/sad-cat.gif',
  '/panda-3.jpg',
  '/panda-6.jpg',
  '/panda-8.jpg',
  '/panda-10.jpg',
  '/frog-2.png',
  '/yao-ming-png',
  '/cat-3.png',
];

const randomNumber = (max) => {
  return Math.floor(Math.random() * max);
};
const soundUrl = '/kids_cheering.mp3';
const Result = ({ data, onRefresh }) => {
  const sound = React.useRef(new Audio(soundUrl));
  const { correct, result } = data;
  const percent = Math.floor((correct * 100) / size(result));
  useEffect(() => {
    if (percent > 80) {
      sound.current.play();
    }
  }, [percent]);
  const renderColor = (val) => {
    if (val >= 80) return '#00FF9E';
    if (val >= 60) return '#e9850f';
    return '#dd1a08';
  };
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
  };
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <div className="rounded-xl">
        <Image
          className="rounded-[50px]"
          src={renderImage(percent)}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 300, height: 'auto' }}
        />
      </div>
      <div className="text-2xl mt-12">
        Số câu trả lời đúng là{' '}
        <span style={{ color: renderColor(percent) }}>
          {correct}/{size(result)}
        </span>
      </div>
      <div className="mt-8 flex gap-4">
        <Link href={`/result?id=${data.id}`} target="_blank">
          <button
            className={`${styles.btn} w-[200px] bg-gradient-to-tr from-electricViolet via-pink-600 to-vibrantBlue rounded-2xl`}
          >
            <div className="text-xl p-4 text-center">Chi tiết</div>
          </button>
        </Link>
        <button
          onClick={onRefresh}
          className={`${styles.btn} w-[200px] bg-gradient-to-tr from-electricViolet via-pink-600 to-vibrantBlue rounded-2xl`}
        >
          <div className="text-xl p-4 text-center">Chơi lại</div>
        </button>
      </div>
    </div>
  );
};

export default Result;
