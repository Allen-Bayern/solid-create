/** @description basic function type */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BasicFn = (...args: any[]) => any;

/** @description to purify dict type */
export type PurifyDictType<T> = T extends object ? T : never;
