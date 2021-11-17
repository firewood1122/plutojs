import React from "react";
interface GroupItemType {
    text: string;
    value: any;
}
interface PickerItemType {
    text: string;
    value: any;
    children?: Array<PickerItemType>;
}
interface PickerProps {
    isOpened: boolean;
    onCancel: () => void;
    onConfirm: (items: Array<PickerItemType>) => void;
    items: Array<PickerItemType>;
    selected?: Array<PickerItemType>;
    group?: number;
    renderItem?: (item: GroupItemType, index: number) => React.ReactNode;
    text?: {
        confirm: string;
        title: string;
        cancel: string;
    };
    className?: string;
    renderBottom?: (onConfirm: () => void) => JSX.Element;
}
declare const _default: (props: PickerProps) => JSX.Element;
export default _default;
