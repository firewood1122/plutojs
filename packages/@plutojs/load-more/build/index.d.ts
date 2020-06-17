import React, { Component } from 'react';
interface PropsType {
    children?: React.ReactNode;
    scrollThreshold?: number;
    loadMore?: Function;
}
interface StateType {
}
export default class LoadMore extends Component<PropsType, StateType> {
    static defaultProps: {
        scrollThreshold: number;
    };
    private scroll;
    render(): JSX.Element;
}
export {};
