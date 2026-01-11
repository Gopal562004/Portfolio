// // import React from "react";
// // import { Html, useProgress } from "@react-three/drei";

// // const CanvasLoader = () => {
// //   const { progress } = useProgress();

// //   return (
// //     <Html
// //       as="div"
// //       center
// //       style={{
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         flexDirection: "column",
// //       }}
// //     >
// //       <span className="canvas-loader" />
// //       <p
// //         style={{
// //           fontSize: 14,
// //           color: "#F1F1F1",
// //           fontWeight: 800,
// //           marginTop: 40,
// //         }}
// //       >
// //         {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
// //       </p>
// //     </Html>
// //   );
// // };

// // export default CanvasLoader;
// import React from "react";
// import { Html, useProgress } from "@react-three/drei";

// const CanvasLoader = () => {
//   const { progress } = useProgress();

//   return (
//     <Html
//       as="div"
//       center
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       {/* Modern loader design */}
//       <div className="relative w-24 h-24">
//         {/* Outer static ring */}
//         <div className="absolute inset-0 rounded-full border-4 border-gray-800"></div>

//         {/* Animated gradient ring */}
//         <div
//           className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-cyan-400 animate-spin"
//           style={{
//             clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
//           }}
//         ></div>

//         {/* Progress ring */}
//         <div
//           className="absolute inset-0 rounded-full border-4 border-transparent border-l-gray-600"
//           style={{
//             clipPath: `inset(0 ${100 - progress}% 0 0)`,
//           }}
//         ></div>

//         {/* Center dot */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
//       </div>

//       {/* Progress text with better styling */}
//       <div className="mt-8 text-center">
//         <p className="text-gray-300 font-mono text-sm mb-2">
//           Loading 3D Environment
//         </p>
//         <div className="flex items-center justify-center gap-3">
//           <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
//             <div
//               className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//           <span className="text-blue-400 font-mono text-sm font-medium min-w-[40px]">
//             {progress !== 0 ? `${progress.toFixed(0)}%` : "0%"}
//           </span>
//         </div>
//         <p className="text-gray-500 text-xs mt-3 font-mono">
//           Three.js • React Three Fiber • Drei
//         </p>
//       </div>
//     </Html>
//   );
// };

// export default CanvasLoader;

import React, { useEffect } from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  // Prevent scroll events from being captured by the canvas
  useEffect(() => {
    const handleWheel = (e) => {
      e.stopPropagation();
    };

    const handleTouchMove = (e) => {
      e.stopPropagation();
    };

    // Get the canvas element
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.addEventListener("wheel", handleWheel, { passive: false });
      canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("wheel", handleWheel);
        canvas.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, []);

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        pointerEvents: "none", // Prevent blocking scroll
      }}
    >
      {/* Modern loader design */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
        {/* Outer static ring */}
        <div className="absolute inset-0 rounded-full border-[3px] sm:border-4 border-gray-800/80"></div>

        {/* Animated gradient ring */}
        <div
          className="absolute inset-0 rounded-full border-[3px] sm:border-4 border-transparent border-t-blue-500 border-r-cyan-400 animate-spin"
          style={{
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
          }}
        ></div>

        {/* Progress ring */}
        <div
          className="absolute inset-0 rounded-full border-[3px] sm:border-4 border-transparent border-l-gray-600/60"
          style={{
            clipPath: `inset(0 ${100 - progress}% 0 0)`,
          }}
        ></div>

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-blue-500 rounded-full animate-pulse"></div>
      </div>

      {/* Progress text with better styling */}
      <div className="mt-4 sm:mt-6 md:mt-8 text-center px-4">
        <p className="text-gray-300 font-mono text-xs sm:text-sm md:text-sm mb-1 sm:mb-2">
          Loading 3D Environment
        </p>
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <div className="w-24 sm:w-28 md:w-32 h-1.5 sm:h-2 bg-gray-800/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-blue-400 font-mono text-xs sm:text-sm font-medium min-w-[35px] sm:min-w-[40px]">
            {progress !== 0 ? `${progress.toFixed(0)}%` : "0%"}
          </span>
        </div>
        <p className="text-gray-500/80 text-[10px] sm:text-xs mt-2 sm:mt-3 font-mono">
          Three.js • React Three Fiber • Drei
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
