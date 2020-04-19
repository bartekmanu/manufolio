import React from 'react';
import styled from 'styled-components';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import timeline from '../assets/images/timeline.png';
import { works } from '../utils/works-data';

const TimelineWrapper = styled.div`
  display: flex;
  width: 80%;
`;

const WorksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WorkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 2);

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--main-font-color);
    font-size: 1.25rem;
    transition: 0.5s;
    margin: 1.5rem 0 1.5rem 0;

    &::first-letter {
      color: var(--main-color);
    }

    &:hover {
      color: var(--main-color);
      &::first-letter {
        color: var(--main-font-color);
      }
    }
  }
`;

const Img = styled.img`
  width: 100%;
`;

const MyWork: React.FC = () => {
  const renderTimeline = (): JSX.Element => (
    <TimelineWrapper>
      <img src={timeline} alt="work time line" />
    </TimelineWrapper>
  );

  const renderWorks = (): JSX.Element => {
    return (
      <WorksWrapper>
        {works.map((item) => {
          return (
            <WorkItem>
              <div>
                <Img src={item.img} alt={item.name} />
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </WorkItem>
          );
        })}
      </WorksWrapper>
    );
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
