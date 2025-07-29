import React from 'react';
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles, onClick }) => {
  const defaultStyles = "bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200";

  return (
    <button
      className={`${defaultStyles} ${styles || ''}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

