'use client';

/* eslint-disable react/jsx-props-no-spreading */

import React, { FC } from 'react';

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: MouseEvent) => void;
}

export const Button: FC<IButtonProps> = (props) => {
  const { children, className='' } = props;

    return (
      <button
        type="button"
        className={ `bg-blue-500 hover:bg-blue-700 h-16 w-16 ${ className }` }
        { ...props }
      >
        { children }
      </button>
    );
};
