import React from 'react';
import PageContentWrapper from '../components/PageContentWrapper';
import PageHomeTitle from '../components/typography/PageHomeTitle';
import portfolioLogo from '../assets/images/logo-circle.png';
import Dupa from '../components/GMaps';

const Home: React.FC = () => (
  <PageContentWrapper
    pageTitle={<PageHomeTitle />}
    pageImgRight={portfolioLogo}
    pageImgAltRight="portfolio-logo"
    pageBodyLeft={<Dupa />}
  />
);

export default Home;
