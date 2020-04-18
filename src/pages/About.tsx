import React from 'react';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import Paragraph from '../components/typography/Paragraph';
import aboutMeImage from '../assets/images/about-me-image.png';
import yellowSplash from '../assets/images/yellow-splash.png';

const About: React.FC = () => {
  const renderParagraph = (): JSX.Element => (
    <>
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
    </>
  );
  return (
    <PageContentWrapper
      pageTitle={<PageTitle text="About" />}
      pageBodyLeft={renderParagraph()}
      pageImgRight={aboutMeImage}
      pageImgAltRight="about-me-image"
      secondPageImgRight={yellowSplash}
      secondPageImgAltRight="yellow-splash"
    />
  );
};

export default About;
