import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { education, techStack, achievements } from '../constants/index.js';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yWatermark = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <section id="about" className="relative w-full py-32 px-5 md:px-10 bg-background border-b-2 border-white/20 overflow-hidden">
      
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute top-0 right-10 text-[20rem] font-display font-bold text-white/[0.02] leading-none pointer-events-none select-none"
      >
        01
      </motion.div>

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter flex items-center gap-3 md:gap-6">
            <span className="w-8 md:w-16 h-1 md:h-2 bg-accent" />
            <span className="break-all sm:break-normal">System_Specs</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
          
          {/* Main Info */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <motion.div 
              style={{ y: y1 }}
              className="brutalist-card p-10 bg-white text-[#0a0a0a] shadow-sharp"
            >
              <h3 className="text-3xl font-display font-bold mb-4 uppercase">Profile.</h3>
              <p className="text-lg font-mono leading-relaxed font-medium">
                I am a Full-Stack Developer specializing in scalable web applications. My passion lies in solving complex problems through elegant code and creating seamless digital experiences from front to back. I do not just write code; I architect solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="brutalist-card p-8 bg-surface">
                <h3 className="text-xl font-display font-bold mb-6 uppercase text-accent border-b-2 border-white/20 pb-2">Achievements</h3>
                <ul className="space-y-4 font-mono text-sm text-secondary">
                  {achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">►</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="brutalist-card p-8 bg-surface">
                <h3 className="text-xl font-display font-bold mb-6 uppercase text-accent border-b-2 border-white/20 pb-2">Education</h3>
                <div className="flex flex-col gap-6">
                  {education.map((edu) => (
                    <div key={edu.id} className="relative">
                      <h4 className="text-base font-bold text-white uppercase">{edu.degree}</h4>
                      <p className="text-secondary text-xs font-mono mb-2">{edu.school}</p>
                      <div className="flex justify-between items-center text-xs font-mono bg-white text-[#0a0a0a] px-2 py-1 font-bold">
                        <span>{edu.duration}</span>
                        <span>{edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Box */}
          <div className="lg:col-span-4 h-full">
            <div className="brutalist-card p-8 bg-surface h-full flex flex-col shadow-sharp">
              <h3 className="text-2xl font-display font-bold mb-6 uppercase border-b-2 border-white/20 pb-2">Modules</h3>
              <div className="relative flex flex-wrap gap-4 flex-1 content-center justify-center items-center w-full h-full py-8 overflow-visible">
                {techStack.map((tech, index) => {
                  const badgeClasses = [
                    "bg-white text-[#0a0a0a] font-display font-bold px-3 py-1 uppercase shadow-[4px_4px_0px_#0a0a0a]", 
                    "bg-transparent text-white font-mono px-2 py-1 uppercase border border-dashed border-white", 
                    "bg-accent text-white font-display font-black px-4 py-1 uppercase rounded-full border border-accent", 
                    "bg-[#171717] text-accent font-mono px-3 py-1 uppercase border-l-4 border-accent shadow-sharp", 
                    "bg-transparent text-white font-display font-black uppercase italic underline decoration-accent decoration-2 underline-offset-4",
                    "bg-white/10 text-white font-mono px-3 py-2 uppercase border border-white/30 backdrop-blur-md shadow-sharp",
                    "bg-[#e11d48] text-white font-display font-bold px-4 py-1 uppercase shadow-[4px_4px_0px_#ffffff]",
                    "bg-transparent text-accent font-mono px-2 py-1 uppercase border-y-2 border-accent"
                  ];
                  
                  // Extreme chaos constraints
                  const sizes = ["text-[10px]", "text-xs", "text-sm", "text-lg", "text-xl", "text-2xl"];
                  const rotations = ["rotate-6", "-rotate-12", "rotate-12", "-rotate-6", "rotate-3", "-rotate-3", "rotate-0", "-rotate-[15deg]"];
                  const yOffsets = ["translate-y-2", "-translate-y-6", "translate-y-8", "-translate-y-4", "translate-y-5", "-translate-y-8", "translate-y-0"];
                  const xOffsets = ["translate-x-2", "-translate-x-5", "translate-x-6", "-translate-x-4", "translate-x-8", "-translate-x-2", "translate-x-0"];
                  
                  const cls = badgeClasses[index % badgeClasses.length];
                  const size = sizes[index % sizes.length];
                  const rot = rotations[index % rotations.length];
                  const dy = yOffsets[index % yOffsets.length];
                  const dx = xOffsets[index % xOffsets.length];

                  return (
                    <motion.div 
                      key={index}
                      drag
                      dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
                      whileDrag={{ scale: 1.5, zIndex: 100, rotate: 0 }}
                      whileHover={{ scale: 1.3, rotate: 0, zIndex: 50 }}
                      className={`${cls} ${size} ${rot} ${dy} ${dx} cursor-grab active:cursor-grabbing relative inline-block transition-colors duration-200`}
                    >
                      {tech.name}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
