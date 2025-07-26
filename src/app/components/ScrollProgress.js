'use client';

import { useViewportScroll, motion } from 'framer-motion';
import '../styles/ScrollProgress.css';

export default function ScrollProgress() {
  const { scrollYProgress } = useViewportScroll();

  return (
    <div className="progress-container">
      <motion.div
        className="progress-bar"
        style={{ scaleY: scrollYProgress }}
      />
    </div>
  );
}
