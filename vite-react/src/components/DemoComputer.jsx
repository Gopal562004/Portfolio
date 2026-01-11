// // // import { useRef, useEffect } from "react";
// // // import { useGLTF } from "@react-three/drei";
// // // import * as THREE from "three";

// // // const DemoComputer = ({ videoSrc }) => {
// // //   const group = useRef();
// // //   const { nodes } = useGLTF("/models/computer.glb");

// // //   const videoRef = useRef(document.createElement("video"));

// // //   useEffect(() => {
// // //     const video = videoRef.current;

// // //     video.src = videoSrc;
// // //     video.crossOrigin = "anonymous";
// // //     video.loop = true;
// // //     video.muted = true;
// // //     video.playsInline = true;
// // //     video.play();

// // //     const videoTexture = new THREE.VideoTexture(video);

// // //     // Loop through nodes and replace the material of the screen mesh
// // //     Object.values(nodes).forEach((node) => {
// // //       if (node.type === "Mesh" && node.name.toLowerCase().includes("screen")) {
// // //         node.material = new THREE.MeshBasicMaterial({ map: videoTexture });
// // //       }
// // //     });
// // //   }, [nodes, videoSrc]);

// // //   return (
// // //     <group ref={group} dispose={null}>
// // //       {Object.values(nodes).map((node, index) => {
// // //         if (node.type === "Mesh") {
// // //           return (
// // //             <mesh
// // //               key={index}
// // //               geometry={node.geometry}
// // //               material={node.material}
// // //               castShadow
// // //               receiveShadow
// // //             />
// // //           );
// // //         }
// // //         return null;
// // //       })}
// // //     </group>
// // //   );
// // // };

// // // export default DemoComputer;
// // import { useRef, useEffect, useState } from "react";
// // import { useGLTF } from "@react-three/drei";
// // //import * as THREE from "three";

// // const DemoComputer = ({ videoSrc }) => {
// //   const group = useRef();
// //   const { nodes } = useGLTF("/models/computer.glb");

// //   const [videoTexture, setVideoTexture] = useState(null);

// //   useEffect(() => {
// //     const video = document.createElement("video");
// //     video.src = videoSrc;
// //     video.loop = true;
// //     video.muted = true;
// //     video.playsInline = true;
// //     video.crossOrigin = "anonymous";

// //     // 🔥 WAIT UNTIL THE FIRST FRAME LOADS
// //     video.onloadeddata = () => {
// //       video.play();
// //       const texture = new THREE.VideoTexture(video);
// //       setVideoTexture(texture); // set only when ready
// //     };
// //   }, [videoSrc]);

// //   // 🔥 DO NOT RENDER COMPUTER UNTIL VIDEO TEXTURE IS READY
// //   if (!videoTexture) return null;

// //   // Apply video texture to screen mesh
// //   Object.values(nodes).forEach((node) => {
// //     if (node.type === "Mesh" && node.name.toLowerCase().includes("screen")) {
// //       node.material = new THREE.MeshBasicMaterial({ map: videoTexture });
// //     }
// //   });

// //   return (
// //     <group ref={group} dispose={null}>
// //       {Object.values(nodes).map((node, index) => {
// //         if (node.type === "Mesh") {
// //           return (
// //             <mesh
// //               key={index}
// //               geometry={node.geometry}
// //               material={node.material}
// //               castShadow
// //               receiveShadow
// //             />
// //           );
// //         }
// //         return null;
// //       })}
// //     </group>
// //   );
// // };

// // export default DemoComputer;
// // components/DemoComputer.jsx
// import { useRef, useEffect, useState, useMemo, memo } from "react";
// import { useGLTF } from "@react-three/drei";
// //import * as THREE from "three";

// const DemoComputer = ({ videoSrc }) => {
//   const group = useRef();
//   const videoRef = useRef();
//   const { nodes } = useGLTF("/models/computer.glb");
//   const [videoTexture, setVideoTexture] = useState(null);
//   const [hasError, setHasError] = useState(false);

//   // Memoize nodes array
//   const nodeArray = useMemo(() => Object.values(nodes), [nodes]);

//   // Find screen mesh efficiently
//   const screenMesh = useMemo(() => {
//     return nodeArray.find(node => 
//       node.type === "Mesh" && node.name.toLowerCase().includes("screen")
//     );
//   }, [nodeArray]);

//   // Setup video texture
//   useEffect(() => {
//     if (!videoSrc || hasError) return;

//     const video = document.createElement("video");
//     videoRef.current = video;
    
//     video.src = videoSrc;
//     video.loop = true;
//     video.muted = true;
//     video.playsInline = true;
//     video.crossOrigin = "anonymous";
//     video.preload = "metadata";
    
//     const handleCanPlay = () => {
//       video.play().catch(e => {
//         console.warn("Video autoplay failed:", e);
//         setHasError(true);
//       });
      
//       const texture = new THREE.VideoTexture(video);
      
//       // Optimize texture
//       texture.minFilter = THREE.LinearFilter;
//       texture.magFilter = THREE.LinearFilter;
//       texture.generateMipmaps = false;
      
//       setVideoTexture(texture);
      
//       // Apply to screen mesh
//       if (screenMesh) {
//         const originalMaterial = screenMesh.material;
//         const videoMaterial = new THREE.MeshBasicMaterial({ 
//           map: texture,
//           side: THREE.FrontSide
//         });
//         screenMesh.material = videoMaterial;
        
//         // Store original for cleanup
//         screenMesh.userData = { originalMaterial };
//       }
//     };

//     const handleError = () => {
//       console.error("Failed to load video");
//       setHasError(true);
//     };

//     video.addEventListener('canplay', handleCanPlay);
//     video.addEventListener('error', handleError);
//     video.load();

//     // Cleanup
//     return () => {
//       if (videoRef.current) {
//         videoRef.current.removeEventListener('canplay', handleCanPlay);
//         videoRef.current.removeEventListener('error', handleError);
//         videoRef.current.pause();
//         videoRef.current.src = '';
//       }
      
//       if (videoTexture) {
//         videoTexture.dispose();
//       }
      
//       // Restore original material
//       if (screenMesh?.userData?.originalMaterial) {
//         screenMesh.material = screenMesh.userData.originalMaterial;
//       }
//     };
//   }, [videoSrc, hasError, screenMesh]);

//   // Don't render until ready
//   if (!videoTexture && !hasError) {
//     return null;
//   }

//   // Fallback material if video fails
//   if (hasError && screenMesh) {
//     screenMesh.material = new THREE.MeshBasicMaterial({ 
//       color: 0x2563eb,
//       emissive: 0x3b82f6,
//       emissiveIntensity: 0.2
//     });
//   }

//   return (
//     <group ref={group} dispose={null}>
//       {nodeArray.map((node, index) => {
//         if (node.type !== "Mesh") return null;
        
//         return (
//           <mesh
//             key={`${node.name}-${index}`}
//             geometry={node.geometry}
//             material={node.material}
//             castShadow={!node.name.toLowerCase().includes("screen")}
//             receiveShadow={!node.name.toLowerCase().includes("screen")}
//             frustumCulled={true}
//           />
//         );
//       })}
//     </group>
//   );
// };

// // Preload the model
// useGLTF.preload("/models/computer.glb");

// export default memo(DemoComputer);

import { useRef, useEffect, useState, useMemo, memo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const DemoComputer = ({ videoSrc }) => {
  const group = useRef();
  const videoRef = useRef();
  const { nodes } = useGLTF("/models/computer.glb");
  const [videoTexture, setVideoTexture] = useState(null);
  const [hasError, setHasError] = useState(false);

  // Memoize nodes array
  const nodeArray = useMemo(() => Object.values(nodes), [nodes]);

  // Find screen mesh efficiently
  const screenMesh = useMemo(() => {
    return nodeArray.find(
      (node) =>
        node.type === "Mesh" && node.name.toLowerCase().includes("screen")
    );
  }, [nodeArray]);

  // Setup video texture with lower contrast
  useEffect(() => {
    if (!videoSrc || hasError) return;

    const video = document.createElement("video");
    videoRef.current = video;

    video.src = videoSrc;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";
    video.preload = "metadata";

    // Adjust video properties for lower contrast
    video.style.filter = "brightness(0.9) contrast(0.9)"; // CSS filter for lower contrast

    const handleCanPlay = () => {
      video.play().catch((e) => {
        console.warn("Video autoplay failed:", e);
        setHasError(true);
      });

      const texture = new THREE.VideoTexture(video);

      // Optimize texture with lower brightness/contrast
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      setVideoTexture(texture);

      // Apply to screen mesh with lower contrast material
      if (screenMesh) {
        const originalMaterial = screenMesh.material;
        const videoMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.FrontSide,
          // Lower contrast/brightness settings
          color: new THREE.Color(0x7f7f7f), // Gray tint for lower contrast
          transparent: true,
          opacity: 0.95, // Slightly transparent
        });

        // Apply post-processing effect for lower contrast
        videoMaterial.onBeforeCompile = (shader) => {
          // Add fragment shader modification to reduce contrast
          shader.fragmentShader = shader.fragmentShader.replace(
            "#include <color_fragment>",
            `
            #include <color_fragment>
            // Reduce contrast and brightness
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.5), 0.2);
            diffuseColor.rgb *= 0.9; // Reduce brightness
            `
          );
        };

        screenMesh.material = videoMaterial;

        // Store original for cleanup
        screenMesh.userData = { originalMaterial };
      }
    };

    const handleError = () => {
      console.error("Failed to load video");
      setHasError(true);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);
    video.load();

    // Cleanup
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("canplay", handleCanPlay);
        videoRef.current.removeEventListener("error", handleError);
        videoRef.current.pause();
        videoRef.current.src = "";
      }

      if (videoTexture) {
        videoTexture.dispose();
      }

      // Restore original material
      if (screenMesh?.userData?.originalMaterial) {
        screenMesh.material = screenMesh.userData.originalMaterial;
      }
    };
  }, [videoSrc, hasError, screenMesh]);

  // Don't render until ready
  if (!videoTexture && !hasError) {
    return null;
  }

  // Fallback material if video fails - with lower contrast
  if (hasError && screenMesh) {
    const fallbackMaterial = new THREE.MeshBasicMaterial({
      color: 0x3a506b, // Darker blue-gray
      emissive: 0x2563eb, // Muted blue
      emissiveIntensity: 0.1, // Very low emission
      transparent: true,
      opacity: 0.8,
    });

    screenMesh.material = fallbackMaterial;
  }

  return (
    <group ref={group} dispose={null}>
      {nodeArray.map((node, index) => {
        if (node.type !== "Mesh") return null;

        // Apply different materials based on mesh type
        let material = node.material;

        // Reduce contrast for all computer materials
        if (material && !node.name.toLowerCase().includes("screen")) {
          // Clone material to avoid affecting other instances
          const clonedMaterial = material.clone();

          // Adjust material properties for lower contrast
          clonedMaterial.color.multiplyScalar(0.85); // Darker
          clonedMaterial.emissiveIntensity = Math.max(
            0,
            clonedMaterial.emissiveIntensity - 0.2
          );

          material = clonedMaterial;
        }

        return (
          <mesh
            key={`${node.name}-${index}`}
            geometry={node.geometry}
            material={material}
            castShadow={!node.name.toLowerCase().includes("screen")}
            receiveShadow={!node.name.toLowerCase().includes("screen")}
            frustumCulled={true}
          />
        );
      })}
    </group>
  );
};

// Preload the model
useGLTF.preload("/models/computer.glb");

export default memo(DemoComputer);
