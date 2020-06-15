import React, { Component } from 'react';
interface PropsType {
    children: React.ReactNode;
    isOpened: Boolean;
    position?: 'top' | 'center' | 'bottom';
    isMask?: boolean;
    isLock?: boolean;
    closeOnClickOverlay?: boolean;
    zIndex?: number;
    target?: React.RefObject<HTMLElement>;
    onHide: () => void;
}
interface StateType {
    height: number;
}
declare class Modal extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    private positionMap;
    static defaultProps: {
        position: string;
        isMask: boolean;
        isLock: boolean;
        zIndex: number;
        closeOnClickOverlay: boolean;
    };
    private modalEl;
    private contentEl;
    private prePosition;
    private scrollTop;
    private containerHeight;
    private setStyle;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    static popup: (properties: any) => {
        destroy(): void;
    };
    render(): JSX.Element;
}
export default Modal;
