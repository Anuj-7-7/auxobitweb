
'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import '../styles/ScrollConnector.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollConnector({ children }) {
  const wrapperRef = useRef(null);
  const [points, setPoints] = useState('');
  const [coordsList, setCoordsList] = useState([]);
  const [dims, setDims] = useState({ width: 0, height: 0 });

  // 1) Measure and compute coords before paint
  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const { left: wrapLeft, top: wrapTop, width, height } = wrapper.getBoundingClientRect();
    setDims({ width, height });

    const sections = Array.from(wrapper.querySelectorAll('.product-section'));
    const pts = sections.map((sec) => {
      const isRev = sec.classList.contains('reverse');
      const target = sec.querySelector(isRev ? '.product-right' : '.product-left');
      const r = target.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - wrapLeft,
        y: r.top + r.height / 2 - wrapTop,
      };
    });

    // Build SVG path string
    let path = `M ${pts[0].x} ${pts[0].y}`;
    const coords = [pts[0]];
    pts.slice(1).forEach((pt, i) => {
      const prev = pts[i];
      // move horizontally then vertically
      coords.push({ x: pt.x, y: prev.y });
      coords.push({ x: pt.x, y: pt.y });
      path += ` L ${pt.x} ${prev.y} L ${pt.x} ${pt.y}`;
    });

    setCoordsList(coords);
    setPoints(path);
  }, []);

  // 2) Animate draw using manual length
  useLayoutEffect(() => {
    if (!points || !coordsList.length) return;
    const wrapper = wrapperRef.current;
    const line = wrapper.querySelector('.connector-path');
    if (!line) return;

    // Compute total length: sum of absolute horizontal + vertical deltas
    let totalLen = 0;
    for (let i = 1; i < coordsList.length; i++) {
      const { x: x0, y: y0 } = coordsList[i - 1];
      const { x: x1, y: y1 } = coordsList[i];
      totalLen += Math.abs(x1 - x0) + Math.abs(y1 - y0);
    }

    // Kick off GSAP draw
    gsap.set(line, {
      strokeDasharray: totalLen,
      strokeDashoffset: totalLen,
    });

    gsap.to(line, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
  }, [points, coordsList]);

  return (
    <div className="connector-wrapper" ref={wrapperRef}>
      {points && dims.width > 0 && (
        <svg
          className="connector-svg"
          width="100%"
          height="100%"
          viewBox={`0 0 ${dims.width} ${dims.height}`}
          preserveAspectRatio="none"
        >
          <polyline
            className="connector-path"
            points={points}
            fill="none"
            stroke="#0066FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
      {children}
    </div>
  );
}
