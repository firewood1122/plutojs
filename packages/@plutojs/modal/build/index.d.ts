import React, { Component } from "react";
interface PropsType {
    children: React.ReactNode;
    isOpened: boolean;
    position?: "top" | "center" | "bottom";
    isMask?: boolean;
    isLock?: boolean;
    closeOnClickOverlay?: boolean;
    zIndex?: number;
    target?: React.RefObject<HTMLElement>;
    transition?: string;
    maskClassName?: string;
    onHide: () => void;
}
interface StateType {
    height: number;
    visibility: "visible" | "hidden";
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
    modalId: string;
    private modalEl;
    private contentEl;
    private prePosition;
    private scrollTop;
    private containerHeight;
    private setStyle;
    componentDidMount(): void;
    componentDidUpdate(prevProps: PropsType): void;
    componentWillUnmount(): void;
    static popup: (properties: any) => {
        destroy(): void;
    };
    setVisibility: (visibility: "visible" | "hidden") => void;
    render(): JSX.Element;
}
export default Modal;
