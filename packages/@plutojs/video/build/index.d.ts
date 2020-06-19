import { Component } from 'react';
interface PropsType {
    coverUrl: string;
    videoUrl: string;
    controls?: boolean;
    playsInline?: boolean;
    closeVideo?: boolean;
    onClose?: Function;
}
interface StateType {
    initVideo: boolean;
    showVideo: boolean;
}
export default class Video extends Component<PropsType, StateType> {
    constructor(props: any);
    static defaultProps: {
        controls: boolean;
        playsInline: boolean;
        closeVideo: boolean;
        onClose: {};
    };
    componentDidUpdate(prevProps: PropsType): void;
    private videoEl;
    private play;
    private onEnded;
    render(): JSX.Element;
}
export {};
