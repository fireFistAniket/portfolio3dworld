import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

const Sky = ({ informRef, skyRef }) => {
  const skyTexture = useGLTF(`/models/sky/scene.glb`);

  useEffect(() => {
    if (!informRef.current) {
      return;
    }
    const handleScroll = () => {
      // Calculate scroll position within the inner div
      const scrollYWithinInner = informRef.current.scrollTop * 0.1;

      // Update the rotation of the sky based on the scroll position within the inner div
      skyRef.current.rotation.x =
        (scrollYWithinInner / informRef.current.clientHeight) * Math.PI * 4;
    };

    // Attach the scroll event listener to the inner div
    informRef.current.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      informRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [informRef.current]);

  useFrame(() => {
    if (informRef.current && skyRef.current) {
      const scrollYWithinInner = informRef.current.scrollTop * 0.1;

      // Update the rotation of the sky based on the scroll position within the inner div
      skyRef.current.rotation.x =
        (scrollYWithinInner / informRef.current.clientHeight) * Math.PI * 4;
    }
  });

  return (
    <mesh>
      <primitive
        object={skyTexture.scene}
        position={[0, 0, -10]}
        scale={[100, 100, 100]}
        ref={skyRef}
      />
    </mesh>
  );
};

export default Sky;
