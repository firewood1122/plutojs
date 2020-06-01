import React, { Component } from 'react';
interface PropsType {
    title: string;
    hide: boolean;
}
interface StateType {
    show: boolean;
    showBack: boolean;
}
export default class extends Component<PropsType, StateType> {
    state: {
        show: boolean;
        showBack: boolean;
    };
    static defaultProps: {
        title: string;
        hide: boolean;
    };
    componentDidMount(): void;
    private clickBack;
    render(): React.ReactNode;
}
export {};
