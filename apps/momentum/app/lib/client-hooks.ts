import Cookies from 'js-cookie';
import { COOKIE_ACCESS_TOKEN } from './constants';

export const clientCookies = Cookies;

export const useClientSession = () => {
  const isLoggedIn = Boolean(clientCookies.get(COOKIE_ACCESS_TOKEN));

  const setToken = (token: string) => {
    clientCookies.set(COOKIE_ACCESS_TOKEN, token);
  };

  return { isLoggedIn, setToken };
};
