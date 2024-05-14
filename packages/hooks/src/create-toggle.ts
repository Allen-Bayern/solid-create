import { createSignal } from 'solid-js';

export function createToggle(defaultToggle = false) {
    const [bool, setBool] = createSignal(defaultToggle);

    const boolSetter = (v: boolean | null = null) => {
        if (v === null) {
            setBool(oldValue => !oldValue);
        } else {
            setBool(v);
        }
    };

    return [bool, boolSetter] as const;
}

export const createBool = createToggle;
