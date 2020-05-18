import styled from 'styled-components';
import img from '../images/della.png';

export const StyledWrapper = styled.div`
  background: #01092c;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
`;

export const StyledTopTitle = styled.div`
  background: #01092c;
  display: flex;
  width: 100vw;
  justify-content: center;
  padding: 65px 0 20px 0;
`;

export const StyledH1 = styled.h1`
  color: white;
  font-size: 1.6rem;
  line-height: 2;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style: normal;
  text-shadow: 0.07em 0.07em 0 rgba(250, 250, 250, 0.1);
`;

export const StyledImgHolder = styled.div`
  background-image: url(${img});
  background-size: contain;
  border-radius: 50%;
  margin: 0 auto;
  width: 250px;
  height: 250px;
`;

export const StyledInfoDiv = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

export const StyledSkillsDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledFrontEndDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 70%;
  height: 250px;
  border: 1px solid black;
  min-width: 200px;
`;

export const StyledBackEndDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: white;
  width: 70%;
  min-width: 200px;
  border: 1px solid black;
  margin: 20px 0;
`;

export const StyledInfoText = styled.p`
  padding: 30px;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2em;
  text-align: center;
  line-height: 2;
`;

export const StyledBoxTitle = styled.h5`
  margin-top: 10px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  color: black;
  font-size: 1em;
  align-self: center;
  line-height: 2;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style: normal;
  text-shadow: 0.07em 0.07em 0 rgba(250, 250, 250, 0.1);
`;

export const StyledSkillText = styled.p`
  margin: 0;
  padding: 20px;
  color: black;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2em;
  text-align: center;
  line-height: 2;
`;

export const StyledIcon = styled.img`
  margin-left: 10px;
`;
