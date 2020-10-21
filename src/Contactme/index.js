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
import { useFormik } from "formik";
import "./style.scss";

function ContactMe(props) {
  const [emailVerify, setEmailVerify] = useState(false);
  const [nameVerify, setNameVerify] = useState(false);
  const [textVerify, setTextVerify] = useState(false);
  const [send, setSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const initialValues = {
    "form-name": "contactme",
    name: "",
    email: "",
    message: "",
  };

  const { values, setFieldValue, submitForm } = useFormik({
    initialValues,
    onSubmit: (values) =>
      handleSubmit(values).then(() => setLoading(false), setSend(true)),
  });

  const handleSubmit = (values) => {
    setLoading(true);
    const urlEncodedData = Object.entries(values)
      .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
      .join("&");
    return Promise.all([
      new Promise((res) => setTimeout(res, 1000)),
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlEncodedData,
      }),
    ]);
  };

  const handleChange = (name) => (e) => {
    if (name === "email") {
      setFieldValue(name, emailfunc(e.target.value), false);
    } else if (name === "name") {
      setFieldValue(name, nameFunc(e.target.value), false);
    } else if (name === "message") {
      setFieldValue(name, textFunc(e.target.value), false);
    }
  };

  const emailfunc = (e) => {
    let emailreg = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    let val = e.toLowerCase();

    if (emailreg.test(val)) {
      setEmailVerify(true);
    } else {
      setEmailVerify(false);
    }
    return val;
  };

  const nameFunc = (e) => {
    let val = e.replace(/^\s+/g, "");
    let letters = /^[A-Za-z+\s]+$/;
    if (e.length > 1 && letters.test(val)) {
      setNameVerify(true);
    } else {
      setNameVerify(false);
    }
    return val;
  };

  const textFunc = (e) => {
    let val = e.replace(/^\s+/g, "");
    let letters = /^[A-Za-z+\s]+$/;
    if (val.length > 2 && letters.test(val)) {
      setTextVerify(true);
    } else {
      setTextVerify(false);
    }
    return val;
  };
  return (
    <StyledDiv id="contactme">
      <input type="hidden" name="contactme" value="contactme" />
      <StyledTopTitle>
        <StyledH2>Sugen på en egen hemsida? Kontakta mig </StyledH2>
      </StyledTopTitle>

      <StyledWrapDiv>
        {send && !loading ? (
          <StyledSentDiv>
            <StyledInfoText>Tack för ditt meddelande!</StyledInfoText>
            <StyledInfoText>Jag återkommer så fort jag kan.</StyledInfoText>
          </StyledSentDiv>
        ) : (
          <StyledEmailDiv>
            <StyledForm data-netlify="true" data-netlify-honeypot="bot-field">
              <StyledFormGroup>
                <StyledLabel for="name">
                  <StyledIcon src={user} alt="user-icon" />
                </StyledLabel>
                <StyledInput
                  type="text"
                  name="name"
                  placeholder="Ditt namn (Krävs)"
                  value={values.name}
                  required
                  onChange={handleChange("name")}
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
                  value={values.email}
                  required
                  onChange={handleChange("email")}
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
                  value={values.message}
                  placeholder="Här skriver du ditt meddelande. Du kanske bara har en fråga eller kommentar. Hör av dig! Minst 3 tecken....."
                  onChange={handleChange("message")}
                  colorprop={textVerify ? 1 : 0}
                  autoComplete="off"
                />
              </FormGroup>
              <StyledButton
                onClick={submitForm}
                disabled={
                  emailVerify && nameVerify && textVerify && !loading === true
                    ? false
                    : true
                }
              >
                {loading ? (
                  <div class="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  " Skicka meddelande"
                )}
              </StyledButton>
            </StyledForm>
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
