import { useRef } from 'react';
import styled from 'styled-components';
import styles from './styles.module.css';
import { size } from 'lodash';

const GlassCard = ({ keyAnswer, title, right, yourChoice }) => {
  const ref = useRef(null);
  return (
    <CustomizeCard
      className={styles.cardContainer}
      ref={ref}
      right={right}
      yourChoice={yourChoice}
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
  background-color: ${(props) => {
    if (props.right) {
      return '#00FF9E';
    }
    if (props.yourChoice) {
      return '#E71818';
    }
    return 'rgba(255, 255, 255, 0.1)';
  }};
  color: ${(props) => {
    if (props.right) {
      return '#A363FF';
    }
    if (props.yourChoice) {
      return 'yellow';
    }
    return '#fff';
  }};
`;
