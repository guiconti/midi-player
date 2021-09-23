import React from 'react';

import styles from './Button.less';

type ButtonProps = React.HTMLProps<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    slim?: boolean;
  };

const Button = ({ children, ...rest }: ButtonProps): JSX.Element => {
  return <button {...rest}>{children}</button>;
};

export default Button;
