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
    /*  */
    <AboutWrapper>
      <Paragraph>
        Private, I am a beekeeper with an apiary on the outskirts of Wrocław where I live. I am
        spending my free time on downhill longboard and bouldering workouts.
      </Paragraph>
      <Paragraph>
        My adventure with programming started in 2017. Now I am deep into modern frontend
        technologies used for creating web applications like React Vue.JS, Nuxt and NunJucks. I
        learned how work in teams in medium size software house company MoreFromIT. There I was
        creating websites basing on mock-ups provided by graphics designers, everything was under
        great project management. Some of advanced technical details I was consulting directly with
        company&apos;s clients. The sites were created keeping in mind the main principles of SEO.
      </Paragraph>
      <Paragraph>
        I became interested into the Single Page Applications, meanwhile changing work to the
        TrustMate. There we were focused on the own project. I learned about useful tools for the
        frontend like FIGMA, Swagger and Zeppelin. All the time I was working in two project
        management methodologies, KANBAN and SCRUM.
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
