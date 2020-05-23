import { Component } from 'react';
interface PropsType {
    className?: string;
    onClick: () => void;
}
interface StateType {
}
export default class Button extends Component<PropsType, StateType> {
    static defaultProps: {
        className: string;
    };
    render(): JSX.Element;
}
export {};
