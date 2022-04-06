import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import classNames from 'classnames'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  mode: 'primary' | 'outline' | 'link';
  size: 'regular' | 'small' | 'large';
}

export const Button = ({ disabled, title, mode='primary', size='regular' ,...rest }: ButtonProps) => {
  const { className } = rest;

  const {
    theme: { button },
  } = useContext(ThemeContext)
  return(
    <button
    className={classNames(`${button.base} ${button[mode].base} ${button[mode].active} ${button[mode].disabled} ${button.size[size]}`, className)}
    disabled={disabled}
    {...rest}
  >
    {title}
  </button>
  )
}
 


