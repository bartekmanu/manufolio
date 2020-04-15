import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 3rem;

  &::first-letter {
    color: var(--main-color);
    padding: 0 0 0 1rem;
  }
`;

const TitleSpan = styled.span`
  font-family: 'Damion', cursive;
  color: var(--secondary-font-color);
  display: block;
  font-size: 1.5rem;
  text-shadow: 0px 0px 5px var(--secondary-bg-color);
`;

interface Props {
  text: string;
}

const PageTitle: React.FC<Props> = ({ text }) => (
  <div>
    <TitleSpan>&lt;h1&gt;</TitleSpan>
    <H1>{text}</H1>
    <TitleSpan>&lt;/h1&gt;</TitleSpan>
  </div>
);

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageTitle;
