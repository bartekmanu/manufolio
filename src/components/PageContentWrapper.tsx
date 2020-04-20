import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DEVICE } from '../assets/styles/const';

const { sm, md, lg, xl } = DEVICE;

const ContentWrapper = styled.div`
  @media ${lg} {
    height: 100%;
    display: flex;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  padding: 0 0 0 3rem;
  justify-content: center;
  align-items: center;
`;

const RightSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// 625px ===39.063rem
const PageImg = styled.img`
  height: 39.063rem;
  width: 39.063rem;
`;

// 729px === 45.563rem
// 900px === 56.25rem
const SecondPageImg = styled.img`
  height: 56.25rem;
  width: 45.563rem;
  position: absolute;
  right: 0;
`;

const PageBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;
  padding: 0 0 0 1rem;
  height: 100%;
  width: 100%;
`;

interface Props {
  pageTitle: ReactNode;
  pageBodyLeft?: ReactNode;
  pageImgRight?: string;
  pageImgAltRight?: string;
  secondPageImgRight?: string;
  secondPageImgAltRight?: string;
  pageBodyRight?: ReactNode;
}

const PageContentWrapper: React.FC<Props> = ({
  pageTitle,
  pageBodyLeft,
  pageImgRight,
  pageImgAltRight,
  secondPageImgRight,
  secondPageImgAltRight,
  pageBodyRight,
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
};

PageContentWrapper.defaultProps = {
  pageBodyLeft: null,
  pageImgRight: '',
  pageImgAltRight: '',
  secondPageImgRight: '',
  secondPageImgAltRight: '',
  pageBodyRight: '',
};

export default PageContentWrapper;
