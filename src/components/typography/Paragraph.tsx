import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DEVICE } from '../../assets/styles/const';

const { sm, md, lg, xl, xxl } = DEVICE;

const P = styled.p`
  font-size: 1.35rem;
  background: #2a2a2a50;
  border-radius: 20px;
  padding: 25px;

  &::first-letter {
    font-size: 2rem;
    color: var(--main-color);
  }

  /* @media ${xxl} {
    background: transparent;
    border: none;
    padding: 0;
  } */
`;

interface Props {
  children: string;
}

const Paragraph: React.FC = ({ children }) => <P>{children}</P>;

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
