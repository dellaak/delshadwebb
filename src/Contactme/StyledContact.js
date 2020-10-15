import styled from "styled-components";
import { Input, Label, FormGroup, Button, Form } from "reactstrap";

export const StyledWrapDiv = styled.div`
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledDiv = styled.div`
  background: #01092c;
  padding-bottom: 50px;
`;

export const StyledTopTitle = styled.div`
  background: #01092c;
  display: flex;
  width: 100vw;
  justify-content: center;
  padding: 65px 0 10px 0;
  margin-top: 20px;
`;

export const StyledH2 = styled.h2`
  color: white;
  font-size: 1.4rem;
  line-height: 2;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style: normal;
  text-shadow: 0.07em 0.07em 0 rgba(250, 250, 250, 0.1);
  text-align: center;
`;

export const StyledEmailDiv = styled.div`
  background: #01092c;
  display: flex;
  flex: 1;
  height: auto;
  justify-content: center;
  padding-top: 50px;

  @media screen and (max-width: 600px) {
    width: 100vw !important;
  }
`;

export const StyledSentDiv = styled.div`
  background: #01092c;
  display: flex;
  flex: 1;
  height: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100vw !important;
  }
`;
export const StyledInfoDiv = styled.div`
  background: #01092c;
  display: flex;
  flex: 1;
  height: auto;
  justify-content: flex-start;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
`;

export const StyledInfoText = styled.p`
  color: #fff;
  font-size: 22px;
  font-family: "Josefin Sans", sans-serif;
  img {
    width: 100px;
  }
`;

export const StyledInfoIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
`;
export const StyledFormGroup = styled(FormGroup)`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  padding: 10px;
`;

export const StyledInput = styled(Input)`
  background-color: ${(props) =>
    props.colorprop ? "#d8fced" : "#eee"} !important;
  color: #000;
  outline: none;
  outline-style: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid #fff 2px;
  padding: 3px 10px;
  height: 50px;
  width: 50%;
  max-width: 100%;
  margin-bottom: 20px;
  ::placeholder {
    color: #000;
  }
`;

export const StyledInputEmail = styled(Input)`
  background-color: ${(props) =>
    props.colorprop ? "#d8fced" : "#eee"} !important;
  color: #000;
  outline: none;
  outline-style: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid #fff 2px;
  padding: 3px 10px;
  height: 50px;
  width: 50%;
  max-width: 100%;
  margin-bottom: 20px;
  ::placeholder {
    color: #000;
  }
`;

export const StyledMsgBox = styled(Input)`
  background-color: ${(props) =>
    props.colorprop ? "#d8fced" : "#eee"} !important;
  border: 2px solid black;
  background: #eee;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  height: 100px !important;
  resize: none;
  color: black;
  ::placeholder {
    color: #323232 !important;
  }
`;
export const StyledLabel = styled(Label)`
  color: #fff;
  height: 20px;
  margin-right: 40px;
`;

export const StyledaTag = styled.a`
  color: #cca909;
  text-decoration: none;
`;

export const StyledButton = styled(Button)`
  outline: none;
  font-family: "Josefin Sans", sans-serif;
  background-color: #fed100 !important;
  color: #000 !important;
  height: 60px;
  width: 100%;
  margin: 20px 0 50px 0;
  font-size: 26px !important;
  border: none !important;
  cursor: pointer;
`;
