import React from "react";
export interface AlertOptions {
    text: string;
    customizeClass?: string;
    confirmText?: string;
    confirm: () => void;
    closeOnClickOverlay?: boolean;
}
export interface AlertCustomizeOptions {
    isMask?: boolean;
    closeOnClickOverlay?: boolean;
}
export interface ConfirmOptions {
    text: string;
    customizeClass?: string;
    confirmText: string;
    cancelText: string;
    confirm: () => void;
    cancel: () => void;
    closeOnClickOverlay?: boolean;
}
export default class {
    static modal: any;
    static destroy(): void;
    static getModal(content: React.ReactNode, options?: AlertCustomizeOptions): void;
    static alert(options: AlertOptions): void;
    static alertCustomize(customize: () => React.ReactNode, options?: AlertCustomizeOptions): void;
    static confirm(options: ConfirmOptions): void;
}
