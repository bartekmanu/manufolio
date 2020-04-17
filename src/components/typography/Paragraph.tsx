import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const P = styled.p`
  font-size: 1.35rem;
  &::first-letter {
    color: var(--main-color);
  }
`;

interface Props {
  children: string;
}

const Paragraph: React.FC = ({ children }) => <P>{children}</P>;

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
