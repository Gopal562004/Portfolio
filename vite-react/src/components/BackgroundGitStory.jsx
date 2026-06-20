import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundGitStory = () => {
  const { scrollYProgress } = useScroll();

  // Draw paths based on scroll percentage
  const pathDraw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const cyanDraw = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);
  const redDraw = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);

  // Reusable Commit Node Component
  const Node = ({ top, left, color, trigger }) => {
    const opacity = useTransform(scrollYProgress, [trigger - 0.05, trigger], [0, 1]);
    const scale = useTransform(scrollYProgress, [trigger - 0.05, trigger], [0, 1]);
    
    return (
      <motion.div 
        className="absolute w-5 h-5 md:w-6 md:h-6 -ml-2.5 -mt-2.5 md:-ml-3 md:-mt-3 rounded-full border-4 border-background z-10"
        style={{ 
          top, 
          left, 
          backgroundColor: color, 
          opacity, 
          scale,
          boxShadow: `0 0 15px ${color}`
        }}
      />
    );
  };

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden mix-blend-screen">
      
      {/* SVG Connecting Lines representing Git Branches */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1000">
        
        {/* Main Production Branch */}
        <motion.path 
          d="M 15 0 L 15 1000" 
          stroke="#ffffff" 
          strokeWidth="3" 
          fill="none" 
          vectorEffect="non-scaling-stroke" 
          style={{ pathLength: pathDraw }} 
        />
        
        {/* Cyan Feature Branch (e.g. Frontend Architecture) */}
        <motion.path 
          d="M 15 150 L 35 200 L 35 500 L 15 550" 
          stroke="#00f6ff" 
          strokeWidth="3" 
          fill="none" 
          vectorEffect="non-scaling-stroke" 
          style={{ pathLength: cyanDraw }} 
        />
        
        {/* Red Feature Branch (e.g. Backend API) */}
        <motion.path 
          d="M 15 600 L 55 650 L 55 850 L 15 900" 
          stroke="#e11d48" 
          strokeWidth="3" 
          fill="none" 
          vectorEffect="non-scaling-stroke" 
          style={{ pathLength: redDraw }} 
        />
      </svg>

      {/* Main branch commits */}
      <Node top="5%" left="15%" color="#ffffff" trigger={0.05} />
      <Node top="15%" left="15%" color="#ffffff" trigger={0.15} />
      <Node top="55%" left="15%" color="#ffffff" trigger={0.55} />
      <Node top="60%" left="15%" color="#ffffff" trigger={0.6} />
      <Node top="90%" left="15%" color="#ffffff" trigger={0.9} />
      <Node top="95%" left="15%" color="#ffffff" trigger={0.95} />

      {/* Cyan feature branch commits */}
      <Node top="30%" left="35%" color="#00f6ff" trigger={0.3} />
      <Node top="45%" left="35%" color="#00f6ff" trigger={0.45} />

      {/* Red feature branch commits */}
      <Node top="75%" left="55%" color="#e11d48" trigger={0.75} />

    </div>
  );
};

export default BackgroundGitStory;
