import React from 'react';
import PageContentWrapper from '../components/PageContentWrapper';
import PageHomeTitle from '../components/typography/PageHomeTitle';
import mainLogo from '../assets/images/logo-circle.png';

const Home: React.FC = () => {
  const renderMainLogo = (): JSX.Element => <img src={mainLogo} alt="main page logo" />;
  return <PageContentWrapper pageTitle={<PageHomeTitle />} colRightBody={renderMainLogo()} />;
};

export default Home;
