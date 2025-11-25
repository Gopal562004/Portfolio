// import React, { useState, useEffect } from "react";
// import Navbar from "./sections/Navbar.jsx";
// import Hero from "./sections/Hero.jsx";
// import About from "./sections/About.jsx";
// import Projects from "./sections/Projects.jsx";
// import LoadingScreen from "./components/LoadingScreen.jsx";
// import Contact from "./sections/Contact.jsx";
// import Footer from "./sections/Footer.jsx";

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => setIsLoading(false), 1000); // 1 second
//     return () => clearTimeout(timeout);
//   }, []);

//   if (isLoading) return <LoadingScreen />;

//   return (
//     <main className="max-w-7xl mx-auto">
//       <Navbar />
//       <Hero />
//       <About />
//       <Projects />
//       <Contact/>
//       <Footer/>
//     </main>
//   );
// };

// export default App;
// // import React, { useState, useEffect } from "react";
// // import Navbar from "./sections/Navbar.jsx";
// // import Hero from "./sections/Hero.jsx";
// // import About from "./sections/About.jsx";
// // import Projects from "./sections/Projects.jsx";
// // import LoadingScreen from "./components/LoadingScreen.jsx";
// // import Contact from "./sections/Contact.jsx";
// // import Footer from "./sections/Footer.jsx";
// // const App = () => {
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const timeout = setTimeout(() => setIsLoading(false), 1000); // 1 second
// //     return () => clearTimeout(timeout);
// //   }, []);

// //   if (isLoading) return <LoadingScreen />;

// //   return (
// //     <main className="max-w-7xl mx-auto">
// //       <Navbar />
// //       <Hero />
// //       <About />
// //       <Projects />
// //       <Contact/>
// //       <Footer/>
// //     </main>
// //   );
// // };

// // export default App;
// import React, { Suspense, lazy, useState, useEffect } from "react";
// import LoadingScreen from "./components/LoadingScreen.jsx";

// // Lazy-loaded components (loaded only when needed)
// const Navbar = lazy(() => import("./sections/Navbar.jsx"));
// const Hero = lazy(() => import("./sections/Hero.jsx"));
// const About = lazy(() => import("./sections/About.jsx"));
// const Projects = lazy(() => import("./sections/Projects.jsx"));
// const Contact = lazy(() => import("./sections/Contact.jsx"));
// const Footer = lazy(() => import("./sections/Footer.jsx"));

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // minimum loading time + allow components to lazy-load
//     const timeout = setTimeout(() => setIsLoading(false), 800);
//     return () => clearTimeout(timeout);
//   }, []);

//   if (isLoading) return <LoadingScreen />;

//   return (
//     <main className="max-w-7xl mx-auto">
//       <Suspense fallback={<LoadingScreen />}>
//         <Navbar />
//         <Hero />
//         <About />
//         <Projects />
//         <Contact />
//         <Footer />
//       </Suspense>
//     </main>
//   );
// };

// export default App;
import React, { Suspense, lazy, useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import { Analytics } from "@vercel/analytics/react"; // ✅ Added

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
    const timeout = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <main className="max-w-7xl mx-auto">
      <Suspense fallback={<LoadingScreen />}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>

      {/* ✅ Add Analytics at the bottom */}
      <Analytics />
    </main>
  );
};

export default App;
