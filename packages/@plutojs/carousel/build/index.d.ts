import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
interface PropsType {
    children: React.ReactChild[];
    selectedItem?: number;
    showArrows?: boolean;
    showStatus?: boolean;
    showThumbs?: boolean;
    showIndicators?: boolean;
    transitionTime?: number;
    onChange?: () => void;
}
interface StateType {
}
export default class extends Component<PropsType, StateType> {
    private startX;
    private componentObj;
    static defaultProps: {
        selectedItem: number;
        showArrows: boolean;
        showStatus: boolean;
        showThumbs: boolean;
        showIndicators: boolean;
        transitionTime: number;
        onChange: () => void;
    };
    componentDidMount(): void;
    render(): React.ReactNode;
}
export {};
