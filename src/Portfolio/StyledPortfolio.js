import styled from 'styled-components';
import { Button } from 'reactstrap';

export const StyledWrapDiv = styled.div`
  padding: 65px 0;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: auto;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledTitleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledLink = styled.a`
  width: 100%;
`;

export const StyledButton = styled(Button)`
  max-width: 100%;
  margin-top: 10px;
  background-color: #01092c;
  color: white;
  width: 80%;
  height: 50px;
`;

export const StyledImgDiv = styled.div`
  display: flex;
  align-self: center;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 9px;
  flex-direction: column;
  max-width: 350px;
  -webkit-box-shadow: 4px -5px 19px -1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 4px -5px 19px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 4px -5px 19px -1px rgba(0, 0, 0, 0.5);
`;

export const StyledTitle = styled.h2`
  color: black;
  font-size: 2em;
  line-height: 2;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style: normal;
  text-shadow: 0.07em 0.07em 0 rgba(250, 250, 250, 0.1);
`;

export const Styledimg = styled.img`
  max-width: 300px;
  width: 100%;
  height: 300px;
`;

export const StyledImgText = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
