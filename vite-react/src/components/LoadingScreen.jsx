import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6">
        {/* Glowing animated ring */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-[#00f6ff] animate-spin" />
          <div className="absolute inset-2 rounded-full bg-black" />
          <div className="absolute inset-0 rounded-full blur-md bg-[#00f6ff]/30 animate-pulse" />
        </div>

        {/* Floating animated text */}
        <p className="text-[#00f6ff] font-mono text-xl animate-bounce drop-shadow-[0_0_8px_#00f6ff]">
          Booting Up Your Experience...
        </p>

        {/* Subtle dot loader */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-[#00f6ff] rounded-full animate-bounce [animation-delay:0s]" />
          <div className="w-3 h-3 bg-[#00f6ff] rounded-full animate-bounce [animation-delay:0.2s]" />
          <div className="w-3 h-3 bg-[#00f6ff] rounded-full animate-bounce [animation-delay:0.4s]" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
