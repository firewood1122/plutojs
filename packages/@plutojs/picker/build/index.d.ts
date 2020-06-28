import { Component } from 'react';
interface PickerProps {
}
interface PickerState {
    containerHeight: number;
}
export default class extends Component<PickerProps, PickerState> {
    private scrollContainer;
    state: {
        containerHeight: number;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
