import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundCircuit = () => {
  const { scrollYProgress } = useScroll();

  // The trunk grows down the entire page height
  const trunkHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Branch 1 (Hero -> About transition)
  const branch1Width = useTransform(scrollYProgress, [0.1, 0.2], ["0%", "100%"]);
  const dot1Opacity = useTransform(scrollYProgress, [0.18, 0.2], [0, 1]);

  // Branch 2
  const branch2Width = useTransform(scrollYProgress, [0.3, 0.4], ["0%", "100%"]);
  const dot2Opacity = useTransform(scrollYProgress, [0.38, 0.4], [0, 1]);
  const subBranch2Height = useTransform(scrollYProgress, [0.4, 0.45], ["0%", "100%"]);
  const subDot2Opacity = useTransform(scrollYProgress, [0.44, 0.45], [0, 1]);

  // Branch 3
  const branch3Width = useTransform(scrollYProgress, [0.55, 0.65], ["0%", "100%"]);
  const dot3Opacity = useTransform(scrollYProgress, [0.63, 0.65], [0, 1]);

  // Branch 4
  const branch4Width = useTransform(scrollYProgress, [0.8, 0.9], ["0%", "100%"]);
  const dot4Opacity = useTransform(scrollYProgress, [0.88, 0.9], [0, 1]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50 overflow-hidden mix-blend-screen">
      
      {/* Main Trunk Line (Left side) */}
      <motion.div 
        style={{ height: trunkHeight }} 
        className="absolute top-0 left-[5%] md:left-[10%] w-[2px] bg-accent shadow-[0_0_15px_#e11d48]"
      />

      {/* Branch 1 */}
      <div className="absolute top-[15%] left-[5%] md:left-[10%] w-[40%] md:w-[25%] h-[2px]">
        <motion.div style={{ width: branch1Width }} className="h-full bg-accent shadow-[0_0_10px_#e11d48]" />
        <motion.div style={{ opacity: dot1Opacity }} className="absolute -top-1.5 right-0 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
      </div>

      {/* Branch 2 */}
      <div className="absolute top-[35%] left-[5%] md:left-[10%] w-[70%] md:w-[45%] h-[2px]">
        <motion.div style={{ width: branch2Width }} className="h-full bg-accent shadow-[0_0_10px_#e11d48]" />
        <motion.div style={{ opacity: dot2Opacity }} className="absolute -top-1.5 right-0 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
        
        {/* Downward sub-branch from Branch 2 */}
        <div className="absolute top-0 right-0 w-[2px] h-48 md:h-96">
           <motion.div style={{ height: subBranch2Height }} className="w-full bg-accent shadow-[0_0_10px_#e11d48]" />
           <motion.div style={{ opacity: subDot2Opacity }} className="absolute bottom-0 -left-1.5 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
        </div>
      </div>

      {/* Branch 3 */}
      <div className="absolute top-[65%] left-[5%] md:left-[10%] w-[85%] md:w-[70%] h-[2px]">
        <motion.div style={{ width: branch3Width }} className="h-full bg-accent shadow-[0_0_10px_#e11d48]" />
        <motion.div style={{ opacity: dot3Opacity }} className="absolute -top-1.5 right-0 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
      </div>

      {/* Branch 4 */}
      <div className="absolute top-[85%] left-[5%] md:left-[10%] w-[50%] md:w-[35%] h-[2px]">
        <motion.div style={{ width: branch4Width }} className="h-full bg-accent shadow-[0_0_10px_#e11d48]" />
        <motion.div style={{ opacity: dot4Opacity }} className="absolute -top-1.5 right-0 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
      </div>

    </div>
  );
};

export default BackgroundCircuit;
