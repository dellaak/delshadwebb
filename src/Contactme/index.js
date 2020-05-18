import React, { useState } from 'react';
import { FormGroup } from 'reactstrap';
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
} from './StyledContact';
import envelope from '../images/envelope.svg';
import user from '../images/user.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

function ContactMe(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [send, setSend] = useState(false);
  const [emailVerify, setEmailVerify] = useState(false);
  const [nameVerify, setNameVerify] = useState(false);
  const [textVerify, setTextVerify] = useState(false);

  const submitEmail = async e => {
    e.preventDefault();
    let obj = {
      name: name,
      email: email,
      text: text,
    };

    try {
      const data = await postData('/.netlify/functions/mailer');
      // JSON-string from `response.json()` call
    } catch (error) {
      console.error(error);
    }

    async function postData(url = '/.netlify/functions/mailer', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(obj), // body data type must match "Content-Type" header
      });
      // return await response.json(); // parses JSON response into native JavaScript objects
    }

    await setSend(true);
    window.history.pushState('', 'Meddelandet Skickat', '/');
  };

  const emailfunc = e => {
    let emailreg = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    let val = e.target.value.toLowerCase();

    if (emailreg.test(val)) {
      setEmailVerify(true);
    } else {
      setEmailVerify(false);
    }
  };

  const namefunc = e => {
    let val = e.target.value;
    let letters = /^[A-Za-z+\s]+$/;
    if (val.length > 1 && letters.test(val)) {
      setNameVerify(true);
    } else {
      setNameVerify(false);
    }
  };

  const textFunc = e => {
    let val = e.target.value;

    if (val.length > 2) {
      setTextVerify(true);
    } else {
      setTextVerify(false);
    }
  };
  return (
    <StyledDiv id="contact">
      <StyledTopTitle>
        <StyledH2>Sugen på en egen hemsida? Kontakta mig </StyledH2>
      </StyledTopTitle>
      <StyledWrapDiv>
        {/* {send ? (<StyledSentDiv><StyledInfoText>Tack för ditt meddelande!</StyledInfoText>
                <StyledInfoText>Jag återkommer så fort jag kan.</StyledInfoText>
            </StyledSentDiv>) : (
                    <StyledEmailDiv>
                        <StyledForm >
                            <StyledFormGroup>
                                <StyledLabel for="name"><StyledIcon src={user} alt="user-icon" /></StyledLabel>
                                <StyledInput type="text" id="name" placeholder="Ditt namn (Krävs)" value={name} required
                                    onChange={e => setName(e.target.value) + namefunc(e)} colorprop={nameVerify ? 1 : 0} autoComplete="off" />
                            </StyledFormGroup>
                            <StyledFormGroup>
                                <StyledLabel for="email"><StyledIcon src={envelope} alt="envelope-icon" /></StyledLabel>
                                <StyledInputEmail type="text" id="email" placeholder="Din emailadress (Krävs)" value={email} required
                                    onChange={e => setEmail(e.target.value) + emailfunc(e)} colorprop={emailVerify ? 1 : 0} autoComplete="off" /><span></span>
                            </StyledFormGroup>
                            <FormGroup>
                                <StyledLabel for="textarea">Ditt meddelande:</StyledLabel>
                                <StyledMsgBox type="textarea" name="textarea" id="textarea" value={text} placeholder="Här skriver du ditt meddelande. Du kanske bara har en fråga eller kommentar. Hör av dig! Minst 3 tecken....."
                                    onChange={e => setText(e.target.value) + textFunc(e)} colorprop={textVerify ? 1 : 0} autoComplete="off" />
                            </FormGroup>
                            <StyledButton onClick={submitEmail} type="submit" disabled={emailVerify && nameVerify && textVerify === true ? false : true} >Skicka meddelande</StyledButton>
                        </StyledForm>

                    </StyledEmailDiv>)} */}
        <StyledInfoDiv>
          <StyledInfoText>Tack för besöket!</StyledInfoText>
          <StyledInfoText>
            <StyledInfoIcon src={github} alt="github-icon" />{' '}
            <StyledaTag href="https://github.com/dellaak">Github</StyledaTag>
          </StyledInfoText>
          <StyledInfoText>
            <StyledInfoIcon src={linkedin} alt="linkedin-icon" />{' '}
            <StyledaTag href="https://www.linkedin.com/in/delshad-kogi/">
              LinkedIn
            </StyledaTag>
          </StyledInfoText>
          <StyledInfoText>
            <StyledInfoIcon src={envelope} alt="envelope-icon" />{' '}
            <StyledaTag href="mailto:delshad.kogi@gmail.com" target="_top">
              delshad.kogi@gmail.com
            </StyledaTag>
          </StyledInfoText>
          <StyledInfoText>Hör gärna av er!</StyledInfoText>
        </StyledInfoDiv>
      </StyledWrapDiv>
    </StyledDiv>
  );
}

export default ContactMe;
