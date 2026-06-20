import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Scramble up to 100% within the 1-second unmount window of App.jsx
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 60);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center border-[16px] border-[#171717]">
      <div className="flex flex-col items-start w-full max-w-4xl px-8">
        
        {/* Massive Percentage Counter */}
        <h1 className="text-8xl md:text-[14rem] font-display font-black text-white uppercase tracking-tighter leading-none mb-8">
          {progress > 100 ? 100 : progress}%
        </h1>

        {/* Brutalist Progress Bar */}
        <div className="w-full h-8 md:h-12 border-4 border-white/20 p-1 relative overflow-hidden bg-[#171717]">
           <div 
             className="h-full bg-accent transition-all duration-75 ease-out" 
             style={{ width: `${progress > 100 ? 100 : progress}%` }} 
           />
        </div>

        {/* Terminal Text */}
        <div className="mt-8 flex justify-between w-full font-mono text-sm md:text-base uppercase text-white/50 tracking-widest">
           <span>INITIALIZING_SYSTEM_RESOURCES...</span>
           <span className="animate-pulse text-accent">PLEASE_WAIT_</span>
        </div>
        
      </div>
    </div>
  );
};

export default LoadingScreen;
