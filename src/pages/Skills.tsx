import React from 'react';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import graySplash from '../images/gray-splash.png';

const Skills: React.FC = () => (
  <PageContentWrapper
    pageTitle={<PageTitle text="Skills" />}
    secondPageImg={graySplash}
    secondPageImgAlt="gray-splash"
  />
);

export default Skills;
