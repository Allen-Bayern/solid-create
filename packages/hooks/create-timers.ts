import { createEffect, onCleanup, onMount, on, type Accessor } from 'solid-js';

/**
 * @description A hook for `setTimeout`
 * @param method The function inside the `setTimeout`
 * @param wait The wait time of `setTimeout`
 * @returns An array, the first element is the timer cleaner function, the second one is the timer self
 */
export const createTimeoutFn = (method: () => void, wait: number | Accessor<number>) => {
    let ready = false;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    function isReady() {
        return ready;
    }

    function clear() {
        ready = false;

        if (timeout) {
            clearTimeout(timeout);
        }
    }

    function set() {
        clear();

        const waitTime = typeof wait === 'function' ? wait() : wait;

        timeout = setTimeout(() => {
            ready = true;
            method();
        }, waitTime);
    }

    function useEffectTimeout() {
        set();
        onCleanup(clear);
    }

    if (typeof wait === 'function') {
        createEffect(on(wait, useEffectTimeout));
    } else {
        onMount(useEffectTimeout);
    }

    return [isReady, clear, set] as const;
};

/**
 * @description A hook for `setInterval`
 * @param method The function inside the `setInterval`
 * @param wait The wait time of `setInterval`
 * @returns An array, the first element is the timer cleaner function, the second one is the timer self
 */
export const createInterval = (method: () => void, wait = 0) => {
    /** @description timer self */
    let timer: ReturnType<typeof setTimeout> = 0;

    /** @description clear function */
    const cleaner = () => {
        if (timer) {
            clearInterval(timer);
        }
    };

    createEffect(() => {
        timer = setInterval(method, wait);
    });
    onCleanup(cleaner);

    return [cleaner, timer] as const;
};
