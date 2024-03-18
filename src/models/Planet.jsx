import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

const Planet = () => {
  const planetRef = useRef();
  const planetTexture = useGLTF(`/models/planet/fractured_planet.glb`);
  useEffect(() => {
    if (window.innerWidth <= 768 && window.innerWidth >= 640) {
      planetRef.current.scale.set(6, 6, 6);
    } else if (window.innerWidth <= 640) {
      planetRef.current.scale.set(4, 4, 4);
      planetRef.current.position.set(0, 0, 0);
    }
  }, [planetRef.current]);

  useFrame(() => {
    planetRef.current.rotation.y += 0.005 * (Math.PI / 4);
  });
  return (
    <mesh>
      <primitive
        ref={planetRef}
        object={planetTexture.scene}
        scale={[8, 8, 8]}
        roughness={0.5}
        metalness={0.1}
        position={[0, 0, 0]}
      />
    </mesh>
  );
};

export default Planet;
