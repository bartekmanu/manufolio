import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { /* VARIABLES, */ DEVICE } from '../assets/styles/const';

const { lg, xl } = DEVICE;
// const { pageImg, splashHeight } = VARIABLES;

interface Props {
  pageTitle: ReactNode;
  colLeftBody?: ReactNode;
  colRightBody?: ReactNode;
  colRightBodyMobile?: ReactNode;
}

const PageContentWrapper: React.FC<Props> = ({
  pageTitle,
  colLeftBody,
  colRightBody,
  colRightBodyMobile,
}) => {
  const ContentWrapper = styled.div`
    min-height: calc(100% - 10.5rem);
    display: grid;
    grid-template-columns: 1fr;
    @media ${lg} {
      grid-template-columns: repeat(2, 1fr);
    }
  `;

  const ColLeft = styled.div`
    padding: 0 2rem 0 2rem;
    display: grid;
    grid-template-rows: ${colLeftBody ? '175px 1fr' : '1fr'};
    @media ${lg} {
      padding: 0 0 0 3rem;
    }
  `;

  const ColRight = styled.div`
    display: none;
    @media ${lg} {
      display: block;
    }
  `;

  const ColRightMobile = styled.div``;
  return (
    <ContentWrapper>
      <ColLeft>
        {pageTitle}
        {colLeftBody && colLeftBody}
      </ColLeft>
      {colRightBody && <ColRight>{colRightBody}</ColRight>}
      {colRightBodyMobile && <ColRightMobile>{colRightBodyMobile}</ColRightMobile>}
    </ContentWrapper>
  );
};

PageContentWrapper.propTypes = {
  pageTitle: PropTypes.node.isRequired,
  colLeftBody: PropTypes.node,
  colRightBody: PropTypes.node,
  colRightBodyMobile: PropTypes.node,
};

PageContentWrapper.defaultProps = {
  colLeftBody: null,
  colRightBody: null,
  colRightBodyMobile: null,
};

export default PageContentWrapper;
