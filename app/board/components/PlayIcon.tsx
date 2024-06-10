import React from 'react';

interface SvgIconProps {
  width?: number;
  height?: number;
  color?: string; // Tailwind CSS class for color
}

const ChevronRightIcon: React.FC<SvgIconProps> = ({
  width = 24,
  height = 24,
  color = 'text-gray-700', // Default color
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={color}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L7.59662 21.6145C5.53435 22.736 3 21.2763 3 18.9671L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258Z"

          fill="currentColor"
          stroke-width="1.5">
        </path>
      </g>
    </svg>
  );
};

export default ChevronRightIcon;
