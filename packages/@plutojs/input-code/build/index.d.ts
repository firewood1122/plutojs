import { Component } from 'react';
interface PropsType {
    count: number;
}
interface StateType {
    value: Array<number>;
}
declare class InputCode extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    static defaultProps: {
        count: number;
    };
    private onChange;
    render(): JSX.Element;
}
export default InputCode;
