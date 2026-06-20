import React, { useState, useEffect } from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import FloatingShapes from "./components/FloatingShapes.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import SmoothScroll from "./components/layout/SmoothScroll.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000); // 1 second
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <SmoothScroll>
      <main className="w-full relative bg-background min-h-screen">
        <FloatingShapes />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact/>
          <Footer/>
        </div>
      </main>
    </SmoothScroll>
  );
};

export default App;
