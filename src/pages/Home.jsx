import React, { Suspense, useRef, useState } from "react";
import Loader from "../components/Loader";
import { Canvas } from "@react-three/fiber";
import Island from "../models/Island";
import Sky from "../models/Sky";
import HotAirBaloon from "../models/HotAirBaloon";
import HomeNavPopup from "../components/HomeNavPopup";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(4);
  const [rotateFunction, setRotateFunction] = useState({});
  const [skyRotate, setSkyRotate] = useState(false);
  const islandRef = useRef();
  const baloonRef = useRef();
  const actionRef = useRef();
  const informRef = useRef();
  const skyRef = useRef();

  return (
    <>
      {currentStage && (
        <HomeNavPopup
          currentStage={currentStage}
          rotateFunction={rotateFunction}
        />
      )}
      <Canvas camera={{ position: [0, 10, 70], fov: 60, near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <perspectiveCamera
            fov={75}
            near={0.1}
            far={1000}
            position={[0, 0, 0]}
            aspect={window.innerWidth / window.innerHeight}
          />
          <directionalLight intensity={4} position={[5, 10, 5]} />
          <Sky informRef={informRef} skyRef={skyRef} />
          <Island
            islandRef={islandRef}
            baloonRef={baloonRef}
            actionRef={actionRef}
            skyRef={skyRef}
            setCurrentStage={setCurrentStage}
            setRotateFunction={setRotateFunction}
          />
          <HotAirBaloon
            baloonRef={baloonRef}
            islandRef={islandRef}
            actionRef={actionRef}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Home;
