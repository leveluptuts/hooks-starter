import { useLayoutEffect } from 'react';

export function useBodyScrollLock() {
    useLayoutEffect(() => {
        document.body.style.overflow = 'hidden';
    })
}