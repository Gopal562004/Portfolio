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
            href="https://drive.google.com/file/d/11E-4BRmgXWW-fohmt75UAX6wZvZ6tejd/view?usp=sharing"
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
