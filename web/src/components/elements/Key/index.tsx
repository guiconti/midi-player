import React from 'react';
import cx from 'classnames';

import styles from './Key.less';

export type KeyProps = {
  sharp?: boolean;
  active?: boolean;
};

const Key = ({ sharp, active }: KeyProps): JSX.Element => {
  return (
    <li
      className={cx(styles.key, {
        [styles.natural]: !sharp,
        [styles.sharp]: sharp,
        [styles.active]: active,
      })}
    />
  );
};

export default Key;
