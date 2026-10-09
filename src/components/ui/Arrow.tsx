import React from 'react';

interface ArrowProps {
      /** Direction the arrow points. */
      dir?: 'up-right' | 'down' | 'up' | 'right';
      size?: number;
      className?: string;
}

const rotation: Record<NonNullable<ArrowProps['dir']>, number> = {
      'up-right': 0,
      right: 45,
      down: 135,
      up: -45,
};

/** Inline SVG arrow: no icon font to download, and it inherits text color. */
const Arrow: React.FC<ArrowProps> = ({ dir = 'up-right', size = 18, className }) => (
      <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="square"
            aria-hidden="true"
            focusable="false"
            style={{ transform: `rotate(${rotation[dir]}deg)`, flexShrink: 0 }}
      >
            <path d="M6 18 18 6M8 6h10v10" />
      </svg>
);

export default Arrow;
