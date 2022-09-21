import React, { Component } from "react";
interface PropsType {
    type: string;
    value: string;
    className?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    maxLength?: number;
    offsetTop?: number;
    disabled?: boolean;
}
export default class Input extends Component<PropsType> {
    static defaultProps: {
        type: string;
        className: string;
        placeholder: string;
        onChange: () => void;
        onFocus: () => void;
        offsetTop: number;
        disabled: boolean;
    };
    private inputEl;
    private onFocus;
    clear(): void;
    render(): JSX.Element;
}
export {};
