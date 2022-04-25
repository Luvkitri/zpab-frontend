import User from '@services/User/User.service';
import jwt_decode from 'jwt-decode';
import { JwtPayload } from 'jwt-decode';
const LOCAL_STORAGE_JWT_KEY = 'Authorization';

let invokeOnSignChange: { (): void }[] = [];
export let onSignChange = (f: { (): void }) => {
  invokeOnSignChange.push(f);
};

interface Jwt extends JwtPayload {
  user_id: number;
  is_admin: boolean;
}
export const signOut = () => {
  localStorage.removeItem(LOCAL_STORAGE_JWT_KEY);
  invokeOnSignChange.forEach((f) => f());
};
export const signIn = async (emailValue: string, passwordValue: string) => {
  let token: string;
  try {
    token = await User.login(emailValue, passwordValue);
  } catch (error) {
    return false;
  }
  localStorage.setItem(LOCAL_STORAGE_JWT_KEY, token);
  invokeOnSignChange.forEach((f) => f());
  return true;
};

export const isSignedIn = () => {
  let token: string | null = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
  if (token) {
    let expiresAt = Number(jwt_decode<Jwt>(token).exp);
    const unixTime = Math.floor(Date.now() / 1000);
    if (unixTime >= expiresAt) {
      console.warn('Session timed out');
      signOut();
      return false;
    }
    return true;
  } else {
    return false;
  }
};

export const isAdmin = () => {
  let token: string | null = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
  if (token) {
    let sth = jwt_decode<Jwt>(token);
    return sth.is_admin;
  } else {
    throw 'Not logged in';
  }
}

export const getUserEmail = (): string => {
  let token: string | null = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
  if (token) {
    let sth = jwt_decode<Jwt>(token);
    return '' + sth.sub;
  } else {
    return '...';
  }
};
export const getUserId = (): number => {
  let token: string | null = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
  if (token) {
    let sth = jwt_decode<Jwt>(token);
    return sth.user_id;
  } else {
    throw 'Not logged in';
  }
};
