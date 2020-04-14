import React from 'react';
import styled from 'styled-components';

const Test = styled.div`
  background: pink;
  height: 200vh;
`;

const Home: React.FC = () => {
  return (
    <Test>
      <h1>HOME</h1>
    </Test>
  );
};

export default Home;
