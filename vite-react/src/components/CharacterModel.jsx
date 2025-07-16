// // // CharacterModel.jsx
// // import React, { Suspense } from "react";
// // import { Canvas } from "@react-three/fiber";
// // import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

// // const Character = () => {
// //   const gltf = useGLTF("/models/char_gopal.glb");
// //   return <primitive object={gltf.scene} scale={1.5} position={[0, -1, 0]} />;
// // };

// // const CharacterModel = () => {
// //   return (
// //     <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
// //       {/* Soft ambient light to brighten the scene evenly */}
// //       <ambientLight intensity={0} />

// //       {/* A mild hemisphere light for more subtle lighting */}
// //       <hemisphereLight
// //         skyColor="#ffffff"
// //         groundColor="#f0f0f0"
// //         intensity={0}
// //       />

// //       {/* Directional lights with lower intensity for a gentle effect */}
// //       <directionalLight position={[5, 5, 5]} intensity={0} />
// //       <directionalLight position={[-5, 5, -5]} intensity={0} />
// //       <directionalLight position={[0, 5, -5]} intensity={0} />

// //       {/* Optional: Environment for soft global light bounce (studio look) */}
// //       <Environment preset="studio" />

// //       <Suspense fallback={null}>
// //         <Character />
// //         <OrbitControls enableZoom={false} />
// //       </Suspense>
// //     </Canvas>
// //   );
// // };

// // export default CharacterModel;
//  // CharacterModel.jsx
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

// const Character = () => {
//   const gltf = useGLTF("/models/char_gopal.glb");
//   return <primitive object={gltf.scene} scale={1.5} position={[0, -1, 0]} />;
// };

// const CharacterModel = () => {
//   return (
//     <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
//       {/* Only environment light — no ambient, hemisphere, or directional lights */}

//       <Suspense fallback={null}>
//         <Character />
//         {/* <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} /> */}

//         {/* Use a soft lighting environment */}
//         <Environment preset="apartment" background={false} />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default CharacterModel;
// CharacterModel.jsx
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";

const Character = () => {
  const gltf = useGLTF("/models/char_gopal.glb");
  const modelRef = useRef();

  // Auto-spin using useFrame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // adjust speed here
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={1.5}
      position={[0, -1, 0]}
    />
  );
};

const CharacterModel = () => {
  return (
    <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
      <Suspense fallback={null}>
        <Character />
        <Environment preset="apartment" background={false} />
      </Suspense>
    </Canvas>
  );
};

export default CharacterModel;
