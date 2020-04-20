import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { VARIABLES, DEVICE } from './assets/styles/const';
import logo from './assets/images/logo.png';
import { pages, socials } from './utils/menu-data';
import PageWrapper from './components/PageWrapper';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import MyWork from './pages/MyWork';
import Contact from './pages/Contact';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import cvBM from './assets/BartoszManowski.pdf';

const { sideBarWidth, logoWidth, logoHeight } = VARIABLES;
const { sm, md, lg, xl } = DEVICE;

const MainPageWrapper = styled.div`
  display: flex;
  background: linear-gradient(90deg, var(--main-bg-color) -80%, var(--secondary-bg-color) 100%);
`;

const SideBar = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 0px 4px 30px var(--side-bar-shadow);
  width: ${sideBarWidth}rem;
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

const MenuLogo = styled.img`
  width: ${logoWidth}rem;
  height: ${logoHeight}rem;
`;

const App: React.FC = () => {
  const renderMenuItems = (): JSX.Element[] => {
    return pages.map((item) => {
      return (
        <li key={item.slug}>
          <Link to={item.address}>{item.icon}</Link>
        </li>
      );
    });
  };

  const renderSocials = (): JSX.Element[] => {
    return socials.map((item) => {
      return (
        <li key={item.slug}>
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
              <MenuLogo src={logo} />
            </Link>
          </nav>
          <nav>
            <MenuItems>{renderMenuItems()}</MenuItems>
          </nav>

          <SocialListItems>
            <li>
              <a href={cvBM} download="Bartosz-Manowski-CV.pdf">
                {downloadCv}
              </a>
            </li>
            {renderSocials()}
          </SocialListItems>
        </SideBar>

        <PageWrapper>
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
        </PageWrapper>
      </MainPageWrapper>
    </Router>
  );
};

export default App;
