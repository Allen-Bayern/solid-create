import { createEffect, type Accessor } from 'solid-js';
import { createTimeoutFn } from './create-timers';

export function createDebounce(method: () => void, wait: number | Accessor<number>) {
    const [isReady, cancel, reset] = createTimeoutFn(method, wait);
    createEffect(reset);

    return [isReady, cancel] as const;
}
