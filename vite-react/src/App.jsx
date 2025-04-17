import React, { useState, useEffect } from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000); // 1 second
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact/>
      <Footer/>
    </main>
  );
};

export default App;
