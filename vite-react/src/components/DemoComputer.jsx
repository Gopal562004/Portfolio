import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const DemoComputer = ({ videoSrc }) => {
  const group = useRef();
  const { nodes } = useGLTF("/models/computer.glb");

  const videoRef = useRef(document.createElement("video"));

  useEffect(() => {
    const video = videoRef.current;

    video.src = videoSrc;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.play();

    const videoTexture = new THREE.VideoTexture(video);

    // Loop through nodes and replace the material of the screen mesh
    Object.values(nodes).forEach((node) => {
      if (node.type === "Mesh" && node.name.toLowerCase().includes("screen")) {
        node.material = new THREE.MeshBasicMaterial({ map: videoTexture });
      }
    });
  }, [nodes, videoSrc]);

  return (
    <group ref={group} dispose={null}>
      {Object.values(nodes).map((node, index) => {
        if (node.type === "Mesh") {
          return (
            <mesh
              key={index}
              geometry={node.geometry}
              material={node.material}
              castShadow
              receiveShadow
            />
          );
        }
        return null;
      })}
    </group>
  );
};

export default DemoComputer;
