import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

const HotAirBaloon = ({ baloonRef, actionRef }) => {
  const baloonTexture = useGLTF(`/models/baloon/scene.glb`);
  const { actions } = useAnimations(baloonTexture.animations, baloonRef);

  actionRef.current = actions;

  // useFrame((state, delta) => {
  //   if (baloonRef.current && islandRef.current) {
  //     // Calculate position on the circular path based on elapsed time
  //     const radius = 55;
  //     const speed = 0.3;
  //     const angle = state.clock.getElapsedTime() * speed;
  //     // Calculate polar coordinates
  //     const x = islandRef.current.position.x + radius * Math.cos(angle);
  //     const z = islandRef.current.position.z + radius * Math.sin(angle);
  //     // Set the ship's position
  //     baloonRef.current.position.set(x, 0, z);
  //     actions["FlyingLoop"].play();
  //     // Calculate angle between ship and island
  //     const angleToIsland = Math.atan2(
  //       islandRef.current.position.x - x,
  //       islandRef.current.position.z - z
  //     );
  //     camera.position.set(
  //       baloonRef.current.position.x + 5,
  //       baloonRef.current.position.y + 2,
  //       baloonRef.current.position.z + -15
  //     );
  //     // Set the ship's rotation based on its position relative to the island
  //     baloonRef.current.rotation.y = angleToIsland + Math.PI;
  //     camera.lookAt(baloonRef.current.position);
  //     controlRef.current && controlRef.current.update();
  //   }
  // });
  useEffect(() => {
    if (window.innerWidth <= 1281 && window.innerWidth >= 1023) {
      baloonRef.current.scale.set(0.8, 0.8, 0.8);
    } else if (window.innerWidth <= 1023 && window.innerWidth >= 767) {
      baloonRef.current.scale.set(0.65, 0.65, 0.65);
    } else if (window.innerWidth <= 767 && window.innerWidth >= 640) {
      baloonRef.current.scale.set(0.5, 0.5, 0.5);
    } else if (window.innerWidth < 640) {
      baloonRef.current.scale.set(0.4, 0.4, 0.4);
    }
  }, [baloonRef.current]);

  return (
    <mesh>
      <primitive
        ref={baloonRef}
        object={baloonTexture.scene}
        position={[0, 2, 35]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

export default HotAirBaloon;
