import { Component } from 'react';
interface PropsType {
    coverUrl: string;
    videoUrl: string;
    controls?: boolean;
    playsInline?: boolean;
}
interface StateType {
    showVideo: boolean;
}
export default class Video extends Component<PropsType, StateType> {
    constructor(props: any);
    static defaultProps: {
        controls: boolean;
        playsInline: boolean;
    };
    private videoEl;
    private play;
    private onEnded;
    render(): JSX.Element;
}
export {};
