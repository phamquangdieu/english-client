import { Col, Row, Spin } from 'antd';
import React, { useMemo } from 'react'
import GlassCard from './card';
import { map } from 'lodash';

const Question = ({ selectedAnswer, setSelectedAnswer, currentData, current }) => {
  const title = useMemo(() => {
    if (currentData.type === 'vi') {
      return <div>{current + 1}. Từ nào dưới đây có nghĩa là <span style={{color: '#e9850f'}}>"{currentData.word}"</span>?</div>
    }
    return <div>{current + 1}. Từ <span style={{color: '#e9850f'}}>"{currentData.word}"</span> có nghĩa là?</div>
  }, [currentData]);

  const answers = useMemo(() => map(currentData.answers, (item, key) => (
    <Col span={12}>
      <GlassCard
        keyAnswer={key}
        title={item}
        setSelectedAnswer={setSelectedAnswer}
        selectedAnswer={selectedAnswer}
        current={current}
      />
    </Col>
  )), [currentData, selectedAnswer])
  return (
    <div>
      <div className='text-2xl text-center mb-16'>
          {title}
      </div>
      <Row gutter={[32, 32]}>
        {answers}
      </Row>
    </div>
  );
}
 
export default Question;