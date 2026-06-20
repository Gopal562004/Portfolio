import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const parallaxX = useTransform(springX, [-500, 500], [-40, 40]);
  const parallaxY = useTransform(springY, [-500, 500], [-40, 40]);

  // Grid moves slightly opposite to the mouse
  const gridX = useTransform(springX, [-500, 500], [30, -30]);
  const gridY = useTransform(springY, [-500, 500], [30, -30]);

  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <section id="home" ref={ref} onMouseMove={handleMouseMove} className="relative w-full min-h-[100dvh] flex items-center justify-center px-5 md:px-10 overflow-hidden bg-background border-b-2 border-white/20">
      
      {/* Aggressive Grid Background Parallax */}
      <motion.div style={{ x: gridX, y: gridY }} className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute inset-[-100px] opacity-10"
          style={{
            y: y1,
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Column: Bold Typography */}
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="h-2 w-24 bg-accent origin-left"
          />
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-display font-bold uppercase leading-[0.85] tracking-tighter"
          >
            Gopal <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Gawas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl font-mono text-secondary max-w-md border-l-4 border-accent pl-4 mb-6"
          >
            Full-Stack Developer.
            <br />
            System Architect.
            <br />
            Creative Coder.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a 
              href="https://drive.google.com/file/d/17HvXd4wa6CF2A2pn_CSoU0ozENX2egTd/view" 
              target="_blank" 
              rel="noreferrer"
              className="brutalist-button"
            >
              View Resume
            </a>
          </motion.div>
        </div>

        {/* Right Column: Abstract Geometric Parallax */}
        <motion.div style={{ y: y2 }} className="relative h-[400px] w-full flex items-center justify-center hidden md:flex">
          <motion.div 
            style={{ x: parallaxX, y: parallaxY }} 
            whileHover={{ scale: 1.05 }}
            className="relative w-80 h-80 cursor-crosshair"
          >
            {/* Base Square */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-white/30"
            />
            {/* Inner Red Square */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 border-4 border-accent shadow-sharp"
            />
            {/* Center Fill */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-24 bg-white shadow-sharp-white"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Brutalist Scroll Indicator */}
      <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 text-white font-mono text-xs uppercase tracking-widest mix-blend-difference">
        <span>Scroll</span>
        <div className="w-8 h-1 bg-white" />
      </div>

    </section>
  );
};

export default Hero;