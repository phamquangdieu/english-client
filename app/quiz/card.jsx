import { size } from 'lodash';
import { useRef } from 'react';
import styled from 'styled-components';
import styles from './styles.module.css';

const GlassCard = ({
  keyAnswer,
  title,
  selectedAnswer,
  setSelectedAnswer,
  current,
}) => {
  const onClick = () =>
    setSelectedAnswer((prev) => ({ ...prev, [current]: keyAnswer }));
  const ref = useRef(null);

  return (
    <CustomizeCard
      className={styles.cardContainer}
      ref={ref}
      onClick={onClick}
      active={keyAnswer === selectedAnswer[current]}
    >
      <div
        className={styles.content}
        style={{ fontSize: size(title) > 20 && '20px' }}
      >
        <div className={styles.number}>{`${keyAnswer}.  ${title}`}</div>
        <div className={styles.title}></div>
      </div>
    </CustomizeCard>
  );
};

export default GlassCard;

const CustomizeCard = styled.div`
  background-color: ${(props) =>
    props.active ? '#00FF9E' : 'rgba(255, 255, 255, 0.1)'};
  color: ${(props) => props.active && '#A363FF'};
`;
