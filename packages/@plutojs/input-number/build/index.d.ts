import { Component } from 'react';
interface PropsType {
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
    private inputEl;
    private change;
    private reduce;
    private add;
    render(): JSX.Element;
}
export default InputNumber;
