// src/utils/preloadThree.js
import * as THREE from "three";

// Set global THREE to prevent multiple imports
if (typeof window !== "undefined") {
  window.THREE = THREE;
}

console.log("Three.js preloaded:", THREE.REVISION);
export default THREE;
