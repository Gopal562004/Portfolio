import React from 'react';
import { motion, useTransform } from 'framer-motion';

const CircuitSnake = ({ scrollYProgress, path, color = "#00f6ff", width = 2 }) => {
  // We want the snake to travel from the start (offset 1) to the end (offset 0)
  // But to make it look like a snake, we use a dasharray where the first number is the snake length,
  // and the second number is the gap (which should be longer than the entire path).
  
  // Instead of a moving snake segment, we draw the path entirely based on scroll
  // acting like a physical progress bar that travels with the user.
  const drawProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
      
      {/* Glow Filter for the drawing line */}
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background Track / Circuit Line */}
      <path
        d={path}
        stroke={color}
        strokeWidth={width}
        strokeOpacity={0.15}
        fill="none"
        vectorEffect="non-scaling-stroke"
      />

      {/* The Drawing Progress Bar */}
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={width + 1}
        fill="none"
        vectorEffect="non-scaling-stroke"
        filter="url(#glow)"
        style={{
          pathLength: drawProgress
        }}
      />
    </svg>
  );
};

export default CircuitSnake;
