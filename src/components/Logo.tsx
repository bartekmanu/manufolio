import React from 'react';
import styled from 'styled-components';

const SvgWrapper = styled.svg`
  width: 89px;
  height: 79px;
`;

const Logo: React.FC = () => (
  <SvgWrapper width="89" height="79" viewBox="0 0 89 79" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Logo">
      <g id="Vector" filter="url(#filter0_d)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.222 20.3904L52.144 26.2788L50.5722 29.6174L56.3836 30.6193L44.6742 42.396V18.8426L46.222 20.3904ZM49.7458 26.6838L46.7219 23.6648L46.6979 37.4374L52.2928 31.8848L47.7698 31.0574L49.7458 26.6838Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M44.0394 18.8427L41.5488 21.1958L38.2185 32.1952L36.9043 27.3994L36.9061 27.3892L36.9018 27.3902L36.5696 26.1778L34.8744 27.8675L34.0416 32.4798L35.762 34.085L36.0849 32.1956L37.1093 35.8586L39.295 37.6517L42.0878 26.5797V40.3772L44.0349 42.396L44.0394 18.8427Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.3241 71.4414C44.8941 72.1862 43.8191 72.1862 43.389 71.4414L32.0306 34.2604L7.15135 8.67585C6.72133 7.93103 7.25884 7 8.11889 7L44.3566 15.3792L80.5943 7C81.4543 7 81.9919 7.93102 81.5618 8.67584L56.7214 34.2604L45.3241 71.4414ZM69.6458 13.3211C70.5059 13.3211 71.0434 14.2521 70.6134 14.9969L45.3241 58.7993C44.8941 59.5441 43.819 59.5441 43.389 58.7993L18.0997 14.9969C17.6697 14.2521 18.2072 13.3211 19.0673 13.3211H69.6458Z"
          fill="url(#paint2_linear)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0.296618"
        y="0.296618"
        width="88.1199"
        height="78.4068"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset />
        <feGaussianBlur stdDeviation="3.35169" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <linearGradient id="paint0_linear" x1="44.3566" y1="7" x2="44.3566" y2="72" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBC0C" />
        <stop offset="0.84375" stopColor="#504100" />
      </linearGradient>
      <linearGradient id="paint1_linear" x1="44.3566" y1="7" x2="44.3566" y2="72" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBC0C" />
        <stop offset="0.84375" stopColor="#504100" />
      </linearGradient>
      <linearGradient id="paint2_linear" x1="44.3566" y1="7" x2="44.3566" y2="72" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBC0C" />
        <stop offset="0.84375" stopColor="#504100" />
      </linearGradient>
    </defs>
  </SvgWrapper>
);

export default Logo;
