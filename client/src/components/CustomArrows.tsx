import React from 'react';

interface ArrowProps {
  onClick?: () => void;
}

export const CustomLeftArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="custom-arrow custom-left-arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </button>
  );
};

export const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="custom-arrow custom-right-arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
      </svg>
    </button>
  );
};
