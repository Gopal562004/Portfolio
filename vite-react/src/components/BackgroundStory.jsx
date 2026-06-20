import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundStory = () => {
  const { scrollYProgress } = useScroll();

  // Opacities for different blocks based on scroll progress
  // Hero (0 - 0.2)
  const block1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0.1]);
  
  // About (0.1 - 0.4)
  const block2Opacity = useTransform(scrollYProgress, [0.1, 0.25, 0.4], [0.1, 1, 0.1]);

  // Projects / Experience (0.3 - 0.8)
  const block3Opacity = useTransform(scrollYProgress, [0.3, 0.6, 0.8], [0.1, 1, 0.1]);

  // Contact (0.7 - 1)
  const block4Opacity = useTransform(scrollYProgress, [0.7, 0.9, 1], [0.1, 1, 1]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex flex-col justify-between p-8 md:p-16 font-mono text-sm md:text-xl lg:text-2xl text-accent/30 select-none overflow-hidden mix-blend-screen">
        
      <motion.div style={{ opacity: block1Opacity }} className="text-left mt-24">
        <p>{">"} [SYS] Establishing secure connection to Gopal.Server...</p>
        <p className="animate-pulse">{">"} [SYS] Bypassing preliminary firewalls... OK.</p>
      </motion.div>

      <motion.div style={{ opacity: block2Opacity }} className="text-right">
        <p>{">"} [SYS] Scanning neural pathways and skill architecture...</p>
        <p className="animate-pulse text-white/30">{">"} [SYS] 22 advanced modules detected. Architect mode engaged.</p>
      </motion.div>

      <motion.div style={{ opacity: block3Opacity }} className="text-left">
        <p>{">"} [SYS] Accessing encrypted project archives...</p>
        <p className="animate-pulse text-white/30">{">"} [SYS] 7 full-stack executions verified. Injecting data to viewport.</p>
      </motion.div>

      <motion.div style={{ opacity: block4Opacity }} className="text-right mb-24">
        <p>{">"} [SYS] Communication protocols unlocked.</p>
        <p className="text-accent animate-pulse font-bold">{">"} [SYS] Awaiting external PING request_</p>
      </motion.div>

    </div>
  );
};

export default BackgroundStory;
