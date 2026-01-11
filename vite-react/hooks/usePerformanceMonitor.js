// hooks/usePerformanceMonitor.js - FIXED VERSION
import { useEffect, useCallback, useRef } from "react";

export const usePerformanceMonitor = () => {
  const animationFrameRef = useRef(null);
  const memoryIntervalRef = useRef(null);

  const monitorPerformance = useCallback(() => {
    // Only monitor in development
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    console.log("Performance monitoring enabled");

    // Monitor load time
    const handleLoad = () => {
      setTimeout(() => {
        if (window.performance && window.performance.timing) {
          const perfData = window.performance.timing;
          const loadTime = perfData.loadEventEnd - perfData.navigationStart;
          console.log(`📊 Page loaded in ${loadTime}ms`);
        }
      }, 0);
    };

    window.addEventListener("load", handleLoad);

    // Monitor FPS
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 60;

    const checkFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      if (currentTime >= lastTime + 1000) {
        fps = frameCount;
        frameCount = 0;
        lastTime = currentTime;

        if (fps < 15) {
          console.warn(`⚠️ Low FPS: ${fps}. Consider optimizing 3D content.`);
        }
      }
      animationFrameRef.current = requestAnimationFrame(checkFPS);
    };

    animationFrameRef.current = requestAnimationFrame(checkFPS);

    // Monitor memory usage
    if (performance.memory) {
      memoryIntervalRef.current = setInterval(() => {
        const usedJSHeapSize = performance.memory.usedJSHeapSize;
        const totalJSHeapSize = performance.memory.totalJSHeapSize;
        const memoryUsage = ((usedJSHeapSize / totalJSHeapSize) * 100).toFixed(
          2
        );

        if (memoryUsage > 95) {
          console.warn(`⚠️ High memory usage: ${memoryUsage}%`);
        }
      }, 30000);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (memoryIntervalRef.current) {
        clearInterval(memoryIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const cleanup = monitorPerformance();
    return cleanup;
  }, [monitorPerformance]);
};
