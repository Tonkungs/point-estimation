import React from 'react';

interface HorizontalLineIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const MinusIcon: React.FC<HorizontalLineIconProps> = ({ width = 24, height = 24, color = 'black' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M6 12L18 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

export default MinusIcon;
