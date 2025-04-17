import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; // Import the X icon
import { navLinks } from '../constants/index.js'; // Adjust the path

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-black/90 select-none">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-5">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Gopal
                    </a>
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                        className="text-neutral-400 hover:text-white transition-colors md:hidden"
                    >
                        {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />} {/* Conditional rendering */}
                    </button>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4">
                            {navLinks.map(link => (
                                <li key={link.id}>
                                    <a href={link.href} className="text-neutral-400 hover:text-white">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <nav className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <ul className="flex flex-col bg-black/80 p-4 space-y-2">
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <a href={link.href} className="text-neutral-400 hover:text-white">
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
