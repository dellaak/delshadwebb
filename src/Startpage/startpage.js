import React from "react";
import { WrapperStart } from "./StyleStartpage";
import ChangeStartText from "./changeText";
import Skills from "../Skills/index";
import Portfolio from "../Portfolio/index";
import Contact from "../Contactme/index";

function StartPage() {
  return (
    <div>
      <WrapperStart>
        <ChangeStartText />
      </WrapperStart>
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default StartPage;
