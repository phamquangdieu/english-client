'use client';
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef, useState } from "react";
import styles from './styles.module.css';
import GlassCard from './card';
import { Row, Col } from 'antd';

export default function HomeScreen() {
  const [selectedAnswer, setSelectedAnswer] = useState();
  return (
    <div className={styles.glassCard}>
      <div className={styles.container}>
        <Row gutter={[32, 32]}>
            <Col span={12}>
                <GlassCard
                  number="A"
                  title="Việt Nam"
                  setSelectedAnswer={setSelectedAnswer}
                  selectedAnswer={selectedAnswer}
                />
            </Col>
            <Col span={12}>
                <GlassCard
                  number="B"
                  title="Việt Nam"
                  setSelectedAnswer={setSelectedAnswer}
                  selectedAnswer={selectedAnswer}
                />
            </Col>
            <Col span={12}>
                <GlassCard
                  number="C"
                  title="Việt Nam"
                  setSelectedAnswer={setSelectedAnswer}
                  selectedAnswer={selectedAnswer}
                />
            </Col>
            <Col span={12}>
                <GlassCard
                  number="D"
                  title="Việt Nam"
                  setSelectedAnswer={setSelectedAnswer}
                  selectedAnswer={selectedAnswer}
                />
            </Col>
        </Row>
      </div>
    </div>
  );
}
