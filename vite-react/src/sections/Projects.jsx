import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { myProjects } from '../constants/index.js';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = myProjects[activeIndex];
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yWatermark = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <section id="work" ref={containerRef} className="relative w-full py-32 px-5 md:px-10 bg-surface border-b-2 border-white/20 overflow-hidden">
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute top-0 right-10 text-[20rem] font-display font-bold text-white/[0.02] leading-none pointer-events-none select-none"
      >
        02
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter flex items-center gap-6 mb-16">
          <span className="w-16 h-2 bg-accent" />
          Executables
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column: Project List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            <div className="lg:hidden text-[10px] text-accent font-mono uppercase tracking-widest flex items-center justify-between mb-1 px-1">
              <span>← Swipe</span>
              <span>More →</span>
            </div>
            <div className="flex lg:flex-col gap-2 border-b-2 lg:border-b-0 lg:border-r-2 border-white/10 pb-4 lg:pb-0 pr-0 lg:pr-6 overflow-x-auto snap-x hide-scrollbar w-full">
            {myProjects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-none lg:w-full text-left px-6 py-4 font-mono text-sm uppercase tracking-wider transition-all border-2 snap-start whitespace-nowrap lg:whitespace-normal ${
                    isActive 
                      ? 'bg-accent text-white border-accent shadow-sharp' 
                      : 'bg-transparent text-secondary border-transparent hover:border-white/20 hover:text-white'
                  }`}
                >
                  <span className="mr-3 opacity-50 hidden lg:inline">0{index + 1}.</span>
                  {project.title.split(' - ')[0]}
                </button>
              );
            })}
            </div>
          </div>

          {/* Right Column: Project Viewer */}
          <div className="w-full lg:w-2/3 h-full min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="brutalist-card p-8 md:p-12 h-full flex flex-col justify-between shadow-sharp"
              >
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b-2 border-white/10 pb-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 border-2 border-white bg-background p-2 shrink-0">
                        <img src={activeProject.logo} alt="logo" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-4xl font-display font-bold uppercase mb-2">
                          {activeProject.title.split(' - ')[0]}
                        </h3>
                        <p className="text-accent font-mono text-xs uppercase tracking-widest">
                          {activeProject.title.split(' - ')[1] || 'Web Application'}
                        </p>
                      </div>
                    </div>
                    
                    <a 
                      href={activeProject.href} 
                      target="_blank" 
                      rel="noreferrer"
                      className="brutalist-button text-xs whitespace-nowrap self-start md:self-auto"
                    >
                      Init Sequence <ExternalLink size={14} className="ml-2" />
                    </a>
                  </div>

                  <p className="text-lg text-white font-medium leading-relaxed mb-4">
                    {activeProject.desc}
                  </p>
                  <p className="text-secondary font-mono text-sm leading-relaxed mb-8">
                    {activeProject.subdesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-secondary uppercase tracking-widest mb-4">Dependencies</h4>
                  <div className="flex flex-wrap gap-3">
                    {activeProject.tags.map((tag) => (
                      <div key={tag.id} className="border-2 border-white/20 px-3 py-1.5 flex items-center gap-2 bg-background">
                        {tag.path && <img src={tag.path} alt={tag.name} className="w-4 h-4 grayscale" />}
                        <span className="text-xs font-mono font-bold uppercase text-white">{tag.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
