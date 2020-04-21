import React from 'react';
import styled from 'styled-components';
import PageContentWrapper from '../components/PageContentWrapper';
import PageHomeTitle from '../components/typography/PageHomeTitle';
import mainLogo from '../assets/images/logo-circle.png';

const Home: React.FC = () => {
  const ImgWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const renderMainLogo = (): JSX.Element => (
    <ImgWrapper>
      <img src={mainLogo} alt="main page logo" />
    </ImgWrapper>
  );
  return <PageContentWrapper pageTitle={<PageHomeTitle />} colRightBody={renderMainLogo()} />;
};

export default Home;
