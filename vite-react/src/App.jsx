// // // // import React, { useState, useEffect } from "react";
// // // // import Navbar from "./sections/Navbar.jsx";
// // // // import Hero from "./sections/Hero.jsx";
// // // // import About from "./sections/About.jsx";
// // // // import Projects from "./sections/Projects.jsx";
// // // // import LoadingScreen from "./components/LoadingScreen.jsx";
// // // // import Contact from "./sections/Contact.jsx";
// // // // import Footer from "./sections/Footer.jsx";
// // // // const App = () => {
// // // //   const [isLoading, setIsLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const timeout = setTimeout(() => setIsLoading(false), 1000); // 1 second
// // // //     return () => clearTimeout(timeout);
// // // //   }, []);

// // // //   if (isLoading) return <LoadingScreen />;

// // // //   return (
// // // //     <main className="max-w-7xl mx-auto">
// // // //       <Navbar />
// // // //       <Hero />
// // // //       <About />
// // // //       <Projects />
// // // //       <Contact/>
// // // //       <Footer/>
// // // //     </main>
// // // //   );
// // // // };

// // // // export default App;
// // // import React, { Suspense, lazy, useState, useEffect } from "react";
// // // import LoadingScreen from "./components/LoadingScreen.jsx";

// // // // Lazy-loaded components (loaded only when needed)
// // // const Navbar = lazy(() => import("./sections/Navbar.jsx"));
// // // const Hero = lazy(() => import("./sections/Hero.jsx"));
// // // const About = lazy(() => import("./sections/About.jsx"));
// // // const Projects = lazy(() => import("./sections/Projects.jsx"));
// // // const Contact = lazy(() => import("./sections/Contact.jsx"));
// // // const Footer = lazy(() => import("./sections/Footer.jsx"));

// // // const App = () => {
// // //   const [isLoading, setIsLoading] = useState(true);

// // //   useEffect(() => {
// // //     // minimum loading time + allow components to lazy-load
// // //     const timeout = setTimeout(() => setIsLoading(false), 800);
// // //     return () => clearTimeout(timeout);
// // //   }, []);

// // //   if (isLoading) return <LoadingScreen />;

// // //   return (
// // //     <main className="max-w-7xl mx-auto">
// // //       <Suspense fallback={<LoadingScreen />}>
// // //         <Navbar />
// // //         <Hero />
// // //         <About />
// // //         <Projects />
// // //         <Contact />
// // //         <Footer />
// // //       </Suspense>
// // //     </main>
// // //   );
// // // };

// // // export default App;
// // import React, { Suspense, lazy, useState, useEffect } from "react";
// // import LoadingScreen from "./components/LoadingScreen.jsx";
// // import { Analytics } from "@vercel/analytics/react"; // ✅ Added

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
// //     const timeout = setTimeout(() => setIsLoading(false), 800);
// //     return () => clearTimeout(timeout);
// //   }, []);

// //   if (isLoading) return <LoadingScreen />;

// //   return (
// //     <main className="max-w-7xl mx-auto">
// //       <Suspense fallback={<LoadingScreen />}>
// //         <Navbar />
// //         <Hero />
// //         <About />
// //         <Projects />
// //         <Contact />
// //         <Footer />
// //       </Suspense>

// //       {/* ✅ Add Analytics at the bottom */}
// //       <Analytics />
// //     </main>
// //   );
// // };

// // export default App;
// import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
// import LoadingScreen from "./components/LoadingScreen.jsx";
// import { Analytics } from "@vercel/analytics/react";
// import { ErrorBoundary } from "./components/ErrorBoundary.jsx"; // Create this component

// // Lazy-loaded components with preloading hint
// const Navbar = lazy(() =>
//   import("./sections/Navbar.jsx").then((module) => ({
//     default: module.default,
//   }))
// );
// const Hero = lazy(() =>
//   import("./sections/Hero.jsx").then((module) => ({ default: module.default }))
// );
// const About = lazy(() =>
//   import("./sections/About.jsx").then((module) => ({ default: module.default }))
// );
// const Projects = lazy(() =>
//   import("./sections/Projects.jsx").then((module) => ({
//     default: module.default,
//   }))
// );
// const Contact = lazy(() =>
//   import("./sections/Contact.jsx").then((module) => ({
//     default: module.default,
//   }))
// );
// const Footer = lazy(() =>
//   import("./sections/Footer.jsx").then((module) => ({
//     default: module.default,
//   }))
// );

// // Optional: Preload critical components
// const preloadComponents = () => {
//   const components = [Navbar, Hero];
//   components.forEach((component) => {
//     if (typeof component.preload === "function") {
//       component.preload();
//     }
//   });
// };

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [loadingProgress, setLoadingProgress] = useState(0);
//   const [hasError, setHasError] = useState(false);
//   const mainRef = useRef(null);

//   useEffect(() => {
//     // Simulate loading progress
//     const progressInterval = setInterval(() => {
//       setLoadingProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           return 100;
//         }
//         return prev + 10;
//       });
//     }, 100);

//     // Preload critical components
//     preloadComponents();

//     // Initialize animations or effects
//     const initPageEffects = () => {
//       // Add any page initialization logic here
//       document.body.style.overflow = "hidden";
//     };

//     initPageEffects();

//     // Main loading timeout
//     const timeout = setTimeout(() => {
//       setIsLoading(false);
//       setLoadingProgress(100);
//       document.body.style.overflow = "auto";

//       // Add loaded class for transition effects
//       document.body.classList.add("page-loaded");

//       // Send pageview to analytics
//       if (window.gtag) {
//         window.gtag("event", "page_view", {
//           page_title: document.title,
//           page_location: window.location.href,
//           page_path: window.location.pathname,
//         });
//       }
//     }, 1000);

//     return () => {
//       clearInterval(progressInterval);
//       clearTimeout(timeout);
//     };
//   }, []);

//   // Handle scroll restoration
//   useEffect(() => {
//     if (!isLoading) {
//       window.scrollTo(0, 0);
//     }
//   }, [isLoading]);

//   // Error boundary fallback
//   if (hasError) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
//         <div className="text-center p-8">
//           <div className="text-6xl mb-4">🚨</div>
//           <h1 className="text-2xl font-bold text-white mb-2">
//             Something went wrong
//           </h1>
//           <p className="text-gray-400 mb-4">
//             We're having trouble loading the page.
//           </p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Refresh Page
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (isLoading) {
//     return <LoadingScreen progress={loadingProgress} />;
//   }

//   return (
//     <ErrorBoundary onError={() => setHasError(true)}>
//       <main ref={mainRef} className="mx-auto w-full relative overflow-hidden">
//         {/* Background Grid Pattern */}
//         <div className="fixed inset-0 z-[-1] opacity-5">
//           <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//               backgroundSize: "60px 60px",
//             }}
//           ></div>
//         </div>

//         {/* Scroll Progress Indicator */}
//         <div className="fixed top-0 left-0 right-0 h-1 z-50">
//           <div
//             className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
//             style={{
//               width: "0%",
//               transition: "width 0.3s ease",
//             }}
//             id="scroll-progress"
//           />
//         </div>

//         <Suspense
//           fallback={
//             <div className="min-h-screen flex items-center justify-center">
//               <div className="text-center">
//                 <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//                 <p className="text-gray-400">Loading components...</p>
//               </div>
//             </div>
//           }
//         >
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <Navbar />
//             <Hero />
//             <About />
//             <Projects />
//             <Contact />
//             <Footer />
//           </div>
//         </Suspense>

//         {/* Back to Top Button */}
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="fixed bottom-8 right-8 p-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full text-gray-300 hover:text-white hover:border-blue-500 transition-all duration-300 hover:scale-110 z-40"
//           aria-label="Scroll to top"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 10l7-7m0 0l7 7m-7-7v18"
//             />
//           </svg>
//         </button>

//         {/* Analytics */}
//         <Analytics />

//         {/* Performance Monitoring Script */}
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               // Performance monitoring
//               window.addEventListener('load', function() {
//                 if ('performance' in window) {
//                   const timing = performance.timing;
//                   const loadTime = timing.loadEventEnd - timing.navigationStart;
//                   console.log('Page load time:', loadTime + 'ms');
                  
//                   // Send to analytics if needed
//                   if (window.gtag && loadTime < 10000) {
//                     window.gtag('event', 'timing_complete', {
//                       name: 'page_load',
//                       value: loadTime,
//                       event_category: 'Performance'
//                     });
//                   }
//                 }
//               });

//               // Scroll progress indicator
//               window.addEventListener('scroll', function() {
//                 const scrollTop = window.pageYOffset;
//                 const docHeight = document.body.scrollHeight - window.innerHeight;
//                 const scrollPercent = (scrollTop / docHeight) * 100;
//                 const progressBar = document.getElementById('scroll-progress');
//                 if (progressBar) {
//                   progressBar.style.width = scrollPercent + '%';
//                 }
//               });

//               // Smooth scroll for anchor links
//               document.addEventListener('click', function(e) {
//                 if (e.target.matches('a[href^="#"]')) {
//                   e.preventDefault();
//                   const id = e.target.getAttribute('href');
//                   if (id === '#') return;
//                   const element = document.querySelector(id);
//                   if (element) {
//                     element.scrollIntoView({ behavior: 'smooth' });
//                   }
//                 }
//               });

//               // Add keyboard navigation support
//               document.addEventListener('keydown', function(e) {
//                 if (e.key === 'Escape') {
//                   // Close any open modals or menus
//                   document.activeElement.blur();
//                 }
//               });
//             `,
//           }}
//         />
//       </main>
//     </ErrorBoundary>
//   );
// };

// export default App;
import React, { Suspense, lazy, useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
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

  useEffect(() => {
    // Simulate loading for better UX
    const timeout = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="w-full">
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
