import React from 'react';
import PageHomeTitle from '../components/typography/PageHomeTitle';
import PageContentWrapper from '../components/PageContentWrapper';
import portfolioLogo from '../images/logo-circle.png';
import yellowSplash from '../images/yellow-splash.png';

const Home: React.FC = () => (
  <PageContentWrapper
    pageTitle={<PageHomeTitle />}
    // pageBody="Page content"
    pageImg={portfolioLogo}
    pageImgAlt="portfolio-logo"
    secondPageImg={yellowSplash}
    secondPageImgAlt="yellow-splash"
  />
);

export default Home;
