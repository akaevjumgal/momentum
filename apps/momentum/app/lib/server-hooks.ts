import { cookies } from 'next/headers';
import { COOKIE_ACCESS_TOKEN } from './constants';

export const useServerSession = () => {
  const isLoggedIn = cookies().has(COOKIE_ACCESS_TOKEN);

  return { isLoggedIn };
};
