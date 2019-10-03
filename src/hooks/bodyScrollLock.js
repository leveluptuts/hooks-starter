import { useLayoutEffect } from 'react';

export function useBodyScrollLock() {
    useLayoutEffect(() => {
        const originalOverflow = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        // cleanup the style when unmounted!
        return function cleanup() {
            document.body.style.overflow = originalOverflow;
        }
    }, []);
}