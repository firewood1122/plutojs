import { Component } from 'react';
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
    group?: number;
}
interface PickerState {
    showGroup: boolean;
    containerHeight: number;
    groupItems: Array<Array<PickerItemType>>;
}
export default class extends Component<PickerProps, PickerState> {
    private scrollContainer;
    private selected;
    state: {
        showGroup: boolean;
        containerHeight: number;
        groupItems: any[];
    };
    static defaultProps: {
        group: number;
        items: any[];
    };
    componentDidMount(): void;
    private initGroupItems;
    private initSelected;
    private onChange;
    render(): JSX.Element;
}
export {};
