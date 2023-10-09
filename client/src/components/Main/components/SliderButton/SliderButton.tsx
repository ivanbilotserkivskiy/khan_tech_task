import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import SliderButtonStyles from './SliderButon.module.css'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};
export const SliderButton = ({
  className,
  children,
  disabled,
  active,
  onClick,
}: Props) => {
  const customClassName = cn(SliderButtonStyles.page_link, SliderButtonStyles[`${className}`], { 
   [SliderButtonStyles.active]: active, 
    [SliderButtonStyles.disabled]: disabled 
  });

  return (
    <button className={customClassName} type="button" onClick={onClick}>
      {children}
    </button>
  );
};