import React from 'react';
import styled from 'styled-components';

const Test = styled.div`
  background: pink;
`;

const Home: React.FC = () => (
  <Test>
    <h1>HOME</h1>
  </Test>
);

export default Home;