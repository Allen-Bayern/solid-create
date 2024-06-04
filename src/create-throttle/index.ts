// import throttle from 'lodash-es/throttle';
// import { onCleanup } from 'solid-js';
// import type { BasicFn } from '../../utils';

// interface CreateThrottleConf {
//     wait: number;
//     leading?: boolean;
//     trailing?: boolean;
// }

// export function createThrottleFn<T extends BasicFn>(
//     fn: T,
//     options: CreateThrottleConf = {
//         wait: 0,
//     }
// ) {
//     const { wait = 0, ...otherOpts } = options;

//     /** @description throttle function */
//     const run = throttle((...args: Parameters<T>): ReturnType<T> => fn(...args), wait, otherOpts);

//     const { cancel, flush } = run;
//     onCleanup(cancel);

//     return {
//         run,
//         cancel,
//         flush,
//     };
// }
