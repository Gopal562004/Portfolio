import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full px-5 md:px-10 py-8 bg-background flex flex-col md:flex-row justify-between items-center text-xs font-mono text-secondary uppercase tracking-widest select-none">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <p>SYSTEM.COPYRIGHT © 2026 GOPAL GAWAS</p>
      </div>

      <div className="flex gap-6">
        <a href="https://github.com/Gopal562004" target="_blank" rel="noreferrer" className="hover:text-accent cursor-pointer transition-colors border-b border-transparent hover:border-accent">
          GITHUB
        </a>
        <a href="https://www.linkedin.com/in/gopal-gawas-878641269" target="_blank" rel="noreferrer" className="hover:text-accent cursor-pointer transition-colors border-b border-transparent hover:border-accent">
          LINKEDIN
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-accent cursor-pointer transition-colors border-b border-transparent hover:border-accent">
          X / TWITTER
        </a>
      </div>
    </footer>
  );
};

export default Footer;
