import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { /* VARIABLES, */ DEVICE } from '../assets/styles/const';

const { lg, xl, xxl } = DEVICE;
// const { pageImg, splashHeight } = VARIABLES;

const ContentWrapper = styled.div`
  @media ${lg} {
  }
`;

const ColLeft = styled.div`
  @media ${xxl} {
  }
`;

const ColRight = styled.div`
  display: none;
  @media ${xl} {
    display: block;
  }
`;

const ColRightMobile = styled.div``;

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
}) => (
  <ContentWrapper>
    <ColLeft>
      {pageTitle}
      {colLeftBody && colLeftBody}
    </ColLeft>
    {colRightBody && <ColRight>{colRightBody}</ColRight>}
    {colRightBodyMobile && <ColRightMobile>{colRightBodyMobile}</ColRightMobile>}
  </ContentWrapper>
);

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
