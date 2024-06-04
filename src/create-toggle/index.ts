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

export function create01(initValue: 0 | 1 = 0) {
    const [v, setV] = createSignal(initValue);

    const toggle = (val: ReturnType<typeof v> | null = null) => {
        if (val === null) {
            setV(oldV => Number(!oldV) as 0 | 1);
            return;
        }

        setV(val);
    };

    return [v, toggle] as const;
}
