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
  StyledWrapProjects,
} from './StyledPortfolio';
import casinoniz from '../images/casinoniz.png';
import smsex from '../images/smsex.png';

function Portfolio() {
  return (
    <StyledWrapDiv id="portfolio">
      <StyledTitleDiv>
        <StyledTitle>Portfolio</StyledTitle>
      </StyledTitleDiv>
      <StyledWrapProjects>
        <StyledImgDiv>
          <p>React.js - Material-UI - SCSS- Stripe - Microservices - Redux</p>
          <Styledimg src={smsex} alt="casinoniz-img" />
          <StyledImgText>
            Hobbyprojekt - En sida där man samlar sina sociala medier och får en
            qr-kod för varje profil.{' '}
            <StyledLink href="https://www.sharemysocials.com/" target="_blank">
              <StyledButton>Besök sidan</StyledButton>
            </StyledLink>
          </StyledImgText>
        </StyledImgDiv>
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
      </StyledWrapProjects>
    </StyledWrapDiv>
  );
}

export default Portfolio;
