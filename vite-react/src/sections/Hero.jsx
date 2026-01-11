// // // // import React, { Suspense, useState } from "react";
// // // // import { Canvas } from "@react-three/fiber";
// // // // import { OrbitControls } from "@react-three/drei";
// // // // import { useSpring, animated } from "react-spring";
// // // // import HackerRoom from "../components/HackerRoom";
// // // // import CanvasLoader from "../components/CanvasLoader";
// // // // import Target from "../components/Target";
// // // // import { Atom } from "../components/AtomEffect";
// // // // import RobotModel from "../components/RobotModel";
// // // // import ReactLogo from "../components/ReactLogo";
// // // // import Rings from "../components/Rings";
// // // // // import { EffectComposer, Bloom } from "@react-three/postprocessing";

// // // // const Hero = () => {
// // // //   const [isHovered, setIsHovered] = useState(false); // ✅ define this at the top

// // // //   const { position } = useSpring({
// // // //     from: { position: [0, 2, 5] },
// // // //     to: { position: [0, 2, 8] },
// // // //     config: { duration: 1500 },
// // // //   });

// // // //   return (
// // // //     <section className="min-h-screen w-full flex flex-col relative select-none">
// // // //       <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 z-10">
// // // //         <h1 className="text-2xl sm:text-3xl font-medium text-white text-center">
// // // //           Hello, I'm Gopal <span className="waving-hand">👋</span>
// // // //         </h1>
// // // //         <p className="hero_tag text-gray_gradient">
// // // //           Crafting Unique Digital Experiences
// // // //         </p>
// // // //         <p className="text-lg sm:text-xl text-gray-300 text-center">
// // // //           Focused on building innovative digital solutions with a passion for
// // // //           clean code and design.
// // // //         </p>
// // // //       </div>

// // // //       {/* Canvas container centered and sized */}
// // // //       <div className="w-full flex justify-center items-center">
// // // //         <div
// // // //           className="w-[500px] h-[400px]"
// // // //           onMouseEnter={() => setIsHovered(true)}
// // // //           onMouseLeave={() => setIsHovered(false)}
// // // //         >
// // // //           {/* <EffectComposer>
// // // //             <Bloom
// // // //               luminanceThreshold={0.2}
// // // //               luminanceSmoothing={0.9}
// // // //               intensity={1.5}
// // // //             />
// // // //           </EffectComposer> */}

// // // //           <Canvas
// // // //             className="w-full h-full"
// // // //             camera={{ position: [120, 150, 180], fov: 75 }}
// // // //           >
// // // //             <ambientLight intensity={0.5} />
// // // //             <directionalLight position={[2, 2, 2]} intensity={1} />
// // // //             <Suspense fallback={<CanvasLoader />}>
// // // //               <OrbitControls enableZoom={false} enabled={isHovered} />
// // // //               <HackerRoom />
// // // //               <group>
// // // //                 <Target position={[-35, -65, 100]} scale={20} />
// // // //                 {/* <Atom scale={20} /> */}
// // // //                 <RobotModel />
// // // //                 <ReactLogo scale={10} position={[80, 65, -50]} />
// // // //                 <Rings />
// // // //               </group>
// // // //             </Suspense>
// // // //           </Canvas>
// // // //         </div>
// // // //       </div>
// // // //       <div className="flex justify-center items-center cursor-pointer select-none">
// // // //         <div className="flex items-center gap-3 px-6 py-3 bg-[#1a1a1a] text-[#00f6ff] font-mono text-sm md:text-base rounded-lg border border-[#00f6ff]/30 shadow-lg shadow-[#00f6ff]/10 animate-pulse hover:shadow-[#00f6ff]/50 transition-all duration-300">
// // // //           <svg
// // // //             xmlns="http://www.w3.org/2000/svg"
// // // //             className="w-5 h-5 text-[#00f6ff] animate-spin-slow"
// // // //             viewBox="0 0 20 20"
// // // //             fill="currentColor"
// // // //           >
// // // //             <path
// // // //               fillRule="evenodd"
// // // //               d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-11.293a1 1 0 00-1.414 0L7 9l2.293 2.293a1 1 0 001.414-1.414L9.414 9l1.293-1.293a1 1 0 000-1.414z"
// // // //               clipRule="evenodd"
// // // //             />
// // // //           </svg>
// // // //           Let's Work Together
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Hero;
// // // import React, { Suspense, useState } from "react";
// // // import { Canvas } from "@react-three/fiber";
// // // import { OrbitControls } from "@react-three/drei";
// // // import { useSpring } from "react-spring";
// // // import HackerRoom from "../components/HackerRoom";
// // // import CanvasLoader from "../components/CanvasLoader";
// // // import Target from "../components/Target";
// // // import { Atom } from "../components/AtomEffect";
// // // import RobotModel from "../components/RobotModel";
// // // import ReactLogo from "../components/ReactLogo";
// // // import Rings from "../components/Rings";
// // // // import { EffectComposer, Bloom } from "@react-three/postprocessing";

// // // const Hero = () => {
// // //   const [isHovered, setIsHovered] = useState(false);

// // //   const { position } = useSpring({
// // //     from: { position: [0, 2, 5] },
// // //     to: { position: [0, 2, 8] },
// // //     config: { duration: 1500 },
// // //   });

// // //   return (
// // //     <section className="min-h-screen w-full flex flex-col relative select-none">
// // //       {/* Header Text */}
// // //       <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 z-10">
// // //         <h1 className="text-2xl sm:text-3xl font-medium text-white text-center">
// // //           Hello, I'm Gopal <span className="waving-hand">👋</span>
// // //         </h1>
// // //         <p className="hero_tag text-gray_gradient">
// // //           Crafting Unique Digital Experiences
// // //         </p>
// // //         <p className="text-lg sm:text-xl text-gray-300 text-center">
// // //           Focused on building innovative digital solutions with a passion for
// // //           clean code and design.
// // //         </p>
// // //       </div>

// // //       {/* Canvas Container */}
// // //       <div className="w-full flex justify-center items-center">
// // //         <div
// // //           className="w-[500px] h-[400px]"
// // //           onMouseEnter={() => setIsHovered(true)}
// // //           onMouseLeave={() => setIsHovered(false)}
// // //           onWheel={(e) => e.stopPropagation()}
// // //           onTouchMove={(e) => e.stopPropagation()}
// // //         >
// // //           {/* Optional Bloom Effect */}
// // //           {/* <EffectComposer>
// // //             <Bloom
// // //               luminanceThreshold={0.2}
// // //               luminanceSmoothing={0.9}
// // //               intensity={1.5}
// // //             />
// // //           </EffectComposer> */}

// // //           <Canvas
// // //             className="w-full h-full"
// // //             camera={{ position: [120, 150, 180], fov: 75 }}
            
// // //           >
// // //             <ambientLight intensity={0.5} />
// // //             <directionalLight position={[2, 2, 2]} intensity={1} />
// // //             <Suspense fallback={<CanvasLoader />}>
// // //               {/* <OrbitControls enableZoom={false} enabled={isHovered} /> */}
// // //               <HackerRoom />
// // //               <group>
// // //                 <Target position={[-35, -65, 100]} scale={20} />
// // //                 {/* <Atom scale={20} /> */}
// // //                 <RobotModel />
// // //                 <ReactLogo scale={10} position={[80, 65, -50]} />
// // //                 <Rings />
// // //               </group>
// // //             </Suspense>
// // //           </Canvas>
// // //         </div>
// // //       </div>

// // //       {/* Call To Action */}
// // //       <div className="flex justify-center items-center cursor-pointer select-none mt-6">
// // //         <div className="flex items-center gap-3 px-6 py-3 bg-[#1a1a1a] text-[#00f6ff] font-mono text-sm md:text-base rounded-lg border border-[#00f6ff]/30 shadow-lg shadow-[#00f6ff]/10 animate-pulse hover:shadow-[#00f6ff]/50 transition-all duration-300"
// // //         herf="#contact" onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}
// // //         >
// // //           <svg
// // //             xmlns="http://www.w3.org/2000/svg"
// // //             className="w-5 h-5 text-[#00f6ff] animate-spin-slow"
// // //             viewBox="0 0 20 20"
// // //             fill="currentColor"
// // //           >
// // //             <path
// // //               fillRule="evenodd"
// // //               d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-11.293a1 1 0 00-1.414 0L7 9l2.293 2.293a1 1 0 001.414-1.414L9.414 9l1.293-1.293a1 1 0 000-1.414z"
// // //               clipRule="evenodd"
// // //             />
// // //           </svg>
// // //           Let's Work Together
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;
// // import React, { Suspense, useState, useEffect } from "react";
// // import { Canvas } from "@react-three/fiber";
// // import { OrbitControls } from "@react-three/drei";
// // import HackerRoom from "../components/HackerRoom";
// // import CanvasLoader from "../components/CanvasLoader";
// // import Target from "../components/Target";
// // import RobotModel from "../components/RobotModel";
// // import ReactLogo from "../components/ReactLogo";
// // import Rings from "../components/Rings";

// // const Hero = () => {
// //   const [isHovered, setIsHovered] = useState(false);
// //   const [currentRole, setCurrentRole] = useState(0);
// //   const [fadeText, setFadeText] = useState(true);
// //   const [currentDetail, setCurrentDetail] = useState(0);

// //   const roles = [
// //     "Full-Stack Developer",
// //     "Backend Developer Intern",
// //     "Full Stack Specialist",
// //     "Problem Solver",
// //     "Tech Innovator",
// //   ];

// //   const resumeDetails = [
// //     {
// //       icon: "🎓",
// //       title: "B.Tech Computer Engineering",
// //       subtitle: "St. John College of Engineering • 2022-2026",
// //     },
// //     {
// //       icon: "💼",
// //       title: "Backend Developer Intern",
// //       subtitle: "Perfectrank.in • May 2025 – Aug 2025",
// //     },
// //     {
// //       icon: "⚡",
// //       title: "Strong DSA Skills",
// //       subtitle: "Active Problem Solver",
// //     },
// //     {
// //       icon: "🏆",
// //       title: "Full Stack & AWS Certified",
// //       subtitle: "Tech Ustaad & Infosys Springboard",
// //     },
// //   ];

// //   // Cycle through roles
// //   useEffect(() => {
// //     const roleInterval = setInterval(() => {
// //       setFadeText(false);
// //       setTimeout(() => {
// //         setCurrentRole((prev) => (prev + 1) % roles.length);
// //         setFadeText(true);
// //       }, 300);
// //     }, 3000);

// //     // Cycle through resume details
// //     const detailInterval = setInterval(() => {
// //       setCurrentDetail((prev) => (prev + 1) % resumeDetails.length);
// //     }, 4000);

// //     return () => {
// //       clearInterval(roleInterval);
// //       clearInterval(detailInterval);
// //     };
// //   }, []);

// //   return (
// //     <section className="min-h-screen w-full flex flex-col relative select-none overflow-hidden">
// //       {/* Background Effects - Simplified */}
// //       <div className="absolute inset-0 bg-black"></div>

// //       {/* Subtle pattern */}
// //       <div className="absolute inset-0 opacity-3">
// //         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
// //       </div>

// //       {/* Main content */}
// //       <div className="container mx-auto px-4 sm:px-6 flex-1 flex flex-col items-center justify-center relative z-10 py-8">
// //         {/* Header Section */}
// //         <div className="w-full max-w-5xl mx-auto flex flex-col gap-4 text-center mb-6 sm:mb-8">
// //           {/* Status Badge */}
// //           <div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-800 rounded-full px-4 py-2 w-fit mx-auto mb-2">
// //             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
// //             <span className="text-gray-300 font-medium text-sm">
// //               Open to Opportunities
// //             </span>
// //           </div>

// //           {/* Main Title */}
// //           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
// //             Hello, I'm{" "}
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
// //               Gopal Gawas
// //             </span>
// //             <span className="ml-2">👋</span>
// //           </h1>

// //           {/* Rotating Role */}
// //           <div className="h-12 flex items-center justify-center mb-2">
// //             <div className="text-xl sm:text-2xl font-medium text-gray-300">
// //               <span className="text-blue-400 mr-2">{"//"}</span>
// //               <span
// //                 className={`transition-opacity duration-300 inline-block min-w-[200px] ${
// //                   fadeText ? "opacity-100" : "opacity-0"
// //                 }`}
// //               >
// //                 {roles[currentRole]}
// //               </span>
// //               <span className="animate-blink ml-1">|</span>
// //             </div>
// //           </div>

// //           {/* Tagline */}
// //           <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
// //             Computer Engineering student specializing in full-stack development
// //             with expertise in{" "}
// //             <span className="text-cyan-300 font-medium">
// //               Modern Web Technologies
// //             </span>
// //             , <span className="text-blue-400 font-medium">Cloud Services</span>,
// //             and building{" "}
// //             <span className="text-emerald-400 font-medium">
// //               scalable applications
// //             </span>
// //             .
// //           </p>
// //         </div>

        

// //         {/* Canvas Container */}
// //         <div className="w-full max-w-3xl mb-6 sm:mb-8">
// //           <div
// //             className="relative w-full h-[300px] sm:h-[350px] rounded-xl sm:rounded-2xl overflow-hidden border border-gray-800"
// //             onMouseEnter={() => setIsHovered(true)}
// //             onMouseLeave={() => setIsHovered(false)}
// //           >
// //             {/* Canvas overlay info */}
// //             <div className="absolute top-3 left-3 z-10 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-2">
// //               <div className="flex items-center gap-2">
// //                 <div className="flex gap-1">
// //                   <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
// //                   <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
// //                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
// //                 </div>
// //                 <span className="text-gray-300 font-mono text-xs">
// //                   3D Portfolio
// //                 </span>
// //               </div>
// //             </div>

// //             <Canvas
// //               className="w-full h-full"
// //               camera={{ position: [120, 150, 180], fov: 75 }}
// //             >
// //               <ambientLight intensity={0.5} />
// //               <directionalLight position={[2, 2, 2]} intensity={1} />
// //               <Suspense fallback={<CanvasLoader />}>
// //                 <OrbitControls
// //                   enableZoom={false}
// //                   enablePan={false}
// //                   enabled={isHovered}
// //                   maxPolarAngle={Math.PI / 2}
// //                   minPolarAngle={Math.PI / 3}
// //                 />
// //                 <HackerRoom />
// //                 <group>
// //                   <Target position={[-35, -65, 100]} scale={20} />
// //                   <RobotModel />
// //                   <ReactLogo scale={10} position={[80, 65, -50]} />
// //                   <Rings />
// //                 </group>
// //                 <pointLight
// //                   position={[10, 10, 10]}
// //                   intensity={0.5}
// //                   color="#3b82f6"
// //                 />
// //                 <pointLight
// //                   position={[-10, 5, -10]}
// //                   intensity={0.3}
// //                   color="#10b981"
// //                 />
// //               </Suspense>
// //             </Canvas>

// //             {/* Canvas tech tags */}
// //             <div className="absolute bottom-3 right-3 flex flex-wrap gap-1">
// //               {["Full Stack", "React", "Three.js", "Node.js"].map((tech) => (
// //                 <span
// //                   key={tech}
// //                   className="px-2 py-1 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full text-xs font-mono text-gray-300"
// //                 >
// //                   {tech}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* CTA Buttons */}
// //         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
// //           <button
// //             className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
// //             onClick={() => {
// //               const contactSection = document.getElementById("contact");
// //               if (contactSection) {
// //                 contactSection.scrollIntoView({ behavior: "smooth" });
// //               }
// //             }}
// //           >
// //             <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //             <span className="relative flex items-center justify-center gap-2">
// //               <svg
// //                 className="w-4 h-4 animate-spin-slow"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 stroke="currentColor"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M13 10V3L4 14h7v7l9-11h-7z"
// //                 />
// //               </svg>
// //               Let's Build Together
// //             </span>
// //           </button>

// //           <a
// //             href="https://drive.google.com/file/d/1GZ62w6e7ID0wiSinqsxaJ1sNwlB3rlXX/view?usp=sharing"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="px-6 py-3 border-2 border-gray-700 text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-105 text-center"
// //           >
// //             View Resume
// //           </a>
// //         </div>

// //         {/* Quick Contact Links */}
// //         {/* <div className="flex flex-wrap justify-center gap-4 mt-6">
// //           <a
// //             href="https://linkedin.com/in/gopal-gawas-42la74275/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-300 hover:text-blue-300 hover:border-blue-500/50 transition-all text-sm"
// //           >
// //             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
// //             </svg>
// //             LinkedIn
// //           </a>

// //           <a
// //             href="https://github.com/Gopal562004"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-300 hover:text-white hover:border-gray-700 transition-all text-sm"
// //           >
// //             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
// //             </svg>
// //             GitHub
// //           </a>

// //           <a
// //             href="mailto:gopalgawas2004@gmail.com"
// //             className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-300 hover:text-emerald-300 hover:border-emerald-500/50 transition-all text-sm"
// //           >
// //             <svg
// //               className="w-4 h-4"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
// //               />
// //             </svg>
// //             Email Me
// //           </a>
// //         </div> */}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// import React, { Suspense, useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import HackerRoom from "../components/HackerRoom";
// import CanvasLoader from "../components/CanvasLoader";
// import Target from "../components/Target";
// import RobotModel from "../components/RobotModel";
// import ReactLogo from "../components/ReactLogo";
// import Rings from "../components/Rings";

// const Hero = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [currentRole, setCurrentRole] = useState(0);
//   const [fadeText, setFadeText] = useState(true);
//   const [currentDetail, setCurrentDetail] = useState(0);

//   const roles = [
//     "Full-Stack Developer",
//     "Backend Developer Intern",
//     "Full Stack Specialist",
//     "Problem Solver",
//     "Tech Innovator",
//   ];

//   const resumeDetails = [
//     {
//       icon: "🎓",
//       title: "B.Tech Computer Engineering",
//       subtitle: "St. John College of Engineering • 2022-2026",
//     },
//     {
//       icon: "💼",
//       title: "Backend Developer Intern",
//       subtitle: "Perfectrank.in • May 2025 – Aug 2025",
//     },
//     {
//       icon: "⚡",
//       title: "Strong DSA Skills",
//       subtitle: "Active Problem Solver",
//     },
//     {
//       icon: "🏆",
//       title: "Full Stack & AWS Certified",
//       subtitle: "Tech Ustaad & Infosys Springboard",
//     },
//   ];

//   // Cycle through roles
//   useEffect(() => {
//     const roleInterval = setInterval(() => {
//       setFadeText(false);
//       setTimeout(() => {
//         setCurrentRole((prev) => (prev + 1) % roles.length);
//         setFadeText(true);
//       }, 300);
//     }, 3000);

//     // Cycle through resume details
//     const detailInterval = setInterval(() => {
//       setCurrentDetail((prev) => (prev + 1) % resumeDetails.length);
//     }, 4000);

//     return () => {
//       clearInterval(roleInterval);
//       clearInterval(detailInterval);
//     };
//   }, []);

//   return (
//     <section className="min-h-screen w-full flex flex-col relative select-none overflow-hidden">
//       {/* Background Effects - Simplified */}
//       <div className="absolute inset-0 bg-black"></div>

//       {/* Subtle pattern */}
//       <div className="absolute inset-0 opacity-3">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
//       </div>

//       {/* Main content */}
//       <div className="container mx-auto px-4 sm:px-6 flex-1 flex flex-col items-center justify-center relative z-10 py-8">
//         {/* Header Section */}
//         <div className="w-full max-w-5xl mx-auto flex flex-col gap-4 text-center mb-6 sm:mb-8">
//           {/* Status Badge */}
//           <div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-800 rounded-full px-4 py-2 w-fit mx-auto mb-2">
//             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//             <span className="text-gray-300 font-medium text-sm">
//               Open to Opportunities
//             </span>
//           </div>

//           {/* Main Title */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
//             Hello, I'm{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
//               Gopal Gawas
//             </span>
//             <span className="ml-2">👋</span>
//           </h1>

//           {/* Rotating Role */}
//           <div className="h-12 flex items-center justify-center mb-2">
//             <div className="text-xl sm:text-2xl font-medium text-gray-300">
//               <span className="text-blue-400 mr-2">{"//"}</span>
//               <span
//                 className={`transition-opacity duration-300 inline-block min-w-[200px] ${
//                   fadeText ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 {roles[currentRole]}
//               </span>
//               <span className="animate-blink ml-1">|</span>
//             </div>
//           </div>

//           {/* Tagline */}
//           <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
//             Computer Engineering student specializing in full-stack development
//             with expertise in{" "}
//             <span className="text-cyan-300 font-medium">
//               Modern Web Technologies
//             </span>
//             , <span className="text-blue-400 font-medium">Cloud Services</span>,
//             and building{" "}
//             <span className="text-emerald-400 font-medium">
//               scalable applications
//             </span>
//             .
//           </p>
//         </div>

//         {/* Canvas Container */}
//         <div className="w-full max-w-3xl mb-6 sm:mb-8">
//           <div
//             className="relative w-full h-[300px] sm:h-[350px] rounded-xl sm:rounded-2xl overflow-hidden border border-gray-800"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             {/* Canvas overlay info */}
//             <div className="absolute top-3 left-3 z-10 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-2">
//               <div className="flex items-center gap-2">
//                 <div className="flex gap-1">
//                   <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
//                   <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
//                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
//                 </div>
//                 <span className="text-gray-300 font-mono text-xs">
//                   3D Portfolio
//                 </span>
//               </div>
//             </div>

//             <Canvas
//               className="w-full h-full"
//               camera={{ position: [120, 150, 180], fov: 75 }}
//             >
//               <ambientLight intensity={0.5} />
//               <directionalLight position={[2, 2, 2]} intensity={1} />
//               <Suspense fallback={<CanvasLoader />}>
//                 <OrbitControls
//                   enableZoom={false}
//                   enablePan={false}
//                   enabled={isHovered}
//                   maxPolarAngle={Math.PI / 2}
//                   minPolarAngle={Math.PI / 3}
//                 />
//                 <HackerRoom />
//                 <group>
//                   <Target position={[-35, -65, 100]} scale={20} />
//                   <RobotModel />
//                   <ReactLogo scale={10} position={[80, 65, -50]} />
//                   <Rings />
//                 </group>
//                 <pointLight
//                   position={[10, 10, 10]}
//                   intensity={0.5}
//                   color="#3b82f6"
//                 />
//                 <pointLight
//                   position={[-10, 5, -10]}
//                   intensity={0.3}
//                   color="#10b981"
//                 />
//               </Suspense>
//             </Canvas>

//             {/* Canvas tech tags */}
//             <div className="absolute bottom-3 right-3 flex flex-wrap gap-1">
//               {["Full Stack", "React", "Three.js", "Node.js"].map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-2 py-1 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full text-xs font-mono text-gray-300"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA Buttons - No Gradient */}
//         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
//           <button
//             className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-800/20"
//             onClick={() => {
//               const contactSection = document.getElementById("contact");
//               if (contactSection) {
//                 contactSection.scrollIntoView({ behavior: "smooth" });
//               }
//             }}
//           >
//             <span className="flex items-center justify-center gap-2">
//               <svg
//                 className="w-4 h-4 animate-spin-slow"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M13 10V3L4 14h7v7l9-11h-7z"
//                 />
//               </svg>
//               Let's Build Together
//             </span>
//           </button>

//           <a
//             href="https://drive.google.com/file/d/1GZ62w6e7ID0wiSinqsxaJ1sNwlB3rlXX/view?usp=sharing"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-6 py-3 border-2 border-gray-700 text-gray-300 font-semibold rounded-xl hover:border-gray-600 hover:text-white hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 text-center"
//           >
//             View Resume
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import Target from "../components/Target";
import RobotModel from "../components/RobotModel";
import ReactLogo from "../components/ReactLogo";
import Rings from "../components/Rings";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [fadeText, setFadeText] = useState(true);
  const canvasContainerRef = useRef(null);
  const overlayRef = useRef(null);
  const isDragging = useRef(false);
  const startY = useRef(0);

  const roles = [
    "Full-Stack Developer",
    "Backend Developer Intern",
    "Full Stack Specialist",
    "Problem Solver",
    "Tech Innovator",
  ];

  // Cycle through roles
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setFadeText(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setFadeText(true);
      }, 300);
    }, 3000);

    return () => {
      clearInterval(roleInterval);
    };
  }, []);

  // Handle touch events for better scrolling
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (
        canvasContainerRef.current &&
        canvasContainerRef.current.contains(e.target)
      ) {
        startY.current = e.touches[0].clientY;
        isDragging.current = true;
      }
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;

      const currentY = e.touches[0].clientY;
      const deltaY = currentY - startY.current;

      // If vertical movement is significant, it's likely a scroll attempt
      if (Math.abs(deltaY) > 5) {
        // Allow the scroll to happen by letting the event bubble
        e.stopImmediatePropagation();
        isDragging.current = false;
      }
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative select-none overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 flex-1 flex flex-col items-center justify-center relative z-10 py-8">
        {/* Header Section */}
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-4 text-center mb-6 sm:mb-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-800 rounded-full px-4 py-2 w-fit mx-auto mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-medium text-sm">
              Open to Opportunities
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Hello, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Gopal Gawas
            </span>
            <span className="ml-2">👋</span>
          </h1>

          {/* Rotating Role */}
          <div className="h-12 flex items-center justify-center mb-2">
            <div className="text-xl sm:text-2xl font-medium text-gray-300">
              <span className="text-blue-400 mr-2">{"//"}</span>
              <span
                className={`transition-opacity duration-300 inline-block min-w-[200px] ${
                  fadeText ? "opacity-100" : "opacity-0"
                }`}
              >
                {roles[currentRole]}
              </span>
              <span className="animate-blink ml-1">|</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Computer Engineering student specializing in full-stack development
            with expertise in{" "}
            <span className="text-cyan-300 font-medium">
              Modern Web Technologies
            </span>
            , <span className="text-blue-400 font-medium">Cloud Services</span>,
            and building{" "}
            <span className="text-emerald-400 font-medium">
              scalable applications
            </span>
            .
          </p>
        </div>

        {/* Canvas Container with improved scroll handling */}
        <div className="w-full max-w-3xl mb-6 sm:mb-8" ref={canvasContainerRef}>
          <div
            className="relative w-full h-[300px] sm:h-[350px] rounded-xl sm:rounded-2xl overflow-hidden border border-gray-800"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Transparent overlay for scroll capture */}
            <div
              ref={overlayRef}
              className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing"
              style={{
                pointerEvents: "auto",
                touchAction: "pan-y",
              }}
              onWheel={(e) => {
                // Allow wheel events to bubble up for scrolling
                e.stopPropagation();
              }}
              onTouchStart={(e) => {
                // Only prevent if single touch (for rotation)
                if (e.touches.length === 1) {
                  e.stopPropagation();
                }
              }}
              onTouchMove={(e) => {
                // For single touch (likely rotation), allow it
                if (e.touches.length === 1) {
                  e.stopPropagation();
                }
                // For multi-touch or significant vertical movement, allow scroll
              }}
              onMouseDown={(e) => {
                // Only capture left mouse button for rotation
                if (e.button === 0) {
                  e.stopPropagation();
                }
              }}
            />

            {/* Canvas overlay info */}
            <div className="absolute top-3 left-3 z-40 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-300 font-mono text-xs">
                  3D Portfolio
                </span>
              </div>
            </div>

            <Canvas
              className="w-full h-full"
              camera={{ position: [120, 150, 180], fov: 75 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                touchAction: "none",
                pointerEvents: "none", // Canvas doesn't capture pointer events directly
              }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 2]} intensity={1} />
              <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  enabled={isHovered}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 3}
                  enableDamping={true}
                  dampingFactor={0.1}
                />
                <HackerRoom />
                <group>
                  <Target position={[-35, -65, 100]} scale={20} />
                  <RobotModel />
                  <ReactLogo scale={10} position={[80, 65, -50]} />
                  <Rings />
                </group>
                <pointLight
                  position={[10, 10, 10]}
                  intensity={0.5}
                  color="#3b82f6"
                />
                <pointLight
                  position={[-10, 5, -10]}
                  intensity={0.3}
                  color="#10b981"
                />
              </Suspense>
            </Canvas>

            {/* Canvas tech tags */}
            <div className="absolute bottom-3 right-3 flex flex-wrap gap-1 z-40">
              {["Full Stack", "React", "Three.js", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full text-xs font-mono text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Hint text */}
          {/* <p className="text-center text-gray-500 text-xs mt-2 font-mono">
            Click & drag to rotate • Scroll anywhere to navigate
          </p> */}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
          <button
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-800/20"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4 animate-spin-slow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Let's Build Together
            </span>
          </button>

          <a
            href="https://drive.google.com/file/d/1GZ62w6e7ID0wiSinqsxaJ1sNwlB3rlXX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-gray-700 text-gray-300 font-semibold rounded-xl hover:border-gray-600 hover:text-white hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 text-center"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
