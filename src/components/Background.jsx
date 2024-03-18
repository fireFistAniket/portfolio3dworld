import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "./Loader";
import Sky from "../models/Sky";
import Planet from "../models/Planet";

const Background = ({ isScrolling, setIsScrolling, informRef, skyRef }) => {
  return (
    <Canvas camera={{ position: [0, 10, 55], fov: 60, near: 0.1, far: 1000 }}>
      <Suspense fallback={<Loader />}>
        <perspectiveCamera
          fov={75}
          near={0.1}
          far={1000}
          position={[0, 0, 0]}
          aspect={window.innerWidth / window.innerHeight}
        />
        <directionalLight intensity={2} position={[5, 5, 5]} />
        <Sky
          isScrolling={isScrolling}
          setIsScrolling={setIsScrolling}
          informRef={informRef}
          skyRef={skyRef}
        />
        <Planet />
      </Suspense>
    </Canvas>
  );
};

export default Background;
