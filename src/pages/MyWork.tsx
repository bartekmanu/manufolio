import React from 'react';
import styled from 'styled-components';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import timeline from '../assets/images/timeline.png';
import { works } from '../utils/works-data';
import { DEVICE } from '../assets/styles/const';

const { md, lg } = DEVICE;

const TimelineWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${lg} {
    margin: 3rem 0 0 0;
  }

  img {
    height: 6.5rem;
    width: auto;

    @media ${md} {
      height: 7.5rem;
    }
  }
`;

const WorksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  height: 100%;

  @media ${lg} {
    padding: 0 0 0 5rem;
  }
`;

const WorkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.938rem;
  border-radius: 0.625rem;
  background: #4a4a4a50;
  margin: 0 0 2rem 0;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--main-font-color);
    font-size: 1.25rem;
    transition: 0.5s;
    margin: 0.938rem 0 0 0;

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
      colLeftBody={renderTimeline()}
      colRightBodyMobile={renderWorks()}
    />
  );
};

export default MyWork;
