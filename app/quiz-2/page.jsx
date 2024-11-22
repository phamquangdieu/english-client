'use client';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useMemo, useState } from 'react';
import wordApi from '../api/wordApi';
import { map } from 'lodash';
import { Col, Row } from 'antd';
const Quiz2 = () => {
  const { data } = useQuery({
    queryKey: 'getQuiz2',
    queryFn: () => wordApi.getQuiz2(),
  });
  const randomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };
  const [currentSelect, setCurrentSelect] = useState();
  const { mapData, correctData } = useMemo(() => {
    if (data) {
      let arr = [],
        arr2 = [];
      let correct = [];
      map(data.data.words, (item) => {
        arr = [...arr, item.word, item.mean];
        correct = [...correct, { word: item.word, mean: item.mean }];
      });

      for (let i = 0; i < data.data.words.length * 2; i++) {
        const random = randomNumber(arr.length);
        arr2[i] = arr[random];
        arr.splice(random, 1);
      }
      return {
        mapData: arr2,
        correctData: correct,
      };
    }
    return {
      mapData: [],
      correctData: [],
    };
  }, [data]);

  useEffect(() => {
    const board = document.getElementById('board');

    const handleClick = (e) => {
        if (!e.target.textContent) return;
        
        if (!currentSelect) {
            e.target.style.backgroundColor = '#00FF9E';
            e.target.style.color = '#A363FF';
            setCurrentSelect(e.target.id);
            return;
        }
        const prev = document.getElementById(currentSelect);
        if (correctData.some((one) => (one.word === currentSelect && one.mean === e.target.id || one.mean === currentSelect && one.word === e.target.id) )
        ) {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.border = 'none';
            e.target.textContent = '';
            prev.textContent = '';
            prev.style.backgroundColor = 'transparent';
            prev.style.border = 'none';
            setCurrentSelect();
            return;
        }
        prev.style.backgroundColor = '#fff';
        prev.style.color = '#111';
        setCurrentSelect();
        return;
    };
    board.addEventListener('click', handleClick);
    return () => board.removeEventListener('click', handleClick);
  }, [mapData, currentSelect, correctData]);
  const renderBoard = useMemo(() => {
    return map(mapData, (item) => (
      <Col
        key={item}
        span={4}
        id={item}
        className="bg-white box border-solid border-[1px] border-red-400 h-[100px] w-[100px] flex items-center justify-center cursor-pointer"
      >
        {item}
      </Col>
    ));
  }, [mapData]);

  return (
    <div className="flex items-center justify-center h-[100vh] px-[200px]" >
      <Row id="board" style={{ backgroundImage: 'url("/leo-high.jpg")', backgroundSize: 'cover'}}>{renderBoard}</Row>
    </div>
  );
};

export default Quiz2;
