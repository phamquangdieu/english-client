import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import VanillaTilt from 'vanilla-tilt';
import styled from 'styled-components';

const GlassCard = ({ keyAnswer, title, current, right, yourChoice }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init(ref.current, {
        max: 25,
        speed: 400,
      });
    }
  }, []);
  return (
    <CustomizeCard
      className={styles.cardContainer}
      ref={ref}
      right={right}
      yourChoice={yourChoice}
    >
      <div className={styles.content}>
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
