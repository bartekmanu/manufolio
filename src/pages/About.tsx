import React from 'react';
import styled from 'styled-components';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import Paragraph from '../components/typography/Paragraph';
import photosplash from '../assets/images/photosplash.png';
import { DEVICE } from '../assets/styles/const';

const { xl, xxl } = DEVICE;

const About: React.FC = () => {
  const AboutWrapper = styled.div`
    @media ${xl} {
      width: 80%;
    }

    @media ${xxl} {
      width: 60%;
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

  const renderSplashImg = (): JSX.Element => <img src={photosplash} alt="main face with splash" />;

  return (
    <PageContentWrapper
      pageTitle={<PageTitle text="About" />}
      colLeftBody={renderParagraph()}
      colRightBody={renderSplashImg()}
    />
  );
};

export default About;
