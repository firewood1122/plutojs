import { Component } from 'react';
interface PickerProps {
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
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
