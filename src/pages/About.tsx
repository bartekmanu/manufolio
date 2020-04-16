import React from 'react';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import aboutMeImage from '../images/about-me-image.png';
import yellowSplash from '../images/yellow-splash.png';

const About: React.FC = () => (
  <PageContentWrapper
    pageTitle={<PageTitle text="About" />}
    pageImg={aboutMeImage}
    pageImgAlt="about-me-image"
    secondPageImg={yellowSplash}
    secondPageImgAlt="yellow-splash"
  />
);

export default About;
