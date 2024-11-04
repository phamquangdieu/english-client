import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css';
import VanillaTilt from 'vanilla-tilt';
import styled from 'styled-components';

const GlassCard = ({ keyAnswer, title, selectedAnswer, setSelectedAnswer, current }) => {
    const onClick = () => setSelectedAnswer(prev => ({...prev, [current]: keyAnswer}));
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
        VanillaTilt.init(ref.current, {
            max: 25,
            speed: 400
        });
        }
    }, []);
    return (
        <CustomizeCard 
          className={styles.cardContainer}
          ref={ref}
          onClick={onClick}
          active={keyAnswer === selectedAnswer[current]}
        >
          <div className={styles.content}>
            <div className={styles.number}>{`${keyAnswer}.  ${title}`}</div>
            <div className={styles.title}></div>
          </div>
        </CustomizeCard>
    )
}
 
export default GlassCard;

const CustomizeCard = styled.div`
  background-color: ${props => (props.active ? '#00FF9E' : 'rgba(255, 255, 255, 0.1)')};
  color: ${props => (props.active && '#A363FF')};
`;
