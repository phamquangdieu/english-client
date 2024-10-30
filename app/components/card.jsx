import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css';
import VanillaTilt from 'vanilla-tilt';
import styled from 'styled-components';

const GlassCard = ({ number, title, selectedAnswer, setSelectedAnswer }) => {
    const [activated, setActivated] = useState(false);
    const onClick = () => setSelectedAnswer(number);
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
        VanillaTilt.init(ref.current, {
            max: 25,
            speed: 400
        });
        }
    }, []);
    console.log(activated);
    return (
        <CustomizeCard className={styles.cardContainer} ref={ref} onClick={onClick} active={number === selectedAnswer}>
          <div className={styles.content}>
            <div className={styles.number}>{number}. </div>
            <div className={styles.title}>{title}</div>
          </div>
        </CustomizeCard>
    )
}
 
export default GlassCard;

const CustomizeCard = styled.div`
  background-color: ${props => (props.active ? '#00ffa0' : 'rgba(255, 255, 255, 0.1)')};
  color: ${props => (props.active && '#f3be1c')}
`;
