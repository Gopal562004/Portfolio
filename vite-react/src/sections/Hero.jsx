import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "react-spring";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import Target from "../components/Target";
import { Atom } from "../components/AtomEffect";
import RobotModel from "../components/RobotModel";
import ReactLogo from "../components/ReactLogo";
import Rings from "../components/Rings";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false); // ✅ define this at the top

  const { position } = useSpring({
    from: { position: [0, 2, 5] },
    to: { position: [0, 2, 8] },
    config: { duration: 1500 },
  });

  return (
    <section className="min-h-screen w-full flex flex-col relative select-none">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 z-10">
        <h1 className="text-2xl sm:text-3xl font-medium text-white text-center">
          Hello, I'm Gopal <span className="waving-hand">👋</span>
        </h1>
        <p className="hero_tag text-gray_gradient">
          Crafting Unique Digital Experiences
        </p>
        <p className="text-lg sm:text-xl text-gray-300 text-center">
          Focused on building innovative digital solutions with a passion for
          clean code and design.
        </p>
      </div>

      {/* Canvas container centered and sized */}
      <div className="w-full flex justify-center items-center">
        <div
          className="w-[500px] h-[400px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              intensity={1.5}
            />
          </EffectComposer> */}

          <Canvas
            className="w-full h-full"
            camera={{ position: [120, 150, 180], fov: 75 }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls enableZoom={false} enabled={isHovered} />
              <HackerRoom />
              <group>
                <Target position={[-35, -65, 100]} scale={20} />
                {/* <Atom scale={20} /> */}
                <RobotModel />
                <ReactLogo scale={10} position={[80, 65, -50]} />
                <Rings />
              </group>
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className="flex justify-center items-center cursor-pointer select-none">
        <div className="flex items-center gap-3 px-6 py-3 bg-[#1a1a1a] text-[#00f6ff] font-mono text-sm md:text-base rounded-lg border border-[#00f6ff]/30 shadow-lg shadow-[#00f6ff]/10 animate-pulse hover:shadow-[#00f6ff]/50 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#00f6ff] animate-spin-slow"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-11.293a1 1 0 00-1.414 0L7 9l2.293 2.293a1 1 0 001.414-1.414L9.414 9l1.293-1.293a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Let's Work Together
        </div>
      </div>
    </section>
  );
};

export default Hero;