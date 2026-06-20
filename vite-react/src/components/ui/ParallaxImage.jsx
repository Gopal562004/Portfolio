import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

export const ParallaxImage = ({ src, alt, className, offset = 50 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden rounded-2xl w-full h-full bg-surfaceLight", className)}
    >
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        className="absolute w-full h-[120%] object-cover top-[-10%] left-0"
      />
      {/* Optional glass overlay for blending into dark themes */}
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay z-10 pointer-events-none" />
    </div>
  );
};
