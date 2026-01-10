// import React, { useState } from 'react';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai"; // Import the X icon
// import { navLinks } from '../constants/index.js'; // Adjust the path

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <header className="fixed top-0 left-0 z-50 w-full bg-black/90 select-none">
//             <div className="max-w-7xl mx-auto px-4">
//                 <div className="flex justify-between items-center py-5">
//                     <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
//                         Gopal
//                     </a>
//                     <button
//                         onClick={toggleMenu}
//                         aria-label="Toggle navigation"
//                         className="text-neutral-400 hover:text-white transition-colors md:hidden"
//                     >
//                         {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />} {/* Conditional rendering */}
//                     </button>
//                     <nav className="hidden md:block">
//                         <ul className="flex space-x-4">
//                             {navLinks.map(link => (
//                                 <li key={link.id}>
//                                     <a href={link.href} className="text-neutral-400 hover:text-white">
//                                         {link.name}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>
//                 </div>
//                 <nav className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
//                     <ul className="flex flex-col bg-black/80 p-4 space-y-2">
//                         {navLinks.map(link => (
//                             <li key={link.id}>
//                                 <a href={link.href} className="text-neutral-400 hover:text-white">
//                                     {link.name}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none">
                Gopal
              </span>
              <span className="text-gray-400 text-xs">Developer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-3/4 transition-all duration-300"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="ml-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
            >
              Get in Touch
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            className="md:hidden p-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-200"
          >
            {isOpen ? (
              <AiOutlineClose size={20} />
            ) : (
              <GiHamburgerMenu size={20} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${isOpen ? "block" : "hidden"} md:hidden pt-2 pb-4`}>
          <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4 p-3 bg-gray-800/50 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-gray-300 font-medium">Navigation</span>
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.href)}
                    className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200 flex items-center gap-3 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors"></div>
                    <span className="font-medium">{link.name}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 hover:text-white hover:border-blue-400 rounded-lg transition-all duration-200 font-medium"
              >
                Contact Me
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
