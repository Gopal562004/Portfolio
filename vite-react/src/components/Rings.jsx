// // ReactLogo.jsx
// import React from "react";
// import { useGLTF, Float } from "@react-three/drei";

// const ReactLogo = (props) => {
//   const { scene } = useGLTF("/models/react_logo.glb");

//   return (
//     <Float
//       speed={3}
//       rotationIntensity={1.2}
//       floatIntensity={2.5}
//       floatingRange={[-0.6, 0.6]}
//     >
//       <primitive
//         object={scene}
//         rotation={[0, 1, Math.PI / 8]} // side-to-side tilt
//         {...props}
//       />
//     </Float>
//   );
// };

// export default ReactLogo;
import React, { useRef, useMemo, memo } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ReactLogo = (props) => {
  const { scene } = useGLTF("/models/react_logo.glb");
  const groupRef = useRef();

  // Clone scene once to avoid mutating the original
  const clonedScene = useMemo(() => {
    if (!scene) return null;
    const clone = scene.clone();

    // Enable frustum culling on all child meshes
    clone.traverse((child) => {
      if (child.isMesh) {
        child.frustumCulled = true;
      }
    });

    return clone;
  }, [scene]);

  // Add subtle rotation animation
  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    // Very subtle rotation to make it feel alive
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.05;
  });

  if (!clonedScene) return null;

  return (
    <Float
      speed={3}
      rotationIntensity={1.2}
      floatIntensity={2.5}
      floatingRange={[-0.6, 0.6]}
    >
      <group
        ref={groupRef}
        rotation={[0, 1, Math.PI / 8]} // Original side-to-side tilt
        {...props}
      >
        <primitive object={clonedScene} />
      </group>
    </Float>
  );
};

// Preload the model for better performance
useGLTF.preload("/models/react_logo.glb");

export default memo(ReactLogo);
