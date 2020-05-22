import { Component } from 'react';
interface Props {
    onClick: () => void;
}
interface States {
}
export default class Button extends Component<Props, States> {
    render(): JSX.Element;
}
export {};
