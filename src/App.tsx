/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
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
const { lg } = DEVICE;

const App: React.FC = () => {
  const [sideBarPosition, setSideBarPosition] = useState(false);

  const StyledBurger = styled.button`
    position: absolute;
    top: 1rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 15;
    transition: all 1s;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: var(--main-color);
      border-radius: 10px;
      /* transition: all 0.3s linear; */
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${(props): string => (sideBarPosition ? 'rotate(45deg)' : 'rotate(0)')};
      }

      :nth-child(2) {
        opacity: ${(props): string => (sideBarPosition ? '0' : '1')};
        transform: ${(props): string => (sideBarPosition ? 'translateX(20px)' : 'translateX(0)')};
      }

      :nth-child(3) {
        transform: ${(props): string => (sideBarPosition ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }

    @media ${lg} {
      display: none;
    }
  `;

  const MainPageWrapper = styled.div`
    display: flex;
    background: linear-gradient(90deg, var(--main-bg-color) -80%, var(--secondary-bg-color) 100%);
    min-height: 100vh;
  `;

  const SideBar = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: inset 0px 4px 30px var(--side-bar-shadow);
    background: linear-gradient(90deg, var(--main-bg-color) -80%, var(--secondary-bg-color) 100%);
    width: 100vw;
    height: 100vh;
    z-index: 10;
    transform: translateX(${(props): string => (sideBarPosition ? '0vw' : '-100vw')});

    @media ${lg} {
      background: transparent;
      transform: translateX(0);
      width: ${sideBarWidth}rem;
      justify-content: space-between;
    }
  `;

  const MenuItems = styled.nav`
    width: 100%;

    ul {
      display: flex;
      justify-content: space-evenly;
      width: 100%;

      li {
        margin-bottom: 2rem;
        text-align: center;
        font-size: 3rem;

        a {
          color: var(--main-color);
        }
      }

      @media ${lg} {
        display: block;

        li {
          font-size: 2rem;
        }
      }
    }
  `;

  const SocialListItems = styled.ul`
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    li {
      margin-bottom: 1rem;
      text-align: center;
      font-size: 2rem;

      a {
        color: var(--secondary-font-color);
      }
    }
    @media ${lg} {
      display: block;

      li {
        font-size: 1rem;
      }
    }
  `;

  const NavWithLogo = styled.nav`
    order: 3;
    @media ${lg} {
      order: 0;
    }
  `;

  const MenuLogo = styled.img`
    width: calc(${logoWidth}rem * 4);
    height: calc(${logoHeight}rem * 4);

    @media ${lg} {
      width: ${logoWidth}rem;
      height: ${logoHeight}rem;
    }
  `;

  const toggleSideBar = (): void => setSideBarPosition(!sideBarPosition);

  const renderBurger = (): JSX.Element => {
    return (
      <StyledBurger onClick={toggleSideBar}>
        <div />
        <div />
        <div />
      </StyledBurger>
    );
  };

  const renderMenuItems = (): JSX.Element[] => {
    return pages.map((item) => {
      return (
        <li key={item.slug}>
          <Link to={item.address} onClick={toggleSideBar}>
            {item.icon}
          </Link>
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
      {renderBurger()}
      <MainPageWrapper>
        <SideBar>
          <NavWithLogo>
            <Link to="/" onClick={toggleSideBar}>
              <MenuLogo src={logo} />
            </Link>
          </NavWithLogo>
          <MenuItems>
            <ul>{renderMenuItems()}</ul>
          </MenuItems>

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
