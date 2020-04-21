import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VARIABLES, DEVICE } from '../assets/styles/const';

const { lg, xl, xxl } = DEVICE;
const { pageImg, splashHeight } = VARIABLES;

const ContentWrapper = styled.div`
  @media ${lg} {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const LeftSide = styled.div`
  padding: 0 2rem 0 2rem;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media ${xxl} {
    padding: 0 0 0 3rem;
  }
`;

const RightSide = styled.div`
  display: none;
  z-index: 1;
  @media ${xl} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const PageImg = styled.img`
  height: ${pageImg}rem;
  padding: 0 3rem 0 0;
`;

const SecondPageImg = styled.img`
  height: ${splashHeight}rem;
  position: absolute;
  right: 0;
  opacity: 0.2;

  @media ${xxl} {
    opacity: 1;
    top: calc(50% - (${splashHeight}rem / 2));
  }
`;

const PageBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;
  height: 100%;
  width: 100%;
`;

const PageRighSideWithMobile = styled.div`
  background: red;
  display: flex;
`;

interface Props {
  pageTitle: ReactNode;
  pageBodyLeft?: ReactNode;
  pageImgRight?: string;
  pageImgAltRight?: string;
  secondPageImgRight?: string;
  secondPageImgAltRight?: string;
  pageBodyRight?: ReactNode;
  pageBodyRightMobile?: ReactNode;
}

const PageContentWrapper: React.FC<Props> = ({
  pageTitle,
  pageBodyLeft,
  pageImgRight,
  pageImgAltRight,
  secondPageImgRight,
  secondPageImgAltRight,
  pageBodyRight,
  pageBodyRightMobile,
}) => (
  <ContentWrapper>
    <LeftSide>
      {pageTitle}
      <>{pageBodyLeft ? <PageBodyWrapper>{pageBodyLeft}</PageBodyWrapper> : null}</>
    </LeftSide>
    <RightSide>
      <>{pageImgRight ? <PageImg src={pageImgRight} alt={pageImgAltRight} /> : null}</>
      {secondPageImgRight ? (
        <SecondPageImg src={secondPageImgRight} alt={secondPageImgAltRight} />
      ) : null}
      <>{pageBodyRight ? <PageBodyWrapper>{pageBodyRight}</PageBodyWrapper> : null}</>
    </RightSide>
    {pageBodyRightMobile && (
      <PageRighSideWithMobile>
        <PageBodyWrapper>{pageBodyRightMobile}</PageBodyWrapper>
      </PageRighSideWithMobile>
    )}
  </ContentWrapper>
);

PageContentWrapper.propTypes = {
  pageTitle: PropTypes.node.isRequired,
  pageBodyLeft: PropTypes.node,
  pageImgRight: PropTypes.string,
  pageImgAltRight: PropTypes.string,
  secondPageImgRight: PropTypes.string,
  secondPageImgAltRight: PropTypes.string,
  pageBodyRight: PropTypes.node,
  pageBodyRightMobile: PropTypes.node,
};

PageContentWrapper.defaultProps = {
  pageBodyLeft: null,
  pageImgRight: '',
  pageImgAltRight: '',
  secondPageImgRight: '',
  secondPageImgAltRight: '',
  pageBodyRight: null,
  pageBodyRightMobile: null,
};

export default PageContentWrapper;
