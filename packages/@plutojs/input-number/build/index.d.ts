import { Component } from 'react';
interface PropsType {
    min: number;
    max: number;
}
interface StateType {
    count: number;
}
declare class InputNumber extends Component<PropsType, StateType> {
    static defaultProps: {
        min: number;
        max: number;
    };
    constructor(props: any);
    private change;
    private reduce;
    private add;
    render(): JSX.Element;
}
export default InputNumber;
