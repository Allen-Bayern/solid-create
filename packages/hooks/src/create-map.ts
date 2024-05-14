import { createSignal } from 'solid-js';

export function createMap<K, V>(initMap: Map<K, V> | null = null) {
    const initValue = initMap ? initMap : new Map<K, V>();

    const [myMap, setMyMap] = createSignal(initValue);

    const methods = {
        set(k: K, v: V) {
            setMyMap(oldMap => {
                const newMap = new Map(oldMap);
                newMap.set(k, v);
                return newMap;
            });
        },
        setAll(newMap: Iterable<readonly [K, V]>) {
            setMyMap(new Map(newMap));
        },
        remove(k: K) {
            setMyMap(oldMap => {
                const newMap = new Map(oldMap);
                newMap.delete(k);
                return newMap;
            });
        },
        delete(k: K) {
            setMyMap(oldMap => {
                const newMap = new Map(oldMap);
                newMap.delete(k);
                return newMap;
            });
        },
        reset() {
            setMyMap(new Map(initValue));
        },
        clear() {
            setMyMap(new Map<K, V>());
        },
        get(k: K) {
            return myMap().get(k);
        },
    };

    return [myMap, methods] as const;
}
