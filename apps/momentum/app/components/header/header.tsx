import { FC } from 'react';
import { Avatar } from '../avatar/avatar';

interface HeaderProps {
  avatarUrl?: string;
  title?: string;
}

export const Header: FC<HeaderProps> = ({
  avatarUrl,
  title = 'Good morning 👋',
}) => (
  <header className="flex items-center h-20 px-5 dark:bg-dark-default">
    <Avatar url={avatarUrl} />
    <div>
      <p className="font-semibold text-xl ml-3 dark:text-white">{title}</p>
    </div>
    <div className="ml-auto border border-light-muted dark:border-dark-border rounded-full h-12 w-12 flex items-center justify-center">
      <i className="fa-regular fa-bell fa-xl text-light-muted dark:text-dark-muted"></i>
    </div>
  </header>
);
