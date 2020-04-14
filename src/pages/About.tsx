import React from 'react';
import styled from 'styled-components';

const Test = styled.div`
  background: green;
`;

const About: React.FC = () => (
  <Test>
    <h1>ABOUT</h1>
  </Test>
);

export default About;
