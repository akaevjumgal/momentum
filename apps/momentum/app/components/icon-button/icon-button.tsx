import Image from 'next/image';

import styles from './icon-button.module.css';
import { HTMLAttributes } from 'react';
import { cx } from '../../utils';

type IconButtonColor = 'primary' | 'transparent';

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  iconUrl: string;
  color?: IconButtonColor;
  iconSize?: number | `${number}`;
}

export const IconButton = ({
  iconUrl,
  color = 'primary',
  iconSize = 48,
  ...props
}: IconButtonProps) => {
  return (
    <button className={cx(styles.root, styles[`__${color}`])} {...props}>
      <Image src={iconUrl} width={iconSize} height={iconSize} alt={iconUrl} />
    </button>
  );
};
