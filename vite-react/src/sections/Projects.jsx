// import { Suspense, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Center, OrbitControls } from "@react-three/drei";
// import { FaArrowRight } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
// import { myProjects } from "../constants/index.js";
// // import CanvasLoader from "../components/Loading.jsx";
// import DemoComputer from "../components/DemoComputer.jsx";

// const projectCount = myProjects.length;

// const Projects = () => {
//   const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

//   const handleNavigation = (direction) => {
//     setSelectedProjectIndex((prevIndex) => {
//       if (direction === "previous") {
//         return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
//       } else {
//         return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
//       }
//     });
//   };

//   const currentProject = myProjects[selectedProjectIndex];

//   return (
//     <section className="c-space my-20 select-none" id="work">
//       <p className="head-text">My Selected Work</p>

//       <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
//         {/* Left Panel */}
//         <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
//           <div className="absolute top-0 right-0">
//             <img
//               src={currentProject.spotlight}
//               alt="spotlight"
//               draggable={false}
//               className="w-full h-32 object-cover rounded-xl "
//             />
//           </div>

//           <div
//             className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
//             style={currentProject.logoStyle}
//           >
//             <img
//               className="w-10 h-10 shadow-sm rounded-md"
//               src={currentProject.logo}
//               draggable={false}
//               alt="logo"
              
//             />
//           </div>

//           <div className="flex flex-col gap-5 text-white-600 my-5 transition-opacity duration-500 ease-in opacity-100">
//             <p className="text-white text-2xl font-semibold">
//               {currentProject.title}
//             </p>
//             <p>{currentProject.desc}</p>
//             <p>{currentProject.subdesc}</p>
//           </div>

//           <div className="flex items-center justify-between flex-wrap gap-5">
//             <div className="flex items-center gap-3">
//               {currentProject.tags.map((tag, index) => (
//                 <div key={index} className="tech-logo">
//                   <img
//                     src={tag.path}
//                     alt={tag.name}
//                     draggable={false}
//                     className="rounded-md"
//                   />
//                 </div>
//               ))}
//             </div>

//             <a
//               className="flex items-center gap-2 cursor-pointer text-white-600"
//               href={currentProject.href}
//               target="_blank"
//               rel="noreferrer"
//             >
//               <p>Check Live Site</p>
//               <img
//                 src="../../public/images/logo/arrow-up.png"
//                 alt="arrow"
//                 draggable={false}
//                 className="w-3 h-3"
//               />
//             </a>
//           </div>

//           <div className="flex justify-between items-center mt-7">
//             <button
//               className="arrow-btn"
//               onClick={() => handleNavigation("previous")}
//             >
//               <FaArrowLeft className="text-white" />
//             </button>

//             <button
//               className="arrow-btn"
//               onClick={() => handleNavigation("next")}
//             >
//               <FaArrowRight className="text-white" />
//             </button>
//           </div>
//         </div>

//         {/* Right Panel */}
//         <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
//           <Canvas
//             shadows
//             camera={{ position: [0, 2, 20], fov: 45 }} // Center front view
//             gl={{ preserveDrawingBuffer: true }}
//           >
//             {/* Lights */}
//             <ambientLight intensity={0.6} />
//             <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

//             {/* 3D Model */}
//             <Suspense fallback={null}>
//               <Center>
//                 <group
//                   scale={3}
//                   position={[1, -1, 0]}
//                   rotation={[-1.4, -0.05, -0.3]}
//                 >
//                   <DemoComputer videoSrc={currentProject.texture} />
//                 </group>
//               </Center>
//             </Suspense>

//             {/* Lock vertical rotation */}
//             {/* <OrbitControls
//               enableZoom={false}
//               enablePan={false}
//               rotateSpeed={0.8}
//               minPolarAngle={Math.PI / 2}
//               maxPolarAngle={Math.PI / 2}
//             /> */}
//           </Canvas>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { myProjects } from "../constants/index.js";
import DemoComputer from "../components/DemoComputer.jsx";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const projectCount = myProjects.length;

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="work">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A showcase of my recent work and technical implementations
        </p>
      </div>

      {/* Main Project Container */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Project Info Card */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8">
          {/* Project Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-gray-800/50 border border-gray-700 rounded-xl">
              <img
                className="w-10 h-10"
                src={currentProject.logo}
                draggable={false}
                alt={`${currentProject.title} logo`}
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {currentProject.title}
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        selectedProjectIndex === i
                          ? "bg-blue-500"
                          : "bg-gray-700"
                      }`}
                    ></div>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">
                  {selectedProjectIndex + 1} / {projectCount}
                </span>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              {currentProject.desc}
            </p>
            {currentProject.subdesc && (
              <p className="text-gray-400 text-sm leading-relaxed">
                {currentProject.subdesc}
              </p>
            )}
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-3">
              {currentProject.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg"
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    draggable={false}
                    className="w-5 h-5"
                  />
                  <span className="text-gray-300 text-sm">{tag.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation & Action Buttons */}
          <div className="space-y-6">
            {/* Live Site Button */}
            <a
              href={currentProject.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] text-center"
            >
              <div className="flex items-center justify-center gap-2">
                <span>View Live Project</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleNavigation("previous")}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 rounded-lg transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous
              </button>

              <div className="text-gray-400 text-sm">
                {selectedProjectIndex + 1} of {projectCount}
              </div>

              <button
                onClick={() => handleNavigation("next")}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 rounded-lg transition-colors"
              >
                Next
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 3D Preview */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
          {/* Preview Header */}
          <div className="px-6 py-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-300 font-mono text-sm">
                Preview: {currentProject.title}
              </span>
            </div>
          </div>

          {/* 3D Canvas */}
          <div className="h-[400px]">
            <Canvas
              shadows
              camera={{ position: [0, 2, 20], fov: 45 }}
              gl={{ preserveDrawingBuffer: true }}
            >
              {/* Lighting */}
              <ambientLight intensity={0.6} />
              <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
              />

              {/* 3D Model */}
              <Suspense fallback={null}>
                <Center>
                  <group
                    scale={3}
                    position={[1, -1, 0]}
                    rotation={[-1.4, -0.05, -0.3]}
                  >
                    <DemoComputer videoSrc={currentProject.texture} />
                  </group>
                </Center>
              </Suspense>

              {/* Optional Controls - Commented out */}
              {/* <OrbitControls
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.8}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
              /> */}
            </Canvas>
          </div>

          {/* Preview Footer */}
          <div className="px-6 py-4 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div className="text-gray-400 text-sm">
                Interactive 3D Preview
              </div>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">
                  3D
                </div>
                <div className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                  Real-time
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Projects Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-wrap justify-center gap-4">
          {myProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setSelectedProjectIndex(index)}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                selectedProjectIndex === index
                  ? "bg-gray-800 border-gray-600 text-white"
                  : "bg-gray-900/50 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
