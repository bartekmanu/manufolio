import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Test = styled.div`
  background: pink;
`;

const Home: React.FC = () => {
  const element = <FontAwesomeIcon icon={faHome} />
  return (
    <Test>
      <h1>{element}</h1>
    </Test>
  );
}

export default Home;