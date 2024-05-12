import { createImmer } from './create-immer';

export function createSet<T>(initSet: Set<T> | null = null) {
    const initValue = initSet ? initSet : new Set<T>();

    const [aSet, updateASet] = createImmer(initValue);

    const methods = {
        add(v: T) {
            updateASet(draft => {
                draft.add(v);
            });
        },
        remove(v: T) {
            updateASet(draft => {
                draft.delete(v);
            });
        },
        delete(v: T) {
            updateASet(draft => {
                draft.delete(v);
            });
        },
        has(v: T) {
            return aSet().has(v);
        },
        toggle(v: T) {
            const aSetValue = aSet();
            if (aSetValue.has(v)) {
                updateASet(draft => {
                    draft.delete(v);
                });
            } else {
                updateASet(draft => {
                    draft.add(v);
                });
            }
        },
        reset() {
            updateASet(initValue);
        },
        clear() {
            updateASet(new Set<T>());
        },
    };

    return [aSet, methods] as const;
}
