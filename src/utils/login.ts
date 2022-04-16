import User from '@services/User/User.service';
import jwt_decode from 'jwt-decode';
import { JwtPayload } from 'jwt-decode';
const LOCAL_STORAGE_JWT_KEY = "Authorization";


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
    invokeOnSignChange.forEach(f => f());

}
export const signIn = async (
    emailValue: string,
    passwordValue: string,
) => {
    let token: string = await User.login(emailValue, passwordValue);
    console.log({ token });
    let sth = jwt_decode<Jwt>(token);
    console.log({ sth });

    localStorage.setItem(LOCAL_STORAGE_JWT_KEY, token);
    invokeOnSignChange.forEach(f => f());

};

export const isSignedIn = () => {
    let token: string | null = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
    if (token) {
        // let expiresAt = jwt_decode<Jwt>(token).exp;
        // TODO: check if jwt is still valid
        return true;
    } else {
        return false;
    }
}

export const getUserEmail = (): string => {
    let token: string | null = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
    if (token) {
        let sth = jwt_decode<Jwt>(token);
        return "" + sth.sub;
    } else {
        return "...";
    }
}
