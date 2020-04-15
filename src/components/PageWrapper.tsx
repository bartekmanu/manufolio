import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 1rem);
  width: 100%;
`;

const WrapperSpan = styled.span`
  font-family: 'Damion', cursive;
  color: var(--secondary-font-color);
  margin: 1rem 0 1rem 2rem;
  display: block;
  font-size: 1.5rem;
  text-shadow: 0px 0px 5px var(--secondary-bg-color);

  &:last-child {
    margin: 0 0 1rem 1rem;
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
