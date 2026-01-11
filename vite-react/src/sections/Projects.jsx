// // // // import { Suspense, useState } from "react";
// // // // import { Canvas } from "@react-three/fiber";
// // // // import { Center, OrbitControls } from "@react-three/drei";
// // // // import { FaArrowRight } from "react-icons/fa";
// // // // import { FaArrowLeft } from "react-icons/fa";
// // // // import { myProjects } from "../constants/index.js";
// // // // // import CanvasLoader from "../components/Loading.jsx";
// // // // import DemoComputer from "../components/DemoComputer.jsx";

// // // // const projectCount = myProjects.length;

// // // // const Projects = () => {
// // // //   const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

// // // //   const handleNavigation = (direction) => {
// // // //     setSelectedProjectIndex((prevIndex) => {
// // // //       if (direction === "previous") {
// // // //         return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
// // // //       } else {
// // // //         return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
// // // //       }
// // // //     });
// // // //   };

// // // //   const currentProject = myProjects[selectedProjectIndex];

// // // //   return (
// // // //     <section className="c-space my-20 select-none" id="work">
// // // //       <p className="head-text">My Selected Work</p>

// // // //       <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
// // // //         {/* Left Panel */}
// // // //         <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
// // // //           <div className="absolute top-0 right-0">
// // // //             <img
// // // //               src={currentProject.spotlight}
// // // //               alt="spotlight"
// // // //               draggable={false}
// // // //               className="w-full h-32 object-cover rounded-xl "
// // // //             />
// // // //           </div>

// // // //           <div
// // // //             className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
// // // //             style={currentProject.logoStyle}
// // // //           >
// // // //             <img
// // // //               className="w-10 h-10 shadow-sm rounded-md"
// // // //               src={currentProject.logo}
// // // //               draggable={false}
// // // //               alt="logo"
              
// // // //             />
// // // //           </div>

// // // //           <div className="flex flex-col gap-5 text-white-600 my-5 transition-opacity duration-500 ease-in opacity-100">
// // // //             <p className="text-white text-2xl font-semibold">
// // // //               {currentProject.title}
// // // //             </p>
// // // //             <p>{currentProject.desc}</p>
// // // //             <p>{currentProject.subdesc}</p>
// // // //           </div>

// // // //           <div className="flex items-center justify-between flex-wrap gap-5">
// // // //             <div className="flex items-center gap-3">
// // // //               {currentProject.tags.map((tag, index) => (
// // // //                 <div key={index} className="tech-logo">
// // // //                   <img
// // // //                     src={tag.path}
// // // //                     alt={tag.name}
// // // //                     draggable={false}
// // // //                     className="rounded-md"
// // // //                   />
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //             <a
// // // //               className="flex items-center gap-2 cursor-pointer text-white-600"
// // // //               href={currentProject.href}
// // // //               target="_blank"
// // // //               rel="noreferrer"
// // // //             >
// // // //               <p>Check Live Site</p>
// // // //               <img
// // // //                 src="../../public/images/logo/arrow-up.png"
// // // //                 alt="arrow"
// // // //                 draggable={false}
// // // //                 className="w-3 h-3"
// // // //               />
// // // //             </a>
// // // //           </div>

// // // //           <div className="flex justify-between items-center mt-7">
// // // //             <button
// // // //               className="arrow-btn"
// // // //               onClick={() => handleNavigation("previous")}
// // // //             >
// // // //               <FaArrowLeft className="text-white" />
// // // //             </button>

// // // //             <button
// // // //               className="arrow-btn"
// // // //               onClick={() => handleNavigation("next")}
// // // //             >
// // // //               <FaArrowRight className="text-white" />
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Right Panel */}
// // // //         <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
// // // //           <Canvas
// // // //             shadows
// // // //             camera={{ position: [0, 2, 20], fov: 45 }} // Center front view
// // // //             gl={{ preserveDrawingBuffer: true }}
// // // //           >
// // // //             {/* Lights */}
// // // //             <ambientLight intensity={0.6} />
// // // //             <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

// // // //             {/* 3D Model */}
// // // //             <Suspense fallback={null}>
// // // //               <Center>
// // // //                 <group
// // // //                   scale={3}
// // // //                   position={[1, -1, 0]}
// // // //                   rotation={[-1.4, -0.05, -0.3]}
// // // //                 >
// // // //                   <DemoComputer videoSrc={currentProject.texture} />
// // // //                 </group>
// // // //               </Center>
// // // //             </Suspense>

// // // //             {/* Lock vertical rotation */}
// // // //             {/* <OrbitControls
// // // //               enableZoom={false}
// // // //               enablePan={false}
// // // //               rotateSpeed={0.8}
// // // //               minPolarAngle={Math.PI / 2}
// // // //               maxPolarAngle={Math.PI / 2}
// // // //             /> */}
// // // //           </Canvas>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };
// // // // export default Projects;


// // // import { Suspense, useState } from "react";
// // // import { Canvas } from "@react-three/fiber";
// // // import { Center, OrbitControls } from "@react-three/drei";
// // // import { myProjects } from "../constants/index.js";
// // // import DemoComputer from "../components/DemoComputer.jsx";

// // // const Projects = () => {
// // //   const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
// // //   const projectCount = myProjects.length;

// // //   const handleNavigation = (direction) => {
// // //     setSelectedProjectIndex((prevIndex) => {
// // //       if (direction === "previous") {
// // //         return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
// // //       } else {
// // //         return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
// // //       }
// // //     });
// // //   };

// // //   const currentProject = myProjects[selectedProjectIndex];

// // //   return (
// // //     <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="work">
// // //       {/* Section Header */}
// // //       <div className="text-center mb-12">
// // //         <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
// // //           Featured{" "}
// // //           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
// // //             Projects
// // //           </span>
// // //         </h2>
// // //         <p className="text-gray-400 max-w-2xl mx-auto">
// // //           A showcase of my recent work and technical implementations
// // //         </p>
// // //       </div>

// // //       {/* Main Project Container */}
// // //       <div className="grid lg:grid-cols-2 gap-8">
// // //         {/* Project Info Card */}
// // //         <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8">
// // //           {/* Project Header */}
// // //           <div className="flex items-start gap-4 mb-6">
// // //             <div className="p-3 bg-gray-800/50 border border-gray-700 rounded-xl">
// // //               <img
// // //                 className="w-10 h-10"
// // //                 src={currentProject.logo}
// // //                 draggable={false}
// // //                 alt={`${currentProject.title} logo`}
// // //               />
// // //             </div>
// // //             <div>
// // //               <h3 className="text-2xl font-bold text-white mb-2">
// // //                 {currentProject.title}
// // //               </h3>
// // //               <div className="flex items-center gap-2">
// // //                 <div className="flex gap-1">
// // //                   {Array.from({ length: 4 }).map((_, i) => (
// // //                     <div
// // //                       key={i}
// // //                       className={`w-2 h-2 rounded-full ${
// // //                         selectedProjectIndex === i
// // //                           ? "bg-blue-500"
// // //                           : "bg-gray-700"
// // //                       }`}
// // //                     ></div>
// // //                   ))}
// // //                 </div>
// // //                 <span className="text-gray-400 text-sm">
// // //                   {selectedProjectIndex + 1} / {projectCount}
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Project Description */}
// // //           <div className="mb-8">
// // //             <p className="text-gray-300 leading-relaxed mb-4">
// // //               {currentProject.desc}
// // //             </p>
// // //             {currentProject.subdesc && (
// // //               <p className="text-gray-400 text-sm leading-relaxed">
// // //                 {currentProject.subdesc}
// // //               </p>
// // //             )}
// // //           </div>

// // //           {/* Tech Stack */}
// // //           <div className="mb-8">
// // //             <h4 className="text-lg font-semibold text-white mb-4">
// // //               Tech Stack
// // //             </h4>
// // //             <div className="flex flex-wrap gap-3">
// // //               {currentProject.tags.map((tag, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg"
// // //                 >
// // //                   <img
// // //                     src={tag.path}
// // //                     alt={tag.name}
// // //                     draggable={false}
// // //                     className="w-5 h-5"
// // //                   />
// // //                   <span className="text-gray-300 text-sm">{tag.name}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Navigation & Action Buttons */}
// // //           <div className="space-y-6">
// // //             {/* Live Site Button */}
// // //             <a
// // //               href={currentProject.href}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="block w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] text-center"
// // //             >
// // //               <div className="flex items-center justify-center gap-2">
// // //                 <span>View Live Project</span>
// // //                 <svg
// // //                   className="w-4 h-4"
// // //                   fill="none"
// // //                   stroke="currentColor"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
// // //                   />
// // //                 </svg>
// // //               </div>
// // //             </a>

// // //             {/* Navigation Buttons */}
// // //             <div className="flex items-center justify-between">
// // //               <button
// // //                 onClick={() => handleNavigation("previous")}
// // //                 className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 rounded-lg transition-colors"
// // //               >
// // //                 <svg
// // //                   className="w-4 h-4"
// // //                   fill="none"
// // //                   stroke="currentColor"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M15 19l-7-7 7-7"
// // //                   />
// // //                 </svg>
// // //                 Previous
// // //               </button>

// // //               <div className="text-gray-400 text-sm">
// // //                 {selectedProjectIndex + 1} of {projectCount}
// // //               </div>

// // //               <button
// // //                 onClick={() => handleNavigation("next")}
// // //                 className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 rounded-lg transition-colors"
// // //               >
// // //                 Next
// // //                 <svg
// // //                   className="w-4 h-4"
// // //                   fill="none"
// // //                   stroke="currentColor"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M9 5l7 7-7 7"
// // //                   />
// // //                 </svg>
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* 3D Preview */}
// // //         <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
// // //           {/* Preview Header */}
// // //           <div className="px-6 py-4 border-b border-gray-800">
// // //             <div className="flex items-center gap-2">
// // //               <div className="flex gap-1">
// // //                 <div className="w-3 h-3 bg-red-500 rounded-full"></div>
// // //                 <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
// // //                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
// // //               </div>
// // //               <span className="text-gray-300 font-mono text-sm">
// // //                 Preview: {currentProject.title}
// // //               </span>
// // //             </div>
// // //           </div>

// // //           {/* 3D Canvas */}
// // //           <div className="h-[400px]">
// // //             <Canvas
// // //               shadows
// // //               camera={{ position: [0, 2, 20], fov: 45 }}
// // //               gl={{ preserveDrawingBuffer: true }}
// // //             >
// // //               {/* Lighting */}
// // //               <ambientLight intensity={0.6} />
// // //               <directionalLight
// // //                 position={[10, 10, 5]}
// // //                 intensity={1}
// // //                 castShadow
// // //               />

// // //               {/* 3D Model */}
// // //               <Suspense fallback={null}>
// // //                 <Center>
// // //                   <group
// // //                     scale={3}
// // //                     position={[1, -1, 0]}
// // //                     rotation={[-1.4, -0.05, -0.3]}
// // //                   >
// // //                     <DemoComputer videoSrc={currentProject.texture} />
// // //                   </group>
// // //                 </Center>
// // //               </Suspense>

// // //               {/* Optional Controls - Commented out */}
// // //               {/* <OrbitControls
// // //                 enableZoom={false}
// // //                 enablePan={false}
// // //                 rotateSpeed={0.8}
// // //                 minPolarAngle={Math.PI / 2}
// // //                 maxPolarAngle={Math.PI / 2}
// // //               /> */}
// // //             </Canvas>
// // //           </div>

// // //           {/* Preview Footer */}
// // //           <div className="px-6 py-4 border-t border-gray-800">
// // //             <div className="flex items-center justify-between">
// // //               <div className="text-gray-400 text-sm">
// // //                 Interactive 3D Preview
// // //               </div>
// // //               <div className="flex gap-2">
// // //                 <div className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">
// // //                   3D
// // //                 </div>
// // //                 <div className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
// // //                   Real-time
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* All Projects Navigation */}
// // //       <div className="mt-12 pt-8 border-t border-gray-800">
// // //         <div className="flex flex-wrap justify-center gap-4">
// // //           {myProjects.map((project, index) => (
// // //             <button
// // //               key={project.id}
// // //               onClick={() => setSelectedProjectIndex(index)}
// // //               className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
// // //                 selectedProjectIndex === index
// // //                   ? "bg-gray-800 border-gray-600 text-white"
// // //                   : "bg-gray-900/50 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300"
// // //               }`}
// // //             >
// // //               {project.title}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Projects;

// // import { Suspense, useState } from "react";
// // import { Canvas } from "@react-three/fiber";
// // import { Center } from "@react-three/drei";
// // import { myProjects } from "../constants/index.js";
// // import DemoComputer from "../components/DemoComputer.jsx";
// // import { FiExternalLink, FiCode } from "react-icons/fi";

// // const Projects = () => {
// //   const [selectedIndex, setSelectedIndex] = useState(0);
// //   const current = myProjects[selectedIndex];

// //   const navigate = (dir) => {
// //     setSelectedIndex((prev) =>
// //       dir === "prev"
// //         ? prev === 0
// //           ? myProjects.length - 1
// //           : prev - 1
// //         : prev === myProjects.length - 1
// //         ? 0
// //         : prev + 1
// //     );
// //   };

// //   return (
// //     <section className="py-12 px-4 max-w-6xl mx-auto" id="work">
// //       {/* Minimal Header */}
// //       <div className="text-center mb-10">
// //         <h2 className="text-2xl font-semibold text-white mb-2">Projects</h2>
// //         <p className="text-gray-500 text-sm">Interactive showcase</p>
// //       </div>

// //       <div className="grid lg:grid-cols-2 gap-6">
// //         {/* Project Card - Compact */}
// //         <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
// //           {/* Compact Header */}
// //           <div className="flex items-center justify-between mb-6">
// //             <div className="flex items-center gap-3">
// //               <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
// //                 <img src={current.logo} className="w-6 h-6" alt="" />
// //               </div>
// //               <div>
// //                 <h3 className="text-lg font-medium text-white">
// //                   {current.title}
// //                 </h3>
// //                 <div className="flex items-center gap-2 text-sm">
// //                   <span className="text-gray-400">
// //                     {selectedIndex + 1}/{myProjects.length}
// //                   </span>
// //                   <div className="flex gap-1">
// //                     {myProjects.map((_, i) => (
// //                       <div
// //                         key={i}
// //                         className={`w-1 h-1 rounded-full ${
// //                           i === selectedIndex ? "bg-blue-500" : "bg-gray-700"
// //                         }`}
// //                       />
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* External Link - Subtle */}
// //             <a
// //               href={current.href}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
// //               title="View live project"
// //             >
// //               <FiExternalLink size={18} />
// //             </a>
// //           </div>

// //           {/* Description - Concise */}
// //           <div className="mb-6">
// //             <p className="text-gray-300 text-sm leading-relaxed">
// //               {current.desc}
// //             </p>
// //             {current.subdesc && (
// //               <p className="text-gray-500 text-xs mt-2">{current.subdesc}</p>
// //             )}
// //           </div>

// //           {/* Compact Tech Stack */}
// //           <div className="mb-8">
// //             <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-3">
// //               <FiCode />
// //               <span>Technologies</span>
// //             </div>
// //             <div className="flex flex-wrap gap-2">
// //               {current.tags.slice(0, 4).map((tag, i) => (
// //                 <div
// //                   key={i}
// //                   className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-lg"
// //                 >
// //                   <img src={tag.path} className="w-3.5 h-3.5" alt={tag.name} />
// //                   <span className="text-gray-300 text-xs">{tag.name}</span>
// //                 </div>
// //               ))}
// //               {current.tags.length > 4 && (
// //                 <div className="px-2.5 py-1.5 bg-gray-800/30 border border-gray-700/30 rounded-lg">
// //                   <span className="text-gray-400 text-xs">
// //                     +{current.tags.length - 4}
// //                   </span>
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* Navigation Dots Only */}
// //           <div className="flex items-center justify-center pt-4 border-t border-gray-800/50">
// //             <div className="flex gap-3">
// //               {myProjects.map((_, i) => (
// //                 <button
// //                   key={i}
// //                   onClick={() => setSelectedIndex(i)}
// //                   className={`w-8 h-1.5 rounded-full transition-all ${
// //                     i === selectedIndex
// //                       ? "bg-blue-500"
// //                       : "bg-gray-700 hover:bg-gray-600"
// //                   }`}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* 3D Preview - Minimal */}
// //         <div className="bg-gray-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
// //           <div className="relative h-[400px]">
// //             <Canvas
// //               camera={{ position: [0, 2, 18], fov: 45 }}
// //               className="rounded-xl"
// //             >
// //               <ambientLight intensity={0.5} />
// //               <directionalLight position={[10, 10, 5]} intensity={0.8} />

// //               <Suspense fallback={null}>
// //                 <Center>
// //                   <group
// //                     scale={2.8}
// //                     position={[1, -1, 0]}
// //                     rotation={[-1.4, -0.05, -0.3]}
// //                   >
// //                     <DemoComputer videoSrc={current.texture} />
// //                   </group>
// //                 </Center>
// //               </Suspense>
// //             </Canvas>

// //             {/* Subtle Overlay Info */}
// //             <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
// //               <div className="text-xs px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full border border-gray-800/50 text-gray-300">
// //                 3D Preview • Drag to rotate
// //               </div>
// //               <div className="text-xs px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
// //                 Live Demo
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Quick Project Selector - Centered */}
// //       <div className="mt-10 flex flex-wrap justify-center gap-2">
// //         {myProjects.map((project, i) => (
// //           <button
// //             key={project.id}
// //             onClick={() => setSelectedIndex(i)}
// //             className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
// //               i === selectedIndex
// //                 ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
// //                 : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/30 border border-transparent"
// //             }`}
// //           >
// //             {project.title.split(" ")[0]}
// //           </button>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// import { Suspense, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Center } from "@react-three/drei";
// import { myProjects } from "../constants/index.js";
// import DemoComputer from "../components/DemoComputer.jsx";
// import {
//   FiExternalLink,
//   FiCode,
//   FiChevronLeft,
//   FiChevronRight,
// } from "react-icons/fi";

// const Projects = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const current = myProjects[selectedIndex];

//   const navigate = (dir) => {
//     setSelectedIndex((prev) =>
//       dir === "prev"
//         ? prev === 0
//           ? myProjects.length - 1
//           : prev - 1
//         : prev === myProjects.length - 1
//         ? 0
//         : prev + 1
//     );
//   };

//   return (
//     <section
//       className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
//       id="work"
//     >
//       {/* Minimal Header */}
//       <div className="text-center mb-8 sm:mb-10">
//         <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
//           Projects
//         </h2>
//         <p className="text-gray-500 text-xs sm:text-sm">Interactive showcase</p>
//       </div>

//       <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
//         {/* Project Card - Compact */}
//         <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800 order-2 lg:order-1">
//           {/* Compact Header */}
//           <div className="flex items-center justify-between mb-4 sm:mb-6">
//             <div className="flex items-center gap-2 sm:gap-3">
//               <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
//                 <img
//                   src={current.logo}
//                   className="w-4 h-4 sm:w-6 sm:h-6"
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <h3 className="text-base sm:text-lg font-medium text-white">
//                   {current.title}
//                 </h3>
//                 <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
//                   <span className="text-gray-400">
//                     {selectedIndex + 1}/{myProjects.length}
//                   </span>
//                   <div className="flex gap-0.5 sm:gap-1">
//                     {myProjects.map((_, i) => (
//                       <div
//                         key={i}
//                         className={`w-1 h-1 rounded-full ${
//                           i === selectedIndex ? "bg-blue-500" : "bg-gray-700"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* External Link - Subtle */}
//             <a
//               href={current.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-blue-400 transition-colors p-1.5 sm:p-2 hover:bg-gray-800/50 rounded-lg"
//               title="View live project"
//             >
//               <FiExternalLink size={16} sm:size={18} />
//             </a>
//           </div>

//           {/* Description - Concise */}
//           <div className="mb-4 sm:mb-6">
//             <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
//               {current.desc}
//             </p>
//             {current.subdesc && (
//               <p className="text-gray-500 text-xs mt-1 sm:mt-2">
//                 {current.subdesc}
//               </p>
//             )}
//           </div>

//           {/* Compact Tech Stack */}
//           <div className="mb-6 sm:mb-8">
//             <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 text-xs font-medium mb-2 sm:mb-3">
//               <FiCode size={12} sm:size={14} />
//               <span className="text-xs">Technologies</span>
//             </div>
//             <div className="flex flex-wrap gap-1.5 sm:gap-2">
//               {current.tags.slice(0, 4).map((tag, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-lg"
//                 >
//                   <img
//                     src={tag.path}
//                     className="w-3 h-3 sm:w-3.5 sm:h-3.5"
//                     alt={tag.name}
//                   />
//                   <span className="text-gray-300 text-[10px] sm:text-xs">
//                     {tag.name}
//                   </span>
//                 </div>
//               ))}
//               {current.tags.length > 4 && (
//                 <div className="px-2 py-1 sm:px-2.5 sm:py-1.5 bg-gray-800/30 border border-gray-700/30 rounded-lg">
//                   <span className="text-gray-400 text-[10px] sm:text-xs">
//                     +{current.tags.length - 4}
//                   </span>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Navigation with Arrows */}
//           <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-800/50">
//             <button
//               onClick={() => navigate("prev")}
//               className="flex items-center justify-center p-2 sm:px-3 sm:py-2 text-gray-400 hover:text-white transition-colors hover:bg-gray-800/50 rounded-lg"
//               aria-label="Previous project"
//             >
//               <FiChevronLeft size={18} sm:size={20} />
//             </button>

//             <div className="flex gap-2 sm:gap-3">
//               {myProjects.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setSelectedIndex(i)}
//                   className={`w-6 sm:w-8 h-1.5 rounded-full transition-all ${
//                     i === selectedIndex
//                       ? "bg-blue-500"
//                       : "bg-gray-700 hover:bg-gray-600"
//                   }`}
//                   aria-label={`Go to project ${i + 1}`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={() => navigate("next")}
//               className="flex items-center justify-center p-2 sm:px-3 sm:py-2 text-gray-400 hover:text-white transition-colors hover:bg-gray-800/50 rounded-lg"
//               aria-label="Next project"
//             >
//               <FiChevronRight size={18} sm:size={20} />
//             </button>
//           </div>
//         </div>

//         {/* 3D Preview - Minimal */}
//         <div className="bg-gray-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 order-1 lg:order-2">
//           <div className="relative h-[300px] sm:h-[350px] md:h-[400px]">
//             {/* Subtle Overlay Info */}
//             <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
//               <div className="text-[10px] sm:text-xs px-2 py-1 sm:px-3 sm:py-1.5 bg-black/40 backdrop-blur-sm rounded-full border border-gray-800/50 text-gray-300">
//                 3D Preview
//               </div>
//               <div className="text-[10px] sm:text-xs px-2 py-1 sm:px-3 sm:py-1.5 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
//                 Live Demo
//               </div>
//             </div>
//             <Canvas
//               camera={{ position: [0, 2, 18], fov: 45 }}
//               className="rounded-xl"
//             >
//               <ambientLight intensity={0.5} />
//               <directionalLight position={[10, 10, 5]} intensity={0.8} />

//               <Suspense fallback={null}>
//                 <Center>
//                   <group
//                     scale={window.innerWidth < 640 ? 2 : 2.5}
//                     position={[1, -1, 0]}
//                     rotation={[-1.4, -0.05, -0.3]}
//                   >
//                     <DemoComputer videoSrc={current.texture} />
//                   </group>
//                 </Center>
//               </Suspense>
//             </Canvas>
//           </div>
//         </div>
//       </div>

//       {/* Quick Project Selector - Responsive */}
//       <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-1.5 sm:gap-2">
//         {myProjects.map((project, i) => (
//           <button
//             key={project.id}
//             onClick={() => setSelectedIndex(i)}
//             className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all ${
//               i === selectedIndex
//                 ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
//                 : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/30 border border-transparent"
//             }`}
//             aria-label={`Select ${project.title}`}
//           >
//             {project.title.split(" ")[0]}
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { myProjects } from "../constants/index.js";
import DemoComputer from "../components/DemoComputer.jsx";
import {
  FiExternalLink,
  FiCode,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = myProjects[selectedIndex];

  const navigate = (dir) => {
    setSelectedIndex((prev) =>
      dir === "prev"
        ? prev === 0
          ? myProjects.length - 1
          : prev - 1
        : prev === myProjects.length - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <section
      className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      id="work"
    >
      {/* Minimal Header */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          Projects
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm">Interactive showcase</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Project Card - Compact - Show FIRST on mobile */}
        <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800 order-1">
          {/* Compact Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                <img
                  src={current.logo}
                  className="w-4 h-4 sm:w-6 sm:h-6"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-white">
                  {current.title}
                </h3>
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                  <span className="text-gray-400">
                    {selectedIndex + 1}/{myProjects.length}
                  </span>
                  <div className="flex gap-0.5 sm:gap-1">
                    {myProjects.map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 h-1 rounded-full ${
                          i === selectedIndex ? "bg-blue-500" : "bg-gray-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* External Link - Subtle */}
            <a
              href={current.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors p-1.5 sm:p-2 hover:bg-gray-800/50 rounded-lg"
              title="View live project"
            >
              <FiExternalLink size={16} className="sm:size-[18px]" />
            </a>
          </div>

          {/* Description - Concise */}
          <div className="mb-4 sm:mb-6">
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {current.desc}
            </p>
            {current.subdesc && (
              <p className="text-gray-500 text-xs mt-1 sm:mt-2">
                {current.subdesc}
              </p>
            )}
          </div>

          {/* Compact Tech Stack */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 text-xs font-medium mb-2 sm:mb-3">
              <FiCode size={12} className="sm:size-[14px]" />
              <span className="text-xs">Technologies</span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {current.tags.slice(0, 4).map((tag, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-lg"
                >
                  <img
                    src={tag.path}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                    alt={tag.name}
                  />
                  <span className="text-gray-300 text-[10px] sm:text-xs">
                    {tag.name}
                  </span>
                </div>
              ))}
              {current.tags.length > 4 && (
                <div className="px-2 py-1 sm:px-2.5 sm:py-1.5 bg-gray-800/30 border border-gray-700/30 rounded-lg">
                  <span className="text-gray-400 text-[10px] sm:text-xs">
                    +{current.tags.length - 4}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Navigation with Arrows */}
          <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-800/50">
            <button
              onClick={() => navigate("prev")}
              className="flex items-center justify-center p-2 sm:px-3 sm:py-2 text-gray-400 hover:text-white transition-colors hover:bg-gray-800/50 rounded-lg"
              aria-label="Previous project"
            >
              <FiChevronLeft size={18} className="sm:size-[20px]" />
            </button>

            <div className="flex gap-2 sm:gap-3">
              {myProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className={`w-6 sm:w-8 h-1.5 rounded-full transition-all ${
                    i === selectedIndex
                      ? "bg-blue-500"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate("next")}
              className="flex items-center justify-center p-2 sm:px-3 sm:py-2 text-gray-400 hover:text-white transition-colors hover:bg-gray-800/50 rounded-lg"
              aria-label="Next project"
            >
              <FiChevronRight size={18} className="sm:size-[20px]" />
            </button>
          </div>
        </div>

        {/* 3D Preview - Minimal - Show SECOND on mobile */}
        <div className="bg-gray-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 order-2 lg:order-2">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px]">
            <Canvas
              camera={{ position: [0, 2, 18], fov: 45 }}
              className="rounded-xl"
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={0.8} />

              <Suspense fallback={null}>
                <Center>
                  <group
                    scale={window.innerWidth < 640 ? 2 : 2.5}
                    position={[1, -1, 0]}
                    rotation={[-1.4, -0.05, -0.3]}
                  >
                    <DemoComputer videoSrc={current.texture} />
                  </group>
                </Center>
              </Suspense>
            </Canvas>

            {/* Subtle Overlay Info */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
              <div className="text-[10px] sm:text-xs px-2 py-1 sm:px-3 sm:py-1.5 bg-black/40 backdrop-blur-sm rounded-full border border-gray-800/50 text-gray-300">
                3D Preview
              </div>
              <div className="text-[10px] sm:text-xs px-2 py-1 sm:px-3 sm:py-1.5 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                Live Demo
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Project Selector - Responsive */}
      <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-1.5 sm:gap-2">
        {myProjects.map((project, i) => (
          <button
            key={project.id}
            onClick={() => setSelectedIndex(i)}
            className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all ${
              i === selectedIndex
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/30 border border-transparent"
            }`}
            aria-label={`Select ${project.title}`}
          >
            {project.title.split(" ")[0]}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
