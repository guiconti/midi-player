import React from 'react';

import styles from './Slider.less';

type SliderProps = React.HTMLProps<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> & {
    slim?: boolean;
  };

const Slider = ({ ...rest }: SliderProps): JSX.Element => {
  return <input type="range" {...rest} />;
};

export default Slider;
