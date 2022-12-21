import React, { Component } from "react";
interface PropsType {
    type?: "submit" | "button" | "reset";
    className?: string;
    disabled?: boolean;
    onClick: (event: React.MouseEvent) => void;
    children: React.ReactNode;
}
export default class Button extends Component<PropsType> {
    static defaultProps: {
        type: string;
        className: string;
        disabled: boolean;
    };
    render(): JSX.Element;
}
export {};
