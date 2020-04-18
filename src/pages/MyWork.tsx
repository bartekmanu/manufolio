import React from 'react';
import styled from 'styled-components';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import timeline from '../assets/images/timeline.png';

const TimelineWrapper = styled.div`
  display: flex;
`;

const MyWork: React.FC = () => {
  const renderTimeline = (): JSX.Element => (
    <TimelineWrapper>
      <img src={timeline} alt="work time line" />
    </TimelineWrapper>
  );
  return (
    <PageContentWrapper pageTitle={<PageTitle text="My work" />} pageBodyLeft={renderTimeline()} />
  );
};

export default MyWork;
