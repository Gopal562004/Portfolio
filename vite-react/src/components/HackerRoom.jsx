import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const HackerRoom = () => {
  const { scene } = useGLTF("/models/scene.gltf");
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = -60 + Math.sin(t) * 5; // floating up and down
      groupRef.current.rotation.y = Math.sin(t / 2) * 0.1; // soft left-right yaw
    }
  });

  if (!scene) return null;

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={0.8} />
    </group>
  );
};

export default HackerRoom;

// Preload the model
useGLTF.preload("/models/scene.gltf");
