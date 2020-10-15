import React, { useState, useEffect } from "react";
import { FormGroup } from "reactstrap";
import {
  StyledWrapDiv,
  StyledButton,
  StyledEmailDiv,
  StyledFormGroup,
  StyledMsgBox,
  StyledInput,
  StyledLabel,
  StyledIcon,
  StyledInfoDiv,
  StyledInfoText,
  StyledInfoIcon,
  StyledaTag,
  StyledForm,
  StyledSentDiv,
  StyledTopTitle,
  StyledH2,
  StyledDiv,
  StyledInputEmail,
} from "./StyledContact";
import envelope from "../images/envelope.svg";
import user from "../images/user.svg";
import smslogo from "../images/logo-sms.png";
import NetlifyForm from "react-ssg-netlify-forms";
import "./style.scss";

function ContactMe(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [send, setSend] = useState(false);
  const [emailVerify, setEmailVerify] = useState(false);
  const [nameVerify, setNameVerify] = useState(false);
  const [textVerify, setTextVerify] = useState(false);
  const [emailObj, setEmailObj] = useState({});

  useEffect(() => {
    setEmailObj({
      email,
      name,
      text,
    });
  }, [email, name, text]);

  const submitEmail = async (e) => {
    setSend(true);
    window.history.pushState("", "Meddelandet Skickat", "/");
  };

  const emailfunc = (e) => {
    let emailreg = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    let val = e.target.value.toLowerCase();

    if (emailreg.test(val)) {
      setEmailVerify(true);
    } else {
      setEmailVerify(false);
    }
  };

  const namefunc = (e) => {
    let val = e.target.value;
    let letters = /^[A-Za-z+\s]+$/;
    if (val.length > 1 && letters.test(val)) {
      setNameVerify(true);
    } else {
      setNameVerify(false);
    }
  };

  const textFunc = (e) => {
    let val = e.target.value;

    if (val.length > 2) {
      setTextVerify(true);
    } else {
      setTextVerify(false);
    }
  };
  return (
    <StyledDiv id="contactme">
      <StyledTopTitle>
        <StyledH2>Sugen på en egen hemsida? Kontakta mig </StyledH2>
      </StyledTopTitle>
      <StyledWrapDiv>
        {send ? (
          <StyledSentDiv>
            <StyledInfoText>Tack för ditt meddelande!</StyledInfoText>
            <StyledInfoText>Jag återkommer så fort jag kan.</StyledInfoText>
          </StyledSentDiv>
        ) : (
          <StyledEmailDiv>
            <NetlifyForm
              className="netlify"
              formName="contactme"
              formValues={emailObj}
              postSubmit={submitEmail}
            >
              <StyledFormGroup>
                <StyledLabel for="name">
                  <StyledIcon src={user} alt="user-icon" />
                </StyledLabel>
                <StyledInput
                  type="text"
                  name="name"
                  placeholder="Ditt namn (Krävs)"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value) + namefunc(e)}
                  colorprop={nameVerify ? 1 : 0}
                  autoComplete="off"
                />
              </StyledFormGroup>
              <StyledFormGroup>
                <StyledLabel for="email">
                  <StyledIcon src={envelope} alt="envelope-icon" />
                </StyledLabel>
                <StyledInputEmail
                  type="text"
                  name="email"
                  placeholder="Din emailadress (Krävs)"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value) + emailfunc(e)}
                  colorprop={emailVerify ? 1 : 0}
                  autoComplete="off"
                />
                <span></span>
              </StyledFormGroup>
              <FormGroup>
                <StyledLabel for="textarea">Ditt meddelande:</StyledLabel>
                <StyledMsgBox
                  type="textarea"
                  name="message"
                  value={text}
                  placeholder="Här skriver du ditt meddelande. Du kanske bara har en fråga eller kommentar. Hör av dig! Minst 3 tecken....."
                  onChange={(e) => setText(e.target.value) + textFunc(e)}
                  colorprop={textVerify ? 1 : 0}
                  autoComplete="off"
                />
              </FormGroup>
              <StyledButton
                onClick={submitEmail}
                disabled={
                  emailVerify && nameVerify && textVerify === true
                    ? false
                    : true
                }
              >
                Skicka meddelande
              </StyledButton>
            </NetlifyForm>
          </StyledEmailDiv>
        )}
        <StyledInfoDiv>
          <StyledInfoText>Tack för besöket!</StyledInfoText>
          <StyledInfoText>Följ mig på sociala medier!</StyledInfoText>
          <StyledInfoText>
            <a
              href="https://sharemysocials.com/delshad"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={smslogo} alt="smslogo" />
            </a>
          </StyledInfoText>
        </StyledInfoDiv>
      </StyledWrapDiv>
    </StyledDiv>
  );
}

export default ContactMe;
