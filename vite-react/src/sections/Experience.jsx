import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { workExperiences } from '../constants/index.js';

const Experience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yWatermark = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const scaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full py-32 px-5 md:px-10 bg-background border-b-2 border-white/20 overflow-hidden">
      
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute top-0 right-10 text-[20rem] font-display font-bold text-white/[0.02] leading-none pointer-events-none select-none"
      >
        03
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter flex items-center gap-6 mb-20">
          <span className="w-16 h-2 bg-accent" />
          Timeline
        </h2>

        <div className="relative border-l-2 border-white/20 ml-4 md:ml-0 md:border-l-0">
          {/* Base background line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2" />
          
          {/* Animated red fill line */}
          <motion.div 
            style={{ scaleY, transformOrigin: 'top' }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent -translate-x-1/2" 
          />

          <div className="flex flex-col gap-12">
            {workExperiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center justify-between md:justify-normal w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-accent border-2 border-background transform md:-translate-x-1/2 z-10 shadow-sharp-white" />

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                    <div className="brutalist-card p-6 bg-surface shadow-sharp hover:-translate-y-1 transition-transform cursor-default">
                      <div className={`flex flex-col gap-1 mb-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <span className="text-xs font-mono font-bold uppercase text-accent tracking-widest bg-white/5 px-2 py-1">
                          {exp.duration}
                        </span>
                        <h3 className="text-2xl font-display font-bold uppercase mt-2">{exp.pos}</h3>
                        <span className="text-secondary font-mono text-sm uppercase tracking-wide">{exp.name}</span>
                      </div>
                      
                      <p className="text-secondary text-sm font-mono leading-relaxed">
                        {exp.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
