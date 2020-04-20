import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VARIABLES, DEVICE } from '../assets/styles/const';

const { sm, md, lg, xl } = DEVICE;
const { sideBarWidth } = VARIABLES;

const Wrapper = styled.div`
  @media ${lg} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    margin: 0 0 0 ${sideBarWidth}rem;
  }
`;

const WrapperSpan = styled.span`
  font-family: 'Damion', cursive;
  color: var(--secondary-font-color);
  margin: 1rem 0 1rem 1rem;
  display: block;
  font-size: 1.5rem;
  text-shadow: 0px 0px 5px var(--secondary-bg-color);

  &:last-child {
    margin: 0 0 1rem 0.25rem;
  }

  @media ${lg} {
    margin: 1rem 0 1rem 2rem;
    &:last-child {
      margin: 0 0 1rem 1rem;
    }
  }
`;

interface Props {
  children: ReactNode;
}

const PageWrapper: React.FC<Props> = ({ children }) => (
  <Wrapper>
    <WrapperSpan>&lt;body&gt;</WrapperSpan>
    {children}
    <div>
      <WrapperSpan>&lt;/body&gt;</WrapperSpan>
      <WrapperSpan>&lt;/html&gt;</WrapperSpan>
    </div>
  </Wrapper>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
