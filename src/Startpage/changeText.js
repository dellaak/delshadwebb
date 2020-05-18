import React from 'react';
import styled from 'styled-components';
import TextLoop from 'react-text-loop';

const StyledText = styled.div`
  display: flex;
  color: white;
  font-size: 1.5em;
  align-self: center;
  line-height: 2;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style: normal;
  text-shadow: 0.07em 0.07em 0 rgba(250, 250, 250, 0.1);
  flex: 1;
  justify-content: flex-end;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const StyledWrap = styled.div`
  display: inline-flex;
  margin: 0 auto;
  flex: 2;
`;

const StyledTextLoop = styled(TextLoop)`
  flex: 1;
  margin-left: 20px;
  display: flex;
  color: black;
  font-size: 1.5em;
  align-self: center;
  line-height: 2;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style: normal;
  text-shadow: 0.07em 0.07em 0 rgba(250, 250, 250, 0.1);
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const ChangeStartText = () => {
  return (
    <StyledWrap>
      <StyledText>Letar du efter</StyledText>{' '}
      <StyledTextLoop
        springConfig={{ stiffness: 280, damping: 8 }}
        interval={2000}
        children={[
          'en webbutvecklare?',
          ' en ny hemsida? ',
          'digitala lösningar?',
          'någon att fråga?',
        ]}
      />
    </StyledWrap>
  );
};

export default ChangeStartText;
