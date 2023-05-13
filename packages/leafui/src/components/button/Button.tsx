import React, { FC } from 'react';

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({ children, onClick, className='' }) => (
    <button
      type="button"
      className={ `bg-blue-500 hover:bg-blue-700 h-16 w-16 ${ className }` }
      onClick={ onClick }
    >
      { children }
    </button>
  );
