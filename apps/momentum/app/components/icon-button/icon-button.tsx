import Image from 'next/image';

import styles from './icon-button.module.css';
import { HTMLAttributes } from 'react';
import { cx } from '../../utils';

type IconButtonColor = 'primary' | 'transparent';
type IconButtonSize = 'small' | 'medium' | 'large';

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  iconUrl: string;
  color?: IconButtonColor;
  iconSize?: number | `${number}`;
  size?: IconButtonSize;
}

export const IconButton = ({
  iconUrl,
  color = 'primary',
  iconSize = 48,
  size = 'medium',
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={cx(styles.root, styles[`__${color}`], styles[`__${size}`])}
      {...props}
    >
      <Image src={iconUrl} width={iconSize} height={iconSize} alt={iconUrl} />
    </button>
  );
};
