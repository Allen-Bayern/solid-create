import { createSignal } from 'solid-js';
import Cookies from 'js-cookie';

export const createCookieSignal = (cookieName: string) => {
    const [value, setValue] = createSignal<string | null>(Cookies.get(cookieName) || null);

    const updateCookie = (newValue: string, options?: Cookies.CookieAttributes) => {
        Cookies.set(cookieName, newValue, options);
        setValue(newValue);
    };

    const deleteCookie = () => {
        Cookies.remove(cookieName);
        setValue(null);
    };

    return [value, updateCookie, deleteCookie] as const;
};
