import React, { SVGProps } from 'react';

export const ConstructorIcon: React.FC<SVGProps<SVGSVGElement>> = (
  props,
): JSX.Element => {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.5 8.33334L1.16666 5.00001L4.5 1.66668M9.5 1.66668L12.8333 5.00001L9.5 8.33334" stroke="#4D5562" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
