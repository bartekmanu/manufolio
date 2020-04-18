import React from 'react';
import PageContentWrapper from '../components/PageContentWrapper';
import PageHomeTitle from '../components/typography/PageHomeTitle';
import portfolioLogo from '../assets/images/logo-circle.png';
import GMaps from '../components/GMaps';

const Home: React.FC = () => (
  <PageContentWrapper
    pageTitle={<PageHomeTitle />}
    pageImg={portfolioLogo}
    pageImgAlt="portfolio-logo"
    pageBody={<GMaps />}
  />
);

export default Home;
