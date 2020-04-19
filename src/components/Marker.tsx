import React from 'react';
import styled from 'styled-components';
import CustomMarker from '../assets/images/CustomMarker.png';

const MarkerStyle = styled.img`
  position: absolute;
  top: calc(50% - 25px);
  left: 50%;
  height: 50px;
  width: 31px;
  user-select: none;
  transform: translate(-50%, -50%);
`;

const Marker = (): JSX.Element => <MarkerStyle src={CustomMarker} />;

export default Marker;
