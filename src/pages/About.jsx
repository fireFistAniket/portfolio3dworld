import React, { useRef, useState } from "react";
import Background from "../components/Background";
import AboutInformation from "../components/AboutInformation";

const About = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const informRef = useRef();
  const skyRef = useRef();
  return (
    <>
      <AboutInformation
        isScrolling={isScrolling}
        setIsScrolling={setIsScrolling}
        informRef={informRef}
      />
      <Background
        isScrolling={isScrolling}
        setIsScrolling={setIsScrolling}
        informRef={informRef}
        skyRef={skyRef}
      />
    </>
  );
};

export default About;
