import { Player } from "@lottiefiles/react-lottie-player";
import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center min-h-full w-screen">
        <Player
          autoplay
          loop
          src="https://lottie.host/f56e4d95-0b8b-4614-8696-d81169a4bebe/Qomv2HnaLB.json"
          className="sm:w-[20vw] w-[40vw]"
        ></Player>
        <h1 className="text-base font-bold capitalize">loading</h1>
      </div>
    </Html>
  );
};

export default Loader;
