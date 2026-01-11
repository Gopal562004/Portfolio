// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

// const HackerRoom = () => {
//   const { scene } = useGLTF("/models/scene.gltf");
//   const groupRef = useRef();

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();
//     if (groupRef.current) {
//       groupRef.current.position.y = -60 + Math.sin(t) * 5; // floating up and down
//       groupRef.current.rotation.y = Math.sin(t / 2) * 0.1; // soft left-right yaw
//     }
//   });

//   if (!scene) return null;

//   return (
//     <group ref={groupRef}>
//       <primitive object={scene} scale={0.8} />
//     </group>
//   );
// };

// export default HackerRoom;

// // Preload the model
// useGLTF.preload("/models/scene.gltf");
import React, { useRef, useMemo, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const HackerRoom = () => {
  const { scene } = useGLTF("/models/scene.gltf");
  const groupRef = useRef();
  const frameRef = useRef(0);

  // Optimize by cloning once and freezing transformations
  const optimizedScene = useMemo(() => {
    if (!scene) return null;

    const clonedScene = scene.clone();

    // Freeze static parts of the scene for better performance
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        // Enable basic optimizations without changing appearance
        child.frustumCulled = true;
        child.matrixAutoUpdate = false;

        // Optional: Only update if material has transparency
        if (child.material && !child.material.transparent) {
          child.material.needsUpdate = false;
        }
      }
    });

    return clonedScene;
  }, [scene]);

  // Throttled animation for better performance
  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    frameRef.current++;
    // Only animate every other frame (still smooth at 30fps)
    if (frameRef.current % 2 === 0) return;

    const t = clock.getElapsedTime();
    const group = groupRef.current;

    // Exact same animation values
    group.position.y = -60 + Math.sin(t) * 5;
    group.rotation.y = Math.sin(t / 2) * 0.1;
  });

  if (!optimizedScene) return null;

  return (
    <group ref={groupRef}>
      <primitive object={optimizedScene} scale={0.8} />
    </group>
  );
};

// Preload the model
useGLTF.preload("/models/scene.gltf");

export default React.memo(HackerRoom);
