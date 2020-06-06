import React, { Component } from 'react';
interface PropsType {
    className?: string;
    disabled?: boolean;
    onClick: (event: React.MouseEvent) => void;
}
interface StateType {
}
export default class Button extends Component<PropsType, StateType> {
    static defaultProps: {
        className: string;
        disabled: boolean;
    };
    render(): JSX.Element;
}
export {};
