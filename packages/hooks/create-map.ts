import { createImmer } from './create-immer';

export function createMap<K, V>(initMap: Map<K, V> | null = null) {
    const initValue = initMap ? initMap : new Map<K, V>();

    const [myMap, updateMyMap] = createImmer(initValue);

    const methods = {
        set(k: K, v: V) {
            updateMyMap(draft => {
                draft.set(k, v);
            });
        },
        setAll(newMap: Iterable<readonly [K, V]>) {
            updateMyMap(new Map(newMap));
        },
        remove(k: K) {
            updateMyMap(draft => {
                draft.delete(k);
            });
        },
        delete(k: K) {
            updateMyMap(draft => {
                draft.delete(k);
            });
        },
        reset() {
            updateMyMap(initValue);
        },
        clear() {
            updateMyMap(new Map<K, V>());
        },
        get(k: K) {
            return myMap().get(k);
        },
    };

    return [myMap, methods] as const;
}
