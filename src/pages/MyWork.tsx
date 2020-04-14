import React from 'react';
import styled from 'styled-components';

const Test = styled.div`
  background: brown;
`;

const MyWork: React.FC = () => (
  <Test>
    <h1>MY WORK</h1>
  </Test>
);

export default MyWork;
