import React from 'react';
import styled from 'styled-components';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import timeline from '../assets/images/timeline.png';
import { works, WorksItems } from '../utils/works-data';

const TimelineWrapper = styled.div`
  display: flex;
`;

const Dupa = styled.div`
  background: purple;
`;

const MyWork: React.FC = () => {
  const renderTimeline = (): JSX.Element => (
    <TimelineWrapper>
      <img src={timeline} alt="work time line" />
    </TimelineWrapper>
  );

  const divide = (arr): Array<WorksItems> => {
    const subarr = [];
    while (arr.length) {
      subarr.push(arr.splice(0, 3));
    }
    return subarr;
  };

  const renderWorks = (): JSX.Element[] => {
    const newArr = divide(works);
    return newArr.map((item) => {
      return (
        <div>
          <span>{item.name}</span>
          <span>{item.slug}</span>
        </div>
      );
    });
  };

  return (
    <PageContentWrapper
      pageTitle={<PageTitle text="My work" />}
      pageBodyLeft={renderTimeline()}
      pageBodyRight={renderWorks()}
    />
  );
};

export default MyWork;
