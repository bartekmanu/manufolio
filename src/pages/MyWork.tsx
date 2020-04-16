import React from 'react';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import timeline from '../images/timeline.png';

const MyWork: React.FC = () => (
  <PageContentWrapper
    pageTitle={<PageTitle text="My work" />}
    pageBody={<img src={timeline} alt="dup" />}
  />
);

export default MyWork;
