import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools, faEye, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Logo from './components/Logo';
import { VARIABLES } from './styles/const';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import MyWork from './pages/MyWork';
import Contact from './pages/Contact';

const MainPageWrapper = styled.div`
  display: flex;
  background: linear-gradient(to right, var(--main-bg-color) 0%, var(--secondary-bg-color) 100%);
`;

const SideBar = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 0px 4px 30px var(--side-bar-shadow);
  width: ${VARIABLES.sideBarWidth}rem;
  height: 100vh;
`;

const MenuItems = styled.ul`
  li {
    margin-bottom: 2rem;
    text-align: center;

    a {
      color: var(--main-color);
    }
  }
`;

const SocialListItems = styled.ul`
  li {
    margin-bottom: 1rem;
    text-align: center;

    a {
      color: var(--secondary-font-color);
    }
  }
`;

const App: React.FC = () => {
  interface MenuItems {
    icon: ReactElement;
    address: string;
  }

  const pages: MenuItems[] = [
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

  const renderMenuItems = (): JSX.Element[] => {
    return pages.map((item) => {
      return (
        <li>
          <Link to={item.address}>{item.icon}</Link>
        </li>
      );
    });
  };

  const socials: MenuItems[] = [
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

  const renderSocials = (): JSX.Element[] => {
    return socials.map((item) => {
      return (
        <li>
          <a href={item.address}>{item.icon}</a>
        </li>
      );
    });
  };

  const downloadCv = <FontAwesomeIcon icon={faDownload} size="1x" />;

  return (
    <Router>
      <MainPageWrapper>
        <SideBar>
          <nav>
            <Link to="/">
              <Logo />
            </Link>
          </nav>
          <nav>
            <MenuItems>{renderMenuItems()}</MenuItems>
          </nav>

          <SocialListItems>
            <li>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                {downloadCv}
              </a>
            </li>
            {renderSocials()}
          </SocialListItems>
        </SideBar>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/my-work">
            <MyWork />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </MainPageWrapper>
    </Router>
  );
};

export default App;
