import React, { useRef, useState } from "react";
import Background from "../components/Background";
import ContactInformation from "../components/ContactInformation";

const Contact = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const informRef = useRef();
  const skyRef = useRef();
  return (
    <>
      <ContactInformation
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

export default Contact;
