// import React from "react";

// const LoadingScreen = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
//       <div className="flex flex-col items-center gap-6">
//         {/* Glowing animated ring */}
//         <div className="relative w-24 h-24">
//           <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-[#00f6ff] animate-spin" />
//           <div className="absolute inset-2 rounded-full bg-black" />
//           <div className="absolute inset-0 rounded-full blur-md bg-[#00f6ff]/30 animate-pulse" />
//         </div>

//         {/* Floating animated text */}
//         <p className="text-[#00f6ff] font-mono text-xl animate-bounce drop-shadow-[0_0_8px_#00f6ff]">
//           Booting Up Your Experience...
//         </p>

//         {/* Subtle dot loader */}
//         <div className="flex gap-2">
//           <div className="w-3 h-3 bg-[#00f6ff] rounded-full animate-bounce [animation-delay:0s]" />
//           <div className="w-3 h-3 bg-[#00f6ff] rounded-full animate-bounce [animation-delay:0.2s]" />
//           <div className="w-3 h-3 bg-[#00f6ff] rounded-full animate-bounce [animation-delay:0.4s]" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoadingScreen;
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="flex flex-col items-center gap-8">
        {/* Terminal-style loading container */}
        <div className="relative w-96 p-6 bg-gray-900/90 border border-gray-700 rounded-xl shadow-2xl">
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-gray-400 text-sm font-mono ml-4">
              terminal — loading_system
            </p>
          </div>

          {/* Code editor style loading */}
          <div className="font-mono text-sm">
            <div className="flex items-start mb-4">
              <span className="text-blue-400 mr-4">1</span>
              <span className="text-green-400">$</span>
              <span className="text-gray-300 ml-2">npm run init-portfolio</span>
            </div>

            <div className="flex items-start mb-4">
              <span className="text-blue-400 mr-4">2</span>
              <div className="flex-1">
                <span className="text-gray-500">// Loading components...</span>
                <div className="w-full bg-gray-800 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-3/4 animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="flex items-start mb-2">
              <span className="text-blue-400 mr-4">3</span>
              <div className="flex-1">
                <span className="text-amber-300">import</span>
                <span className="text-gray-300"> {"{"} </span>
                <span className="text-emerald-400">Projects</span>
                <span className="text-gray-300">, </span>
                <span className="text-emerald-400">Skills</span>
                <span className="text-gray-300">, </span>
                <span className="text-emerald-400">Experience</span>
                <span className="text-gray-300"> {"}"} </span>
                <span className="text-amber-300">from</span>
                <span className="text-cyan-300"> './portfolio'</span>
                <span className="text-gray-300">;</span>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-blue-400 mr-4">4</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-5 bg-green-500 animate-pulse"></div>
                <span className="text-gray-400 animate-pulse">
                  Compiling TypeScript...
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack icons animation */}
        <div className="flex gap-6">
          {["React", "Node.js", "Python", "AWS", "Docker", "Git"].map(
            (tech, index) => (
              <div
                key={tech}
                className="flex flex-col items-center gap-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 animate-float">
                  <span className="text-gray-300 font-bold text-xs">
                    {tech}
                  </span>
                </div>
              </div>
            )
          )}
        </div>

        {/* Status message */}
        <div className="text-center">
          <p className="text-gray-300 font-mono text-lg mb-2">
            <span className="text-green-400">✓</span> Initializing developer
            environment
          </p>
          <p className="text-gray-400 text-sm">
            Building your portfolio experience with{" "}
            <span className="text-cyan-300">Next.js 14</span> +{" "}
            <span className="text-cyan-300">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
