import React from 'react';
import styled from 'styled-components';

const PageHomeTitle: React.FC = () => {
  const H1 = styled.h1`
    padding: 0 0 0 1rem;
    font-size: 3rem;
  `;

  const TextSpan = styled.span`
    display: block;
    margin: 0 0 1rem 0;

    &:first-child {
      font-size: 5rem;
    }
    span {
      color: var(--main-color);
    }
  `;

  const TitleSpan = styled.span`
    font-family: 'Damion', cursive;
    color: var(--secondary-font-color);
    display: block;
    font-size: 1.5rem;
    text-shadow: 0px 0px 5px var(--secondary-bg-color);
  `;

  return (
    <div>
      <TitleSpan>&lt;h1&gt;</TitleSpan>
      <H1>
        <TextSpan>Hi,</TextSpan>
        <TextSpan>
          I&apos;m
          <span> Bartek</span>
        </TextSpan>
        <TextSpan>front end developer</TextSpan>
      </H1>
      <TitleSpan>&lt;/h1&gt;</TitleSpan>
    </div>
  );
};

export default PageHomeTitle;
