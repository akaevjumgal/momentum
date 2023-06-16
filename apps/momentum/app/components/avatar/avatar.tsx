import Image from 'next/image';
import { FC } from 'react';
import styles from './avatar.module.css';

interface AvatarProps {
  url?: string;
}

interface AvatarPlaceholderProps {
  fullName: string;
}

const AvatarPlaceholder: FC<AvatarPlaceholderProps> = ({ fullName }) => {
  const [firstName, lastName] = fullName.split(' ');
  const initials = firstName.charAt(0) + lastName.charAt(0);

  return <div className={styles.avatar}>{initials}</div>;
};

export const Avatar: FC<AvatarProps> = ({ url }) => {
  if (!url) {
    return <AvatarPlaceholder fullName="Zhumgal Akaev" />;
  }

  return (
    <div>
      <Image src={url} width={32} height={32} alt="#" />
    </div>
  );
};
