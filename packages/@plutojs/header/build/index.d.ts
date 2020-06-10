import React, { Component } from 'react';
interface PropsType {
    title: string;
    hide: boolean;
    zIndex: number;
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
        zIndex: number;
    };
    static getDerivedStateFromProps(props: PropsType, state: StateType): {
        show: boolean;
    };
    componentDidMount(): void;
    private clickBack;
    render(): React.ReactNode;
}
export {};
