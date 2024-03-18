import React, { useRef } from "react";
import Background from "../components/Background";
import ProjectInformation from "../components/ProjectInformation";

const Project = () => {
  const informRef = useRef();
  const skyRef = useRef();
  return (
    <>
      <ProjectInformation informRef={informRef} />
      <Background informRef={informRef} skyRef={skyRef} />
    </>
  );
};

export default Project;
