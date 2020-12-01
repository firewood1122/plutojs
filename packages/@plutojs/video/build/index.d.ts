import { Component } from 'react';
interface PropsType {
    coverUrl: string;
    videoUrl: string;
    controls?: boolean;
    playsInline?: boolean;
    closeVideo?: boolean;
    onClose?: Function;
    controlsList?: string;
    disablePictureInPicture?: boolean;
    disableFast?: boolean;
    disableFastCallback?: Function;
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
        controlsList: string;
        disablePictureInPicture: boolean;
        disableFast: boolean;
    };
    componentDidUpdate(prevProps: PropsType): void;
    private videoEl;
    private last;
    private play;
    private pause;
    private onEnded;
    private onTimeUpdate;
    render(): JSX.Element;
}
export {};
