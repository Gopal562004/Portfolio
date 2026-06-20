import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from '../constants/index.js';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleScroll = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        
        if (elem) {
            const targetPosition = elem.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1200; // 1.2 seconds for cinematic feel
            let start = null;

            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                
                // easeInOutQuart easing function for incredibly buttery smooth motion
                let easeProgress = progress / duration;
                easeProgress = easeProgress < 0.5 
                    ? 8 * easeProgress * easeProgress * easeProgress * easeProgress 
                    : 1 - Math.pow(-2 * easeProgress + 2, 4) / 2;
                    
                window.scrollTo(0, startPosition + distance * easeProgress);
                
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                } else {
                    window.scrollTo(0, targetPosition);
                }
            };
            
            window.requestAnimationFrame(step);
        }
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-background border-b-2 border-white/20 select-none">
            <div className="w-full px-5 md:px-10">
                <div className="flex justify-between items-center h-16">
                    <a href="/" className="text-white font-display font-bold text-2xl uppercase tracking-tighter hover:text-accent transition-colors">
                        Gopal<span className="text-accent">.</span>
                    </a>
                    
                    {/* Mobile Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="text-white hover:text-accent transition-colors md:hidden border-2 border-white/20 p-1.5"
                    >
                        {isOpen ? <AiOutlineClose size={20} /> : <GiHamburgerMenu size={20} />}
                    </button>
                    
                    {/* Desktop Nav */}
                    <nav className="hidden md:flex h-full">
                        <ul className="flex h-full">
                            {navLinks.map((link, index) => (
                                <li key={link.id} className="h-full border-l-2 border-white/20">
                                    <a 
                                        href={link.href} 
                                        onClick={(e) => handleScroll(e, link.href)}
                                        className="h-full flex items-center px-6 font-mono text-xs font-bold uppercase tracking-widest text-secondary hover:text-white hover:bg-white/5 transition-all"
                                    >
                                        <span className="text-accent mr-2 opacity-50">0{index + 1}.</span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Mobile Nav */}
                <nav className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t-2 border-white/20 bg-background`}>
                    <ul className="flex flex-col">
                        {navLinks.map((link, index) => (
                            <li key={link.id} className="border-b-2 border-white/10 last:border-0">
                                <a 
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className="flex items-center py-4 px-2 font-mono text-sm font-bold uppercase tracking-widest text-secondary hover:text-white transition-all"
                                >
                                    <span className="text-accent mr-4">0{index + 1}.</span>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
