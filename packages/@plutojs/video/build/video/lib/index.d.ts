import { Component } from "react";
interface PropsType {
    coverUrl: string;
    videoUrl: string;
    fullscreen?: boolean;
    fullscreenTips?: string;
    currentTime?: number;
    controls?: boolean;
    playsInline?: boolean;
    closeVideo?: boolean;
    onClose?: () => void;
    onCloseFullscreenVideo?: (time: number) => void;
    controlsList?: string;
    disablePictureInPicture?: boolean;
    disableFast?: boolean;
    disableFastCallback?: () => void;
}
interface StateType {
    initVideo: boolean;
    showVideo: boolean;
}
export default class Video extends Component<PropsType, StateType> {
    constructor(props: any);
    static defaultProps: {
        fullscreen: boolean;
        fullscreenTips: string;
        currentTime: number;
        controls: boolean;
        playsInline: boolean;
        closeVideo: boolean;
        onClose: () => void;
        onCloseFullscreenVideo: () => void;
        controlsList: string;
        disablePictureInPicture: boolean;
        disableFast: boolean;
    };
    componentDidUpdate(prevProps: PropsType): void;
    private videoEl;
    private last;
    private play;
    private onCanPlay;
    private pause;
    private onEnded;
    private onTimeUpdate;
    private closeFullscreenVideo;
    render(): JSX.Element;
}
export {};
