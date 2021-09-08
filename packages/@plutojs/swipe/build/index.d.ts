import React from 'react';
interface PropsType {
    className?: string;
    disabled?: boolean;
    show: boolean;
    setShow: (bol: boolean) => void;
    zIndex?: number;
    openDistance?: number;
    closeDistance?: number;
    children?: React.ReactNode;
}
declare const Swipe: {
    (props: PropsType): JSX.Element;
    defaultProps: {
        calssName: string;
        disabled: boolean;
        zIndex: number;
        openDistance: number;
        closeDistance: number;
    };
};
export default Swipe;
