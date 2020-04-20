import React from 'react';
import styled from 'styled-components';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import graySplash from '../assets/images/gray-splash.png';
import { skills } from '../utils/skills-data';
import { DEVICE } from '../assets/styles/const';

const { sm, md, lg, xl } = DEVICE;

const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media ${lg} {
    justify-content: flex-start;
  }
`;

const SkillImg = styled.img`
  height: 7.813rem;
  width: 7.813rem;
  margin: 0 0.5rem 0.5rem 0;
`;

const Skills: React.FC = () => {
  const renderSkillsLogo = (): JSX.Element => {
    return (
      <SkillWrapper>
        {skills.map((item) => (
          <SkillImg key={item.slug} src={item.logo} alt={item.alt} />
        ))}
      </SkillWrapper>
    );
  };

  return (
    <PageContentWrapper
      pageTitle={<PageTitle text="Skills" />}
      pageBodyLeft={renderSkillsLogo()}
      secondPageImgRight={graySplash}
      secondPageImgAltRight="gray-splash"
    />
  );
};

export default Skills;
