import React from 'react';

interface SwiggyIconProps {
  className?: string;
  size?: number;
}

export const SwiggyIcon: React.FC<SwiggyIconProps> = ({ className = 'w-5 h-5', size }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Official stylized Swiggy pin / swirl mark */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 0C22.386 0 0 22.386 0 50c0 23.947 16.85 43.957 39.467 48.715V70.783c-2.302-1.393-3.69-3.924-3.69-6.685 0-4.37 3.543-7.913 7.913-7.913h12.62c4.37 0 7.913 3.543 7.913 7.913 0 2.761-1.388 5.292-3.69 6.685v27.932C83.15 93.957 100 73.947 100 50 100 22.386 77.614 0 50 0zm0 18.261c-17.528 0-31.739 14.211-31.739 31.739 0 7.916 2.894 15.158 7.696 20.739h8.739c-3.739-4.87-5.978-10.978-5.978-17.609 0-15.652 12.696-28.348 28.348-28.348 9.087 0 17.196 4.261 22.435 10.891l6.326-6.326C68.978 22.565 60.043 18.261 50 18.261z"
      />
    </svg>
  );
};
