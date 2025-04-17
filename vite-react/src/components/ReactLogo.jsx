// ReactLogo.jsx
import React from "react";
import { useGLTF, Float } from "@react-three/drei";

const ReactLogo = (props) => {
  const { scene } = useGLTF("/models/react_logo.glb");

  return (
    <Float
      speed={3}
      rotationIntensity={1.2}
      floatIntensity={2.5}
      floatingRange={[-0.6, 0.6]}
    >
      <primitive
        object={scene}
        rotation={[0, 1, Math.PI / 8]} // side-to-side tilt
        {...props}
      />
    </Float>
  );
};

export default ReactLogo;
