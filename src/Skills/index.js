import React from "react";
import {
  StyledWrapper,
  StyledInfoText,
  StyledInfoDiv,
  StyledSkillsDiv,
  StyledImgHolder,
  StyledFrontEndDiv,
  StyledBackEndDiv,
  StyledBoxTitle,
  StyledSkillText,
  StyledIcon,
  StyledTopTitle,
  StyledH1,
} from "./StyledSkills";
import codeimg from "../images/code.svg";
import dbimg from "../images/database.svg";

function Skills() {
  return (
    <div id="aboutme">
      <StyledTopTitle>
        <StyledH1>webbutvecklare</StyledH1>
      </StyledTopTitle>
      <StyledWrapper>
        <StyledInfoDiv>
          <StyledImgHolder />
          <StyledInfoText>
            Hej! Mitt namn är Delshad Kogi och jag är just nu anställd på{" "}
            <a href="https://www.geshdo.com">GESHDO</a> som fullstack
            utvecklare.
          </StyledInfoText>{" "}
          <StyledInfoText>
            Jag har ett stort intresse för programmering och älskar att jobba på
            nya projekt och ta på mig utmaningar. Jag är van att jobba med
            versionshantering Git, samt arbeta agilt.
          </StyledInfoText>{" "}
          <StyledInfoText>Hör gärna av er till mig!</StyledInfoText>
        </StyledInfoDiv>
        <StyledSkillsDiv>
          <StyledFrontEndDiv>
            <StyledBoxTitle>
              Frontend
              <StyledIcon src={codeimg} alt="codeimg" />{" "}
            </StyledBoxTitle>
            <StyledSkillText>
              React.js • HTML5 • Styled Components • CSS • SCSS • jQuery •
              Bootstrap • Material UI • Redux • Angular 2-7 • Typescript • Vue
            </StyledSkillText>
          </StyledFrontEndDiv>
          <StyledBackEndDiv>
            <StyledBoxTitle>
              {" "}
              Backend
              <StyledIcon src={dbimg} alt="dbimg" />
            </StyledBoxTitle>
            <StyledSkillText>
              Node.js • MongoDB • Express • Moongose • Postgresql •
              Microservices • Integrationer av api • AWS{" "}
            </StyledSkillText>
          </StyledBackEndDiv>
        </StyledSkillsDiv>
      </StyledWrapper>
    </div>
  );
}

export default Skills;
