import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VARIABLES, DEVICE } from '../assets/styles/const';

const { lg, xl, xxl } = DEVICE;
const { pageImg, splashHeight } = VARIABLES;

const ContentWrapper = styled.div`
  @media ${lg} {
  }
`;

const ColLeft = styled.div`
  @media ${xxl} {
  }
`;

const ColRight = styled.div`
  @media ${xl} {
  }
`;

const ColBody = styled.div``;

interface Props {
  pageTitle: ReactNode;
  colLeftBody?: ReactNode;
  colRightBody?: ReactNode;
  mobile?: boolean;
}

const PageContentWrapper: React.FC<Props> = ({ pageTitle, colLeftBody, colRightBody, mobile }) => (
  <ContentWrapper>
    <ColLeft>
      {pageTitle}
      {colLeftBody && colLeftBody}
    </ColLeft>
    <ColRight>{colRightBody && colRightBody}</ColRight>
  </ContentWrapper>
);

PageContentWrapper.propTypes = {
  pageTitle: PropTypes.node.isRequired,
  colLeftBody: PropTypes.node,
  colRightBody: PropTypes.node,
  mobile: PropTypes.bool,
};

PageContentWrapper.defaultProps = {
  colLeftBody: null,
  colRightBody: null,
  mobile: false,
};

export default PageContentWrapper;
