import React, { Component } from 'react';
interface PropsType {
    type?: 'submit' | 'button' | 'reset';
    className?: string;
    disabled?: boolean;
    onClick: (event: React.MouseEvent) => void;
}
interface StateType {
}
export default class Button extends Component<PropsType, StateType> {
    static defaultProps: {
        type: string;
        className: string;
        disabled: boolean;
    };
    render(): JSX.Element;
}
export {};
