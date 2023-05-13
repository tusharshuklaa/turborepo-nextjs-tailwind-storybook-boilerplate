// Button.tsx
import React, { FC, MouseEvent } from 'react';

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<IButtonProps> = (props) => {
  const { children, className = '', onClick } = props;

  return (
    <button
      type="button"
      className={`bg-blue-500 hover:bg-blue-700 h-16 w-16 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
