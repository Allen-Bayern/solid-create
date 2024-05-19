import { throttle } from 'lodash-es';
import { onCleanup } from 'solid-js';
import type { BasicFn } from 'hook-utils';

type CreateThrottleConf = {
    wait: number;
} & Parameters<typeof throttle>[2];

export const createThrottleFn = <T extends BasicFn>(
    fn: T,
    options: CreateThrottleConf = {
        wait: 0,
    }
) => {
    const { wait = 0, ...otherOpts } = options;

    /** @description throttle function */
    const run = throttle((...args: Parameters<T>): ReturnType<T> => fn(...args), wait, otherOpts);

    const { cancel, flush } = run;
    onCleanup(cancel);

    return {
        run,
        cancel,
        flush,
    };
};
