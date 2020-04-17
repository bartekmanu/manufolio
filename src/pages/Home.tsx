import React from 'react';
import PageContentWrapper from '../components/PageContentWrapper';
import PageHomeTitle from '../components/typography/PageHomeTitle';
import portfolioLogo from '../assets/images/logo-circle.png';

const Home: React.FC = () => (
  <PageContentWrapper
    pageTitle={<PageHomeTitle />}
    pageImg={portfolioLogo}
    pageImgAlt="portfolio-logo"
  />
);

export default Home;
