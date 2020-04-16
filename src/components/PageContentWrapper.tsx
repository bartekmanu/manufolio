import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const LeftSide = styled.div`
  width: 50%;
`;

const RightSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageContentWrapper: React.FC = () => (
  <ContentWrapper>
    <LeftSide>
      {/* <PageHomeTitle /> */}
      <div>
        <p>test</p>
      </div>
    </LeftSide>
    <RightSide>
      <div>{/* <img src={portfolioLogo} alt="portfolio logo" /> */}</div>
    </RightSide>
  </ContentWrapper>
);

export default PageContentWrapper;
