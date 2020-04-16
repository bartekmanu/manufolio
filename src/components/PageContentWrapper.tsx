import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const LeftSide = styled.div`
  width: 50%;
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

interface Props {
  pageTitle: ReactNode;
  pageBody?: ReactNode;
  pageImg?: string;
  pageImgAlt?: string;
  secondPageImg?: string;
  secondPageImgAlt?: string;
}

const PageContentWrapper: React.FC<Props> = ({
  pageTitle,
  pageBody,
  pageImg,
  pageImgAlt,
  secondPageImg,
  secondPageImgAlt,
}) => (
  <ContentWrapper>
    <LeftSide>
      {pageTitle}
      {pageBody ? <>{pageBody}</> : null}
    </LeftSide>
    <RightSide>
      <>{pageImg ? <PageImg src={pageImg} alt={pageImgAlt} /> : null}</>
      {secondPageImg ? <SecondPageImg src={secondPageImg} alt={secondPageImgAlt} /> : null}
    </RightSide>
  </ContentWrapper>
);

PageContentWrapper.propTypes = {
  pageTitle: PropTypes.node.isRequired,
  pageBody: PropTypes.node,
  pageImg: PropTypes.string,
  pageImgAlt: PropTypes.string,
  secondPageImg: PropTypes.string,
  secondPageImgAlt: PropTypes.string,
};

PageContentWrapper.defaultProps = {
  pageBody: null,
  pageImg: '',
  pageImgAlt: '',
  secondPageImg: '',
  secondPageImgAlt: '',
};

export default PageContentWrapper;
