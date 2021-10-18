import React from "react";
interface AlertOptions {
    text: string;
    customizeClass?: string;
    confirmText?: string;
    confirm: () => void;
}
interface AlertCustomizeOptions {
    isMask?: boolean;
    closeOnClickOverlay?: boolean;
}
interface ConfirmOptions {
    text: string;
    customizeClass?: string;
    confirmText: string;
    cancelText: string;
    confirm: () => void;
    cancel: () => void;
}
export default class {
    static modal: any;
    static destroy(): void;
    static getModal(content: React.ReactNode, options?: AlertCustomizeOptions): void;
    static alert(options: AlertOptions): void;
    static alertCustomize(customize: (destroy: () => void) => React.ReactNode, options?: AlertCustomizeOptions): void;
    static confirm(options: ConfirmOptions): void;
}
export {};
