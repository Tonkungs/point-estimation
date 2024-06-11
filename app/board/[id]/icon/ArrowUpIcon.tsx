import React from 'react';

interface ArrowDownIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const ArrowUpIcon: React.FC<ArrowDownIconProps> = ({ width = 24, height = 24, color = 'black' }) => (
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
        d="M13 12H21M13 8H21M13 16H21M6 7V17M6 7L3 10M6 7L9 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

export default ArrowUpIcon;
