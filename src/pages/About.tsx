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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum doloremque accusamus id
        error dolor a in perspiciatis! Iste aut nulla, ipsum labore saepe veniam necessitatibus,
        ducimus odio molestiae non voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum doloremque accusamus id
        error dolor a in perspiciatis! Iste aut nulla, ipsum labore saepe veniam necessitatibus,
        ducimus odio molestiae non voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum doloremque accusamus id
        error dolor a in perspiciatis! Iste aut nulla, ipsum labore saepe veniam necessitatibus,
        ducimus odio molestiae non voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit.
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
