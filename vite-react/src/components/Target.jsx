import React, { useRef } from "react";
import { useGLTF, Float } from "@react-three/drei";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  return (
    <Float
      speed={3} // a bit faster up/down oscillation
      rotationIntensity={1.2} // more visible subtle rotation
      floatIntensity={2.5} // more float movement
      floatingRange={[-0.6, 0.6]} // explicitly define vertical range
    >
      <primitive ref={targetRef} object={scene} {...props} />
    </Float>
  );
};

export default Target;
