import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Test = styled.div`
  background: pink;
`;

const App: React.FC = () => (
  <Test>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        <code> src/App.tsx</code>
        and save to reload.
      </p>
      <a
        className="App-link dupa jasi kjsdflkjs asd"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </Test>
);

export default App;
