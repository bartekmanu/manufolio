import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DEVICE } from '../assets/styles/const';

const { lg } = DEVICE;

interface Props {
  pageTitle: ReactNode;
  colLeftBody?: ReactNode;
  colRightBody?: ReactNode;
  colRightBodyMobile?: ReactNode;
  withMap?: boolean;
}

const PageContentWrapper: React.FC<Props> = ({
  pageTitle,
  colLeftBody,
  colRightBody,
  colRightBodyMobile,
  withMap,
}) => {
  const ContentWrapper = styled.div`
    min-height: calc(100% - 10.5rem);
    display: grid;
    grid-template-columns: 1fr;
    ${(props) => withMap && `grid-template-rows: 305px`};
    @media ${lg} {
      grid-template-columns: 1fr 1fr;
      ${(props) => colRightBodyMobile && `grid-template-columns: 1fr 2fr`};
      ${(props) => withMap && `grid-template-rows: initial`};
    }
  `;

  const ColLeft = styled.div`
    padding: 0 2rem 0 2rem;
    display: grid;
    grid-template-rows: 1fr;
    ${(props) => colLeftBody && `grid-template-rows: 175px 1fr`};
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

  const ColRightMobile = styled.div`
    margin: 5rem 0 0 0;
    ${(props) => withMap && `margin: 0`};

    @media ${lg} {
      margin: 0;
      ${(props) => withMap && `padding: 0 0 0 3rem`};
    }
  `;

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
  withMap: PropTypes.bool,
};

PageContentWrapper.defaultProps = {
  colLeftBody: null,
  colRightBody: null,
  colRightBodyMobile: null,
  withMap: false,
};

export default PageContentWrapper;
