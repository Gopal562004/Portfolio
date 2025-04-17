import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

const Atom = () => {
  const groupRef = useRef();
  const sparklesRef = useRef([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Rotate the whole atom
    groupRef.current.rotation.y = t * 0.3;

    // Animate sparkles (electrons)
    sparklesRef.current.forEach((s, i) => {
      const angle = t + i;
      s.position.x = Math.cos(angle) * 2.2;
      s.position.y = Math.sin(angle * 1.3) * 2.2;
      s.position.z = Math.sin(angle * 0.8) * 2.2;
    });
  });

  return (
    <Float
      speed={3} // faster oscillation
      rotationIntensity={1.2} // subtle rotation
      floatIntensity={2.5} // more float motion
      floatingRange={[-0.6, 0.6]} // up/down range
    >
      <group ref={groupRef} position={[95, 65, -40]} scale={[9, 9, 9]}>
        {/* Nucleus */}
        <mesh>
          <sphereGeometry args={[0.6, 64, 64]} />
          <meshStandardMaterial
            color={"#ffffff"}
            emissive={"#ff00ff"}
            emissiveIntensity={2.5}
            metalness={0.9}
            roughness={0.1}
            toneMapped={false}
          />
        </mesh>

        {/* Orbit Rings */}
        {[...Array(3)].map((_, i) => (
          <mesh rotation={[i * 0.6, i * 0.6, 0]} key={i}>
            <torusGeometry args={[2.2, 0.03, 16, 100]} />
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

        {/* Animated Sparkles */}
        {[...Array(12)].map((_, i) => (
          <mesh key={i} ref={(el) => (sparklesRef.current[i] = el)}>
            <sphereGeometry args={[0.08, 16, 16]} />
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

export { Atom };
