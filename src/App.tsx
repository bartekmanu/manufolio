import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools, faEye, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import MyWork from './pages/MyWork';
import Contact from './pages/Contact';

const SideBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2b2b2b;
  box-shadow: inset 0px 4px 30px rgba(0, 0, 0, 0.25);
  width: 100px;
  min-height: 100vh;
`;

const MenuItems = styled.ul`
  li {
    margin-bottom: 2rem;

    a {
      color: #fbbc0c;
      margin-bottom: 1rem;
    }
  }
`;

const App: React.FC = () => {
  const home = <FontAwesomeIcon icon={faHome} size="2x" />;
  const user = <FontAwesomeIcon icon={faUser} size="2x" />;
  const tools = <FontAwesomeIcon icon={faTools} size="2x" />;
  const myWork = <FontAwesomeIcon icon={faEye} size="2x" />;
  const contact = <FontAwesomeIcon icon={faEnvelope} size="2x" />;

  return (
    <Router>
      <SideBar>
        <nav>
          <MenuItems>
            <li>
              <Link to="/">{home}</Link>
            </li>
            <li>
              <Link to="/about">{user}</Link>
            </li>
            <li>
              <Link to="/skills">{tools}</Link>
            </li>
            <li>
              <Link to="/my-work">{myWork}</Link>
            </li>
            <li>
              <Link to="/contact">{contact}</Link>
            </li>
          </MenuItems>
        </nav>
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
    </Router>
  );
};

export default App;
