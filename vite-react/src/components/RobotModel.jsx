// // RobotModel.jsx
// import { useEffect } from "react";
// import { useGLTF, useAnimations, Float } from "@react-three/drei";


// export default function RobotModel(props) {
//   const { scene, animations } = useGLTF("/models/robot-draco.glb");
//   const { actions } = useAnimations(animations, scene);

//   useEffect(() => {
//     actions.Idle?.play();
//     scene.traverse(
//       (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
//     );
//   }, [actions, scene]);

//   return (
//     <Float
//       speed={2}
//       rotationIntensity={0}
//       floatIntensity={1}
//     >
//       <primitive object={scene} scale={9} {...props} position={[60, -55, 20]} />
//     </Float>
//   );
// }
import { useRef, useMemo, memo } from "react";
import { useGLTF, useAnimations, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const RobotModel = (props) => {
  const { scene, animations } = useGLTF("/models/robot-draco.glb");
  const { actions } = useAnimations(animations, scene);
  const groupRef = useRef();
  const frameCountRef = useRef(0);

  // Optimize scene on load
  const optimizedScene = useMemo(() => {
    if (!scene) return null;

    const clonedScene = scene.clone();

    clonedScene.traverse((child) => {
      if (child.isMesh) {
        // Enable shadow casting but with optimizations
        child.castShadow = true;
        child.receiveShadow = true;
        child.frustumCulled = true; // Important for performance

        // Optimize material settings
        if (child.material) {
          // Keep shadows but optimize material
          child.material.metalness = 0.3;
          child.material.roughness = 0.7;
          child.material.envMapIntensity = 0.5;

          // Reduce precision for performance
          child.material.precision = "mediump";
          child.material.needsUpdate = false;
        }
      }
    });

    return clonedScene;
  }, [scene]);

  // Setup animation once
  useMemo(() => {
    if (actions.Idle) {
      actions.Idle.play();

      // Optimize animation settings
      actions.Idle.timeScale = 0.8; // Slightly slower animation
      actions.Idle.clampWhenFinished = true;
      actions.Idle.loop = THREE.LoopRepeat;
    }
  }, [actions]);

  // Optimize animation loop with frame skipping
  useFrame(() => {
    frameCountRef.current++;

    // Skip frames on slower devices (20fps animation instead of 60fps)
    if (frameCountRef.current % 3 === 0) return;

    // Animation continues automatically via useAnimations
  });

  if (!optimizedScene) return null;

  return (
    <Float
      speed={2}
      rotationIntensity={0}
      floatIntensity={1}
      floatingRange={[-0.3, 0.3]} // Reduced range for performance
    >
      <group ref={groupRef}>
        <primitive
          object={optimizedScene}
          scale={9}
          {...props}
          position={[60, -55, 20]}
        />
      </group>
    </Float>
  );
};

// Preload the model
useGLTF.preload("/models/robot-draco.glb");

export default memo(RobotModel);
