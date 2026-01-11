// // import React, { useRef } from "react";
// // import { useGLTF, Float } from "@react-three/drei";

// // const Target = (props) => {
// //   const targetRef = useRef();
// //   const { scene } = useGLTF(
// //     "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
// //   );

// //   return (
// //     <Float
// //       speed={3} // a bit faster up/down oscillation
// //       rotationIntensity={1.2} // more visible subtle rotation
// //       floatIntensity={2.5} // more float movement
// //       floatingRange={[-0.6, 0.6]} // explicitly define vertical range
// //     >
// //       <primitive ref={targetRef} object={scene} {...props} />
// //     </Float>
// //   );
// // };

// // export default Target;
// import React, { useRef } from "react";
// import { useGLTF, Float } from "@react-three/drei";

// const Target = (props) => {
//   const targetRef = useRef();

//   const { scene } = useGLTF(
//     "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/WaterBottle/glTF/WaterBottle.gltf"
//   );

//   return (
//     <Float
//       speed={3}
//       rotationIntensity={1.2}
//       floatIntensity={2.5}
//       floatingRange={[-0.6, 0.6]}
//     >
//       <primitive ref={targetRef} object={scene} {...props} />
//     </Float>
//   );
// };

// export default Target;

// useGLTF.preload(
//   "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/WaterBottle/glTF/WaterBottle.gltf"
// );
import React, { useRef, useMemo, memo } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const MODEL_URL =
  "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/WaterBottle/glTF/WaterBottle.gltf";

const Target = (props) => {
  const targetRef = useRef();
  const groupRef = useRef();
  const frameCountRef = useRef(0);

  const { scene } = useGLTF(MODEL_URL);

  // Optimize scene on load
  const optimizedScene = useMemo(() => {
    if (!scene) return null;

    const clonedScene = scene.clone();

    clonedScene.traverse((child) => {
      if (child.isMesh) {
        // Enable frustum culling
        child.frustumCulled = true;

        // Optimize material
        if (child.material) {
          // Reduce material complexity for better performance
          child.material.metalness = 0.2;
          child.material.roughness = 0.8;
          child.material.envMapIntensity = 0.3;

          // Use medium precision
          child.material.precision = "mediump";
          child.material.needsUpdate = false;
        }
      }
    });

    return clonedScene;
  }, [scene]);

  // Add subtle rotation (optional)
  useFrame(() => {
    frameCountRef.current++;

    // Skip frames on slower devices
    if (frameCountRef.current % 3 === 0) return;

    if (groupRef.current) {
      // Very subtle rotation to make it feel alive
      groupRef.current.rotation.y += 0.002;
    }
  });

  if (!optimizedScene) return null;

  return (
    <Float
      speed={3}
      rotationIntensity={1.2}
      floatIntensity={2.5}
      floatingRange={[-0.6, 0.6]}
    >
      <group ref={groupRef}>
        <primitive ref={targetRef} object={optimizedScene} {...props} />
      </group>
    </Float>
  );
};

// Preload the model
useGLTF.preload(MODEL_URL);

export default memo(Target);
