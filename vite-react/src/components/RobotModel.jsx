// RobotModel.jsx
import { useEffect } from "react";
import { useGLTF, useAnimations, Float } from "@react-three/drei";


export default function RobotModel(props) {
  const { scene, animations } = useGLTF("/models/robot-draco.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    actions.Idle?.play();
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  }, [actions, scene]);

  return (
    <Float
      speed={2}
      rotationIntensity={0}
      floatIntensity={1}
    >
      <primitive object={scene} scale={9} {...props} position={[60, -55, 20]} />
    </Float>
  );
}
