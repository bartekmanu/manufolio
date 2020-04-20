import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools, faEye, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { MenuItems } from '../interfaces/index';

export const pages: MenuItems[] = [
  {
    address: '/',
    icon: <FontAwesomeIcon icon={faHome} />,
    slug: 'home-page',
  },
  {
    address: '/about',
    icon: <FontAwesomeIcon icon={faUser} />,
    slug: 'about-page',
  },
  {
    address: '/skills',
    icon: <FontAwesomeIcon icon={faTools} />,
    slug: 'skills-page',
  },
  {
    address: '/my-work',
    icon: <FontAwesomeIcon icon={faEye} />,
    slug: 'my-work-page',
  },
  {
    address: '/contact',
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    slug: 'contact-page',
  },
];

export const socials: MenuItems[] = [
  {
    address: 'https://github.com/bartekmanu',
    icon: <FontAwesomeIcon icon={faGithub} />,
    slug: 'github',
  },
  {
    address: 'https://www.linkedin.com/in/bartosz-manowski/',
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    slug: 'linkedin',
  },
  {
    address: 'https://www.facebook.com/czaszkobij',
    icon: <FontAwesomeIcon icon={faFacebook} />,
    slug: 'facebook',
  },
];
export default {};
