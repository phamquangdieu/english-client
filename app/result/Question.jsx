import { Col, Row, Spin } from 'antd';
import React, { useMemo } from 'react'
import GlassCard from './GlassCard';
import { map } from 'lodash';

const Question = ({ currentData, current }) => {
  console.log(currentData);
  const title = useMemo(() => {
    if (currentData.type === 'vi') {
      return <div>{current + 1}. Từ nào dưới đây có nghĩa là <span style={{color: '#e9850f'}}>&quot;{currentData.word}&quot;</span>?</div>
    }
    return <div>{current + 1}. Từ <span style={{color: '#e9850f'}}>&quot;{currentData.word}&quot;</span> có nghĩa là?</div>
  }, [currentData]);

  const answers = useMemo(() => map(currentData.answers, (item, key) => (
    <Col span={12}>
      <GlassCard
        keyAnswer={key}
        title={item}
        current={current}
        right={key === currentData?.correctSelect}
        yourChoice={key === currentData?.yourChoice}
      />
    </Col>
  )), [currentData])
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