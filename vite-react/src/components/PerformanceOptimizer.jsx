// components/PerformanceOptimizer.jsx
import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Enable hardware acceleration for 3D content
    const enableHardwareAcceleration = () => {
      const style = document.createElement("style");
      style.textContent = `
        .canvas-container * {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        /* Reduce repaints on scroll */
        .fixed, .sticky {
          will-change: transform;
        }
        
        /* Optimize image rendering */
        img, video {
          content-visibility: auto;
        }
        
        /* Improve scrolling performance */
        * {
          -webkit-overflow-scrolling: touch;
        }
        
        /* Reduce animation jank */
        .animate-pulse, .animate-spin, .animate-float {
          will-change: transform, opacity;
        }
        
        /* Optimize 3D canvas */
        canvas {
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-crisp-edges;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
      `;
      document.head.appendChild(style);
    };

    enableHardwareAcceleration();

    // Optimize scroll performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          // Any scroll-related updates here
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Intersection Observer for lazy loading
    const setupIntersectionObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target;
              target.classList.add("visible");
              observer.unobserve(target);
            }
          });
        },
        {
          rootMargin: "50px",
          threshold: 0.1,
        }
      );

      // Observe all sections for lazy loading
      document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
      });
    };

    // Debounce resize events for performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Handle resize logic here
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    // Setup intersection observer after DOM is ready
    const timer = setTimeout(setupIntersectionObserver, 100);

    // Reduce JavaScript execution time for animations
    const optimizeAnimations = () => {
      // Use transform and opacity for animations (GPU accelerated)
      const style = document.createElement("style");
      style.textContent = `
        @media (prefers-reduced-motion: no-preference) {
          .animate-in {
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-duration: 0.5s;
            animation-fill-mode: both;
          }
        }
        
        /* Disable animations if user prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        
        /* Performance optimization classes */
        .performance-optimized {
          contain: layout style paint;
        }
        
        .gpu-accelerated {
          transform: translateZ(0);
        }
      `;
      document.head.appendChild(style);
    };

    optimizeAnimations();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
