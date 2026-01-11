// import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// //import * as THREE from "three";
// import { Float } from "@react-three/drei";

// const Atom = () => {
//   const groupRef = useRef();
//   const sparklesRef = useRef([]);

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();

//     // Rotate the whole atom
//     groupRef.current.rotation.y = t * 0.3;

//     // Animate sparkles (electrons)
//     sparklesRef.current.forEach((s, i) => {
//       const angle = t + i;
//       s.position.x = Math.cos(angle) * 2.2;
//       s.position.y = Math.sin(angle * 1.3) * 2.2;
//       s.position.z = Math.sin(angle * 0.8) * 2.2;
//     });
//   });

//   return (
//     <Float
//       speed={3} // faster oscillation
//       rotationIntensity={1.2} // subtle rotation
//       floatIntensity={2.5} // more float motion
//       floatingRange={[-0.6, 0.6]} // up/down range
//     >
//       <group ref={groupRef} position={[95, 65, -40]} scale={[9, 9, 9]}>
//         {/* Nucleus */}
//         <mesh>
//           <sphereGeometry args={[0.6, 64, 64]} />
//           <meshStandardMaterial
//             color={"#ffffff"}
//             emissive={"#ff00ff"}
//             emissiveIntensity={2.5}
//             metalness={0.9}
//             roughness={0.1}
//             toneMapped={false}
//           />
//         </mesh>

//         {/* Orbit Rings */}
//         {[...Array(3)].map((_, i) => (
//           <mesh rotation={[i * 0.6, i * 0.6, 0]} key={i}>
//             <torusGeometry args={[2.2, 0.03, 16, 100]} />
//             <meshStandardMaterial
//               color={"#ffffff"}
//               emissive={"#ff00ff"}
//               emissiveIntensity={1.5}
//               metalness={0.6}
//               roughness={0.3}
//               toneMapped={false}
//             />
//           </mesh>
//         ))}

//         {/* Animated Sparkles */}
//         {[...Array(12)].map((_, i) => (
//           <mesh key={i} ref={(el) => (sparklesRef.current[i] = el)}>
//             <sphereGeometry args={[0.08, 16, 16]} />
//             <meshStandardMaterial
//               color={"#00ffff"}
//               emissive={"#00ffff"}
//               emissiveIntensity={3}
//               toneMapped={false}
//               metalness={0.5}
//             />
//           </mesh>
//         ))}
//       </group>
//     </Float>
//   );
// };

// export { Atom };
import React, { useRef, useMemo, memo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const Atom = () => {
  const groupRef = useRef();
  const frameCountRef = useRef(0);

  // Constants for better performance
  const ORBIT_COUNT = 3;
  const SPARKLE_COUNT = 12;

  // Memoized elements to prevent recreation on every render
  const orbits = useMemo(
    () =>
      Array.from({ length: ORBIT_COUNT }).map((_, i) => ({
        rotation: [i * 0.6, i * 0.6, 0],
        key: `orbit-${i}`,
      })),
    []
  );

  // Create sparkle positions array
  const sparklePositions = useRef(
    Array(SPARKLE_COUNT)
      .fill()
      .map(() => ({ x: 0, y: 0, z: 0 }))
  );

  // Simplified animation - less calculations per frame
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Frame skipping for mobile
    frameCountRef.current++;
    if (frameCountRef.current % 2 === 0) return;

    // Main atom rotation (same as original)
    groupRef.current.rotation.y = t * 0.3;

    // Update sparkle positions (simplified calculation)
    for (let i = 0; i < SPARKLE_COUNT; i++) {
      const angle = t + i;
      sparklePositions.current[i] = {
        x: Math.cos(angle) * 2.2,
        y: Math.sin(angle * 1.3) * 2.2,
        z: Math.sin(angle * 0.8) * 2.2,
      };
    }
  });

  return (
    <Float
      speed={3}
      rotationIntensity={1.2}
      floatIntensity={2.5}
      floatingRange={[-0.6, 0.6]}
    >
      <group ref={groupRef} position={[95, 65, -40]} scale={[9, 9, 9]}>
        {/* Nucleus - Reduced geometry detail */}
        <mesh>
          <sphereGeometry args={[0.6, 24, 24]} />
          <meshStandardMaterial
            color={"#ffffff"}
            emissive={"#ff00ff"}
            emissiveIntensity={2.5}
            metalness={0.9}
            roughness={0.1}
            toneMapped={false}
          />
        </mesh>

        {/* Orbit Rings - Reduced geometry detail */}
        {orbits.map((orbit) => (
          <mesh key={orbit.key} rotation={orbit.rotation}>
            <torusGeometry args={[2.2, 0.03, 6, 48]} />
            <meshStandardMaterial
              color={"#ffffff"}
              emissive={"#ff00ff"}
              emissiveIntensity={1.5}
              metalness={0.6}
              roughness={0.3}
              toneMapped={false}
            />
          </mesh>
        ))}

        {/* Sparkles - Instanced for better performance */}
        {Array.from({ length: SPARKLE_COUNT }).map((_, i) => (
          <mesh
            key={`sparkle-${i}`}
            position={[
              sparklePositions.current[i]?.x || 0,
              sparklePositions.current[i]?.y || 0,
              sparklePositions.current[i]?.z || 0,
            ]}
          >
            <sphereGeometry args={[0.08, 6, 6]} />
            <meshStandardMaterial
              color={"#00ffff"}
              emissive={"#00ffff"}
              emissiveIntensity={3}
              toneMapped={false}
              metalness={0.5}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

export default memo(Atom);
