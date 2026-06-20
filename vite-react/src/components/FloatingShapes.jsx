import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const FloatingShapes = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Shape 1: Hollow Square */}
      <motion.div 
        style={{ x: useTransform(springX, [-500, 500], [-30, 30]), y: useTransform(springY, [-500, 500], [-30, 30]) }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[10%] w-32 h-32 border-2 border-white/5"
      />
      
      {/* Shape 2: Cross */}
      <motion.div 
        style={{ x: useTransform(springX, [-500, 500], [50, -50]), y: useTransform(springY, [-500, 500], [50, -50]) }}
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-[60%] right-[15%] text-8xl font-mono text-accent/10 leading-none"
      >
        +
      </motion.div>

      {/* Shape 3: Slash */}
      <motion.div 
        style={{ x: useTransform(springX, [-500, 500], [-80, 80]), y: useTransform(springY, [-500, 500], [20, -20]) }}
        className="absolute bottom-[10%] left-[30%] text-[15rem] font-display font-black text-white/[0.02] leading-none"
      >
        /
      </motion.div>

      {/* Shape 4: Solid Square */}
      <motion.div 
        style={{ x: useTransform(springX, [-500, 500], [20, -20]), y: useTransform(springY, [-500, 500], [-60, 60]) }}
        animate={{ rotate: 180, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] right-[30%] w-12 h-12 bg-white/5"
      />
    </div>
  );
};

export default FloatingShapes;
