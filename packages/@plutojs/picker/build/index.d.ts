/// <reference types="react" />
import '@plutojs/modal/build/index.css';
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
}
declare const _default: (props: PickerProps) => JSX.Element;
export default _default;
