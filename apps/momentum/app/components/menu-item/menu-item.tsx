import Image from 'next/image';
import { HTMLAttributes, PropsWithChildren } from 'react';

import styles from './menu-item.module.css';
import { cx } from '../../utils';
import { useTheme } from '../../theme';
import { Checkbox } from '../checkbox/checkbox';
import { Label, LabelProps } from '../label/label';

interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  iconUrl?: string;
  markable?: boolean;
  label?: LabelProps;
}

export const MenuItem = ({
  children,
  iconUrl,
  markable = false,
  className,
  label,
  ...props
}: PropsWithChildren<MenuItemProps>) => {
  const { mode } = useTheme();

  return (
    <li className={cx(styles.root, className)} {...props}>
      {markable && <Checkbox style={{ marginRight: '0.75rem' }} />}
      {iconUrl && <Image src={iconUrl} alt={iconUrl} width={24} height={24} />}
      <p className={cx(styles.label, `text--${mode}`)}>{children}</p>
      {label && (
        <Label style={{ marginLeft: 'auto' }} color={label.color}>
          {label.children}
        </Label>
      )}
    </li>
  );
};
