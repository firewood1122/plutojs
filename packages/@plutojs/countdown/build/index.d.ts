import React, { Component } from 'react';
interface PropsType {
    leftSecond: any;
    renderChildren?: (hour: number, min: number, second: number) => React.ReactNode;
    done?: any;
}
interface StateType {
    hour: number;
    min: number;
    second: number;
}
export default class extends Component<PropsType, StateType> {
    constructor(props: any);
    private timer;
    static defaultProps: {
        renderChildren: (hour: number, min: number, second: number) => string;
        done: () => void;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleCountdown;
    render(): {};
}
export {};
