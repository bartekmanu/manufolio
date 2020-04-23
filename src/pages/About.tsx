import React from 'react';
import styled from 'styled-components';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import Paragraph from '../components/typography/Paragraph';
import photosplash from '../assets/images/photosplash.png';
import { VARIABLES, DEVICE } from '../assets/styles/const';

const { xxl } = DEVICE;
const { faceSplashWidth, faceSplashHeight } = VARIABLES;

const About: React.FC = () => {
  const AboutWrapper = styled.div``;

  const ImgWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
  `;

  const Img = styled.img`
    width: calc(${faceSplashWidth}rem - 10rem);
    height: calc(${faceSplashHeight}rem - 13rem);

    @media ${xxl} {
      width: ${faceSplashWidth}rem;
      height: ${faceSplashHeight}rem;
    }
  `;

  const renderParagraph = (): JSX.Element => (
    <AboutWrapper>
      <Paragraph>
        I&apos;m Bartek. Privately, I&apos;m a beekeeper. I have a small apiary on the outskirts of
        Wroclaw. Moreover I love downhill longboard, bouldering and terraristics.
      </Paragraph>
      <Paragraph>
        I started my adventure with programming in 2017. I took my first steps at MoreFromIT, where
        I learned to work in a development team. There I also met modern technologies for creating
        websites with the help of Vue.js. To this day I like this technology and I&apos;m happy to
        come back to it. I created web applications based on mocks, provided by a team of graphic
        designers, with care for Responsive Web Design using Vue.js, Nuxt.js and API. I was
        developing two projects and consuting changes directly with the client. Implementation of
        SEO processing tools.
      </Paragraph>
      <Paragraph>
        The next stage of my trip was working at TrustMate. As part of my work at this company, I
        learned and deepened my knowledge in programming in React.js, Redux, Api, Twing and
        Nunjucks. In addition, I implemented small graphic projects with the help of the FIGMA tool
        for the needs of the currently implemented project. At this point I also learned the
        methodology of work in SCRUM.
      </Paragraph>
    </AboutWrapper>
  );

  const renderSplashImg = (): JSX.Element => (
    <ImgWrapper>
      <Img src={photosplash} alt="main face with splash" />
    </ImgWrapper>
  );

  return (
    <PageContentWrapper
      pageTitle={<PageTitle text="About" />}
      colLeftBody={renderParagraph()}
      colRightBody={renderSplashImg()}
    />
  );
};

export default About;
