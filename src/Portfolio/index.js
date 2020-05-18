import React from 'react';
import {
  StyledWrapDiv,
  StyledTitle,
  Styledimg,
  StyledTitleDiv,
  StyledImgDiv,
  StyledImgText,
  StyledButton,
  StyledLink,
} from './StyledPortfolio';
import casinoniz from '../images/casinoniz.png';

function Portfolio() {
  return (
    <StyledWrapDiv id="portfolio">
      <StyledTitleDiv>
        <StyledTitle>Portfolio</StyledTitle>
      </StyledTitleDiv>
      <StyledImgDiv>
        <p>React.js - Reactstrap - SCSS</p>
        <Styledimg src={casinoniz} alt="casinoniz-img" />
        <StyledImgText>
          Ett litet hobbyprojekt jag har gjort. En casino affiliate sida.{' '}
          <StyledLink href="https://www.casinoniz.se/" target="_blank">
            <StyledButton>Besök sidan</StyledButton>
          </StyledLink>
        </StyledImgText>
      </StyledImgDiv>
    </StyledWrapDiv>
  );
}

export default Portfolio;
