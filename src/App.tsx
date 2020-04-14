import React from 'react';
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
  const home = <FontAwesomeIcon icon={faHome} size="2x" />;
  const about = <FontAwesomeIcon icon={faUser} size="2x" />;
  const skills = <FontAwesomeIcon icon={faTools} size="2x" />;
  const myWork = <FontAwesomeIcon icon={faEye} size="2x" />;
  const contact = <FontAwesomeIcon icon={faEnvelope} size="2x" />;

  const gitHubProject = <FontAwesomeIcon icon={faGithub} size="1x" />;
  const downloadCv = <FontAwesomeIcon icon={faDownload} size="1x" />;
  const facebook = <FontAwesomeIcon icon={faFacebook} size="1x" />;
  const linkedin = <FontAwesomeIcon icon={faLinkedin} size="1x" />;

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
            <MenuItems>
              <li>
                <Link to="/">{home}</Link>
              </li>
              <li>
                <Link to="/about">{about}</Link>
              </li>
              <li>
                <Link to="/skills">{skills}</Link>
              </li>
              <li>
                <Link to="/my-work">{myWork}</Link>
              </li>
              <li>
                <Link to="/contact">{contact}</Link>
              </li>
            </MenuItems>
          </nav>

          <SocialListItems>
            <li>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                {downloadCv}
              </a>
            </li>
            <li>
              <a href="https://github.com/bartekmanu" target="_blank" rel="noopener noreferrer">
                {gitHubProject}
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bartosz-manowski/" target="_blank" rel="noopener noreferrer">
                {linkedin}
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/czaszkobij" target="_blank" rel="noopener noreferrer">
                {facebook}
              </a>
            </li>
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
