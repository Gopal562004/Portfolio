import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { myProjects } from "../constants/index.js";
// import CanvasLoader from "../components/Loading.jsx";
import DemoComputer from "../components/DemoComputer.jsx";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

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
    <section className="c-space my-20 select-none" id="work">
      <p className="head-text">My Selected Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Left Panel */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              draggable={false}
              className="w-full h-32 object-cover rounded-xl "
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              draggable={false}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5 transition-opacity duration-500 ease-in opacity-100">
            <p className="text-white text-2xl font-semibold">
              {currentProject.title}
            </p>
            <p>{currentProject.desc}</p>
            <p>{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} draggable={false} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img
                src="../../public/images/logo/arrow-up.png"
                alt="arrow"
                draggable={false}
                className="w-3 h-3"
              />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <FaArrowLeft className="text-white" />
            </button>

            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas
            shadows
            camera={{ position: [0, 2, 20], fov: 45 }} // Center front view
            gl={{ preserveDrawingBuffer: true }}
          >
            {/* Lights */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

            {/* 3D Model */}
            <Suspense fallback={null}>
              <Center>
                <group scale={3} position={[1, -1, 0]} rotation={[-1.4, -0.05, -0.3]}>
                  <DemoComputer videoSrc={currentProject.texture} />
                </group>
              </Center>
            </Suspense>

            {/* Lock vertical rotation */}
            {/* <OrbitControls
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.8}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            /> */}
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
