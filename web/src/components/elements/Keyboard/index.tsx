import React from 'react';

import Key, { KeyProps } from '../Key';

import styles from './Keyboard.less';

type KeyboardProps = {
  keys: Array<KeyProps>;
};

const Keyboard = ({ keys }: KeyboardProps): JSX.Element => {
  return (
    <ul className={styles.keyboard}>
      {keys.map((key, index) => (
        <Key key={index} {...key} />
      ))}
    </ul>
  );
};

export default Keyboard;
