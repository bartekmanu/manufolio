import React from 'react';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import timeline from '../assets/images/timeline.png';

const MyWork: React.FC = () => {
  const renderTimeline = (): JSX.Element => (
    <div>
      <img src={timeline} alt="work time line" />
    </div>
  );
  return (
    <PageContentWrapper pageTitle={<PageTitle text="My work" />} pageBody={renderTimeline()} />
  );
};

export default MyWork;
