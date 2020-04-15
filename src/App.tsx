import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { VARIABLES } from './styles/const';
import Logo from './components/Logo';
import { pages, socials } from './utils/menu-data';
import PageWrapper from './components/PageWrapper';

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

const SectionWrapper = styled.div`
  height: 100%;
  padding: 0 0 0 3rem;
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  const renderMenuItems = (): JSX.Element[] => {
    return pages.map((item) => {
      return (
        <li>
          <Link to={item.address}>{item.icon}</Link>
        </li>
      );
    });
  };

  const renderSocials = (): JSX.Element[] => {
    return socials.map((item) => {
      return (
        <li>
          <a href={item.address} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
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

        <PageWrapper>
          <Switch>
            <Route path="/contact">
              <SectionWrapper>
                <Contact />
              </SectionWrapper>
            </Route>
            <Route path="/my-work">
              <SectionWrapper>
                <MyWork />
              </SectionWrapper>
            </Route>
            <Route path="/skills">
              <SectionWrapper>
                <Skills />
              </SectionWrapper>
            </Route>
            <Route path="/about">
              <SectionWrapper>
                <About />
              </SectionWrapper>
            </Route>
            <Route path="/">
              <SectionWrapper>
                <Home />
              </SectionWrapper>
            </Route>
          </Switch>
        </PageWrapper>
      </MainPageWrapper>
    </Router>
  );
};

export default App;
