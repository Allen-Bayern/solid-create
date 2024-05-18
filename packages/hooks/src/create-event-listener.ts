import { onCleanup, onMount } from 'solid-js';

type EventName = keyof WindowEventMap;
type ListenerFunc = Parameters<typeof window.addEventListener>[1];
type EventListenerOpts = Parameters<typeof window.addEventListener>[2];

export const createEventListener = (eventName: EventName, cb: ListenerFunc, opts: EventListenerOpts) => {
    const { addEventListener, removeEventListener } = window;

    onMount(() => {
        addEventListener(eventName satisfies string, cb, opts);
    });

    onCleanup(() => {
        removeEventListener(eventName satisfies string, cb, opts);
    });
};
