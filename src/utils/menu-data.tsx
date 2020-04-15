import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools, faEye, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { MenuItems } from '../interfaces/index';

export const pages: MenuItems[] = [
  {
    icon: <FontAwesomeIcon icon={faHome} size="2x" />,
    address: '/',
  },
  {
    icon: <FontAwesomeIcon icon={faUser} size="2x" />,
    address: '/about',
  },
  {
    icon: <FontAwesomeIcon icon={faTools} size="2x" />,
    address: '/skills',
  },
  {
    icon: <FontAwesomeIcon icon={faEye} size="2x" />,
    address: '/my-work',
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />,
    address: '/contact',
  },
];

export const socials: MenuItems[] = [
  {
    address: 'https://github.com/bartekmanu',
    icon: <FontAwesomeIcon icon={faGithub} size="1x" />,
  },
  {
    address: 'https://www.linkedin.com/in/bartosz-manowski/',
    icon: <FontAwesomeIcon icon={faLinkedin} size="1x" />,
  },
  {
    address: 'https://www.facebook.com/czaszkobij',
    icon: <FontAwesomeIcon icon={faFacebook} size="1x" />,
  },
];
export default {};
