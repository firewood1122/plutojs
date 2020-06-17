import React, { Component } from 'react';
interface PropsType {
    children: React.ReactNode;
    bodyScroll?: boolean;
    scrollThreshold?: number;
    loadMore?: Function;
}
interface StateType {
}
export default class LoadMore extends Component<PropsType, StateType> {
    static defaultProps: {
        bodyScroll: boolean;
        scrollThreshold: number;
    };
    private containerEl;
    componentDidMount(): void;
    private scroll;
    render(): JSX.Element;
}
export {};
