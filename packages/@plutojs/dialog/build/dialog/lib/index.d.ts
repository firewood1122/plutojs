interface PropsType {
    isMask?: boolean;
    closeOnClickOverlay?: boolean;
}
declare const _default: {
    alert: (text: string, confirm: Function, confirmText?: string) => void;
    alertCustomize: (customize: Function, options?: PropsType) => void;
    confirm: (text: string, confirm: Function, cancelText?: string, confirmText?: string, cancel?: () => void) => void;
};
export default _default;
