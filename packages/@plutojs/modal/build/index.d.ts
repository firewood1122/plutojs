import React, { Component } from 'react';
interface PropsType {
    children: React.ReactNode;
    isOpened: Boolean;
    position?: 'top' | 'center' | 'bottom';
    isMask?: boolean;
    isLock?: boolean;
    closeOnClickOverlay?: boolean;
    onHide: () => void;
}
declare class Modal extends Component<PropsType, any> {
    constructor(props: PropsType);
    private positionMap;
    static defaultProps: {
        position: string;
        isMask: boolean;
        isLock: boolean;
        closeOnClickOverlay: boolean;
    };
    private modalEl;
    private prePosition;
    private scrollTop;
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
