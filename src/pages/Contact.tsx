import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhoneAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/typography/PageTitle';
import GMaps from '../components/GMaps';
import { DEVICE } from '../assets/styles/const';

const { lg } = DEVICE;

const ContactInfoWrapper = styled.div`
  @media ${lg} {
    margin: 3rem 0 0 0;
  }
`;

const ContactItems = styled.div`
  display: flex;
  color: var(--secondary-font-color);
  font-size: 1.5rem;
  margin: 0 0 2rem 0;

  a {
    text-decoration: none;
    color: var(--secondary-font-color);
    transition: 0.5s;

    &:hover {
      cursor: pointer;
      color: var(--main-color);
    }
  }

  span,
  a {
    margin-left: 2rem;
  }
`;

const Contact: React.FC = () => {
  const renderContactInfos = (): JSX.Element => {
    return (
      <ContactInfoWrapper>
        <ContactItems>
          <FontAwesomeIcon icon={faEnvelopeOpen} />
          <a href="mailto:manowski.b@gmail.com">manowski.b@gmail.com</a>
        </ContactItems>
        <ContactItems>
          <FontAwesomeIcon icon={faPhoneAlt} />
          <a href="tel:+48 790225013">+48 791 611 443</a>
        </ContactItems>
        <ContactItems>
          <FontAwesomeIcon icon={faMapMarkedAlt} />
          <span>Wrocław || Katowice</span>
        </ContactItems>
      </ContactInfoWrapper>
    );
  };

  return (
    <PageContentWrapper
      pageTitle={<PageTitle text="Contact" />}
      colLeftBody={renderContactInfos()}
      colRightBodyMobile={<GMaps />}
      withMap
    />
  );
};

export default Contact;
