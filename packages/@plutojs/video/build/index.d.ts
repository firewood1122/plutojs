import { Component } from 'react';
interface PropsType {
    coverUrl: string;
    videoUrl: string;
    controls?: boolean;
    playsInline?: boolean;
    disablePictureInPicture?: boolean;
}
interface StateType {
    showVideo: boolean;
}
export default class Video extends Component<PropsType, StateType> {
    constructor(props: any);
    static defaultProps: {
        controls: boolean;
        playsInline: boolean;
        disablePictureInPicture: boolean;
    };
    private videoEl;
    private startVideo;
    private endVideo;
    render(): JSX.Element;
}
export {};
