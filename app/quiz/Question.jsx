import { Col, Row, Spin } from 'antd';
import React, { useMemo } from 'react';
import GlassCard from './card';
import { map, size } from 'lodash';

const Question = ({
  selectedAnswer,
  setSelectedAnswer,
  currentData,
  current,
}) => {
  const title = useMemo(() => {
    if (currentData.type === 'synonym') {
      return (
        <div>
          {current + 1}. Từ nào dưới đây đồng nghĩa với{' '}
          <span className="p-4 text-center font-bold from-orange-400  to-[#FFFF00] bg-gradient-to-t bg-clip-text text-transparent">
            &quot;{currentData.word}&quot;
          </span>
          ?
        </div>
      );
    }
    if (currentData.type === 'vi') {
      return (
        <div>
          {current + 1}. Từ nào dưới đây có nghĩa là{' '}
          <span className="p-4 text-center font-bold from-orange-400  to-[#FFFF00] bg-gradient-to-t bg-clip-text text-transparent">
            &quot;{currentData.word}&quot;
          </span>
          ?
        </div>
      );
    }
    return (
      <div>
        {current + 1}. Từ{' '}
        <span className="p-4 text-center font-bold from-orange-400  to-[#FFFF00] bg-gradient-to-t bg-clip-text text-transparent">
          &quot;{currentData.word}&quot;
        </span>{' '}
        có nghĩa là?
      </div>
    );
  }, [currentData]);

  const answers = useMemo(
    () =>
      map(currentData.answers, (item, key) => (
        <Col span={12}>
          <GlassCard
            keyAnswer={key}
            title={item}
            setSelectedAnswer={setSelectedAnswer}
            selectedAnswer={selectedAnswer}
            current={current}
          />
        </Col>
      )),
    [currentData, selectedAnswer]
  );
  return (
    <div>
      <div className="text-2xl text-center mb-16">{title}</div>
      <Row gutter={[24, 24]}>{answers}</Row>
    </div>
  );
};

export default Question;
