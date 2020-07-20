import { Component } from 'react';
interface PropsType {
    type: string;
    value: string;
    className?: string;
    placeholder?: string;
    onChange?: () => {};
    onFocus?: () => {};
    maxLength?: number;
    offsetBottom?: number;
}
interface StateType {
}
export default class Input extends Component<PropsType, StateType> {
    static defaultProps: {
        type: string;
        className: string;
        placeholder: string;
        onChange: {};
        onFocus: {};
        offsetBottom: number;
    };
    private inputEl;
    private onFocus;
    render(): JSX.Element;
}
export {};
