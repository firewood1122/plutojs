import { Component } from 'react';
interface PropsType {
    default?: number;
    min?: number;
    max?: number;
    keyboard?: boolean;
    onChange: Function;
}
interface StateType {
    count: number;
}
declare class InputNumber extends Component<PropsType, StateType> {
    static defaultProps: {
        min: number;
        max: number;
        keyboard: boolean;
        onChange: () => void;
    };
    constructor(props: any);
    componentDidUpdate(prevProps: PropsType): void;
    private inputEl;
    private change;
    private reduce;
    private add;
    private onFocus;
    private onBlur;
    render(): JSX.Element;
}
export default InputNumber;
