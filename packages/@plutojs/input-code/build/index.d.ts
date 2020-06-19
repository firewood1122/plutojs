import { Component } from 'react';
interface PropsType {
    count: number;
    change: Function;
}
interface StateType {
    value: Array<number>;
}
declare class InputCode extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    static defaultProps: {
        count: number;
        change: () => void;
    };
    private inputEl;
    private onChange;
    clear(): void;
    render(): JSX.Element;
}
export default InputCode;
