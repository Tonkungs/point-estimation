// components/ClockIcon.tsx
import React from 'react';

interface ClockIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const ClockIcon: React.FC<ClockIconProps> = ({ width = 24, height = 24, color = '#1C274C' }) => (
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
        d="M16 18L16 16M16 6L20 10.125M16 6L12 10.125M16 6L16 13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8 18L12 13.875M8 18L4 13.875M8 18L8 11M8 6V8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

export default ClockIcon;
