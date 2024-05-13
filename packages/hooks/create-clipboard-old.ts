import { createSignal } from 'solid-js';
import ClipboardJS from 'clipboard';

const { isSupported, copy: copyMethod, cut: cutMethod } = ClipboardJS;

export const createClipboardOld = <T extends Element>(target: string | T) => {
    const supportedStatus = isSupported();

    let realTarget: T | null = null;
    if (typeof target === 'string') {
        realTarget = document.querySelector(target);
    } else {
        realTarget = target;
    }

    const [copyValue, setCopyValue] = createSignal('');

    const showError = () => {
        if (!supportedStatus) {
            console.error('Clipboard.js is not supported');
        }
    };

    const methods = {
        copy() {
            if (realTarget && supportedStatus) {
                setCopyValue(copyMethod(realTarget));
                return;
            }

            showError();
        },
        cut() {
            if (realTarget && supportedStatus) {
                setCopyValue(cutMethod(realTarget));
                return;
            }

            showError();
        },
    };

    return [copyValue, methods] as const;
};
