import React from 'react';
import styled from 'styled-components';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import graySplash from '../assets/images/gray-splash.png';
import { skills } from '../utils/skills-data';

const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
      pageBody={renderSkillsLogo()}
      secondPageImg={graySplash}
      secondPageImgAlt="gray-splash"
    />
  );
};

export default Skills;
