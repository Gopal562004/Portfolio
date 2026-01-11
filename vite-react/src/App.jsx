
// // import React, { Suspense, lazy, useState, useEffect } from "react";
// // import LoadingScreen from "./components/LoadingScreen.jsx";
// // import { Analytics } from "@vercel/analytics/react";

// // // Lazy-loaded components
// // const Navbar = lazy(() => import("./sections/Navbar.jsx"));
// // const Hero = lazy(() => import("./sections/Hero.jsx"));
// // const About = lazy(() => import("./sections/About.jsx"));
// // const Projects = lazy(() => import("./sections/Projects.jsx"));
// // const Contact = lazy(() => import("./sections/Contact.jsx"));
// // const Footer = lazy(() => import("./sections/Footer.jsx"));

// // const App = () => {
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     // Simulate loading for better UX
// //     const timeout = setTimeout(() => setIsLoading(false), 1200);
// //     return () => clearTimeout(timeout);
// //   }, []);

// //   // Show loading screen
// //   if (isLoading) {
// //     return <LoadingScreen />;
// //   }

// //   return (
// //     <main className="w-full">
// //       <Suspense fallback={<LoadingScreen />}>
// //         <Navbar />
// //         <Hero />
// //         <About />
// //         <Projects />
// //         <Contact />
// //         <Footer />
// //       </Suspense>
// //       <Analytics />
// //     </main>
// //   );
// // };

// // export default App;


// import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
// import LoadingScreen from "./components/LoadingScreen.jsx";
// import { Analytics } from "@vercel/analytics/react";

// // Lazy-loaded components with preload hints
// const Navbar = lazy(() => import("./sections/Navbar.jsx"));
// const Hero = lazy(() => import("./sections/Hero.jsx"));
// const About = lazy(() => import("./sections/About.jsx"));
// const Projects = lazy(() => import("./sections/Projects.jsx"));
// const Contact = lazy(() => import("./sections/Contact.jsx"));
// const Footer = lazy(() => import("./sections/Footer.jsx"));

// // Preload critical components
// const preloadComponents = () => {
//   const preload = (component) => {
//     // Start loading but don't wait
//     component();
//   };

//   // Preload critical components
//   preload(() => import("./sections/Navbar.jsx"));
//   preload(() => import("./sections/Hero.jsx"));
// };

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [hasStartedLoading, setHasStartedLoading] = useState(false);
//   const mainContentRef = useRef(null);

//   useEffect(() => {
//     // Start preloading immediately
//     preloadComponents();
//     setHasStartedLoading(true);

//     // Optimize loading based on network speed
//     const connection =
//       navigator.connection ||
//       navigator.mozConnection ||
//       navigator.webkitConnection;
//     const isSlowConnection = connection
//       ? connection.saveData ||
//         connection.effectiveType === "slow-2g" ||
//         connection.effectiveType === "2g"
//       : false;

//     // Adjust loading time based on connection
//     const loadingTime = isSlowConnection ? 1800 : 1200;

//     // Load assets in background
//     const preloadAssets = () => {
//       // Preload fonts if any
//       const fonts = [
//         // Add your font URLs here
//       ];

//       fonts.forEach((font) => {
//         const link = document.createElement("link");
//         link.rel = "preload";
//         link.href = font;
//         link.as = "font";
//         link.crossOrigin = "anonymous";
//         document.head.appendChild(link);
//       });

//       // Preload critical images
//       const images = [
//         // Add critical image URLs here
//       ];

//       images.forEach((src) => {
//         const img = new Image();
//         img.src = src;
//       });
//     };

//     // Start asset preloading
//     preloadAssets();

//     // Use requestAnimationFrame for smoother transitions
//     const animateLoading = () => {
//       requestAnimationFrame(() => {
//         // Add a small delay for better perceived performance
//         setTimeout(() => {
//           setIsLoading(false);

//           // Force a reflow to ensure smooth transition
//           if (mainContentRef.current) {
//             mainContentRef.current.style.opacity = "0";
//             mainContentRef.current.style.transform = "translateY(0)";

//             requestAnimationFrame(() => {
//               mainContentRef.current.style.transition =
//                 "opacity 0.4s ease-out, transform 0.4s ease-out";
//               mainContentRef.current.style.opacity = "1";
//               mainContentRef.current.style.transform = "translateY(0)";
//             });
//           }
//         }, 100);
//       });
//     };

//     const timeout = setTimeout(animateLoading, loadingTime);

//     // Fallback timeout in case something goes wrong
//     const fallbackTimeout = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);

//     return () => {
//       clearTimeout(timeout);
//       clearTimeout(fallbackTimeout);
//     };
//   }, []);

//   // Show loading screen
//   if (isLoading) {
//     return <LoadingScreen />;
//   }

//   return (
//     <main className="w-full" ref={mainContentRef}>
//       <Suspense
//         fallback={
//           <div className="min-h-screen flex items-center justify-center">
//             <LoadingScreen />
//           </div>
//         }
//       >
//         <Navbar />
//         <Hero />
//         <About />
//         <Projects />
//         <Contact />
//         <Footer />
//       </Suspense>
//       <Analytics />
//     </main>
//   );
// };

// export default App;

// App.jsx - FIXED VERSION
import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import { usePerformanceMonitor } from "../hooks/usePerformanceMonitor";
import { Analytics } from "@vercel/analytics/react";

// Lazy-loaded components
const Navbar = lazy(() => import("./sections/Navbar.jsx"));
const Hero = lazy(() => import("./sections/Hero.jsx"));
const About = lazy(() => import("./sections/About.jsx"));
const Projects = lazy(() => import("./sections/Projects.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));
const Footer = lazy(() => import("./sections/Footer.jsx"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const mainContentRef = useRef(null);
  
  // ALWAYS call the hook, but it only runs logic in development
  usePerformanceMonitor();

  useEffect(() => {
    // Optimize loading based on network speed
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowConnection = connection ? 
      (connection.saveData || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') : 
      false;

    // Adjust loading time based on connection
    const loadingTime = isSlowConnection ? 1800 : 1200;

    // Smooth loading transition
    const animateLoading = () => {
      requestAnimationFrame(() => {
        setIsLoading(false);
        
        // Force a reflow for smooth transition
        if (mainContentRef.current) {
          mainContentRef.current.style.opacity = '0';
          mainContentRef.current.style.transform = 'translateY(20px)';
          
          requestAnimationFrame(() => {
            mainContentRef.current.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            mainContentRef.current.style.opacity = '1';
            mainContentRef.current.style.transform = 'translateY(0)';
          });
        }
      });
    };

    const timeout = setTimeout(animateLoading, loadingTime);
    
    // Fallback timeout
    const fallbackTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="w-full" ref={mainContentRef}>
      <PerformanceOptimizer />
      <Suspense fallback={<LoadingScreen />}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
      <Analytics />
    </main>
  );
};

export default App;
