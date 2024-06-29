import React from 'react';

interface CustomArrowProps {
  onClick: () => void;
  label: string;
}

const CustomArrow: React.FC<CustomArrowProps> = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="absolute bottom-4 bg-white p-2 rounded-full shadow-md z-10">
      {label}
    </button>
  );
};

export default CustomArrow;