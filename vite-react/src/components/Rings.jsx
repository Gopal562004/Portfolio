// import { Center, useTexture } from "@react-three/drei";
// import { useRef, useEffect } from "react";
// import { useFrame } from "@react-three/fiber";

// const Rings = ({ position = [-1, 15, -12] }) => {
//   const refList = useRef([]);
//   const texture = useTexture("models/textures/rings.png");

//   useEffect(() => {
//     if (refList.current.length === 0) return;

//     refList.current.forEach((r) => {
//       r.position.set(...position);
//     });
//   }, [position]);

//   useFrame(() => {
//     refList.current.forEach((r, index) => {
//       const direction = index % 2 === 0 ? 1 : -1; // Alternate direction
//       r.rotation.y += 0.05 * direction;
//       r.rotation.x += 0.03 * direction;
//     });
//   });

//   return (
//     <Center>
//       <group scale={5} rotation={[0, 1, 0]}>
//         {Array.from({ length: 4 }, (_, index) => (
//           <mesh
//             key={index}
//             ref={(el) =>
//               el && !refList.current.includes(el) && refList.current.push(el)
//             }
//           >
//             <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
//             <meshMatcapMaterial matcap={texture} toneMapped={false} />
//           </mesh>
//         ))}
//       </group>
//     </Center>
//   );
// };

// export default Rings;


import { Center, useTexture } from "@react-three/drei";
import { useRef, memo } from "react";
import { useFrame } from "@react-three/fiber";

const Rings = ({ position = [-1, 15, -12] }) => {
  const ringsRef = useRef([]);
  const texture = useTexture("models/textures/rings.png");

  useFrame(() => {
    // Simple loop optimization
    const rings = ringsRef.current;
    for (let i = 0; i < rings.length; i++) {
      const ring = rings[i];
      if (!ring) continue;

      const direction = i % 2 === 0 ? 1 : -1;
      ring.rotation.y += 0.05 * direction;
      ring.rotation.x += 0.03 * direction;
    }
  });

  return (
    <Center>
      <group scale={5} rotation={[0, 1, 0]}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh
            key={index}
            ref={(el) => {
              if (el && !ringsRef.current.includes(el)) {
                ringsRef.current.push(el);
                // Original position assignment
                el.position.set(...position);
              }
            }}
          >
            {/* Keep original geometry exactly as is */}
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default memo(Rings);
