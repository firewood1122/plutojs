import { Component } from 'react';
interface PropsType {
    type?: string;
    text?: string;
    onChange?: Function;
}
interface StateType {
}
export default class Camera extends Component<PropsType, StateType> {
    static defaultProps: {
        type: string;
        text: string;
    };
    private onChange;
    render(): JSX.Element;
}
export {};
