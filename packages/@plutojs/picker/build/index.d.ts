import { Component } from 'react';
interface PickerItemType {
    text: string;
    value: any;
    children?: Array<PickerItemType>;
}
interface PickerProps {
    group: number;
    items: Array<PickerItemType>;
}
interface PickerState {
    showGroup: boolean;
    containerHeight: number;
}
export default class extends Component<PickerProps, PickerState> {
    private scrollContainer;
    state: {
        showGroup: boolean;
        containerHeight: number;
    };
    static defaultProps: {
        items: any[];
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
