import React from 'react';
interface PropsType {
    isMask?: boolean;
    closeOnClickOverlay?: boolean;
}
declare const _default: {
    alert: (text: string, confirm: () => void, confirmText?: string, customizeClass?: string) => void;
    alertCustomize: (customize: (destroy: () => void) => React.ReactNode, options?: PropsType) => void;
    confirm: (text: string, confirm: () => void, cancelText?: string, confirmText?: string, cancel?: () => void) => void;
};
export default _default;
