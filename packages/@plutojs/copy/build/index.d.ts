import { Component } from 'react';
export default class Copy extends Component<any, any> {
    static isSupported(action?: string[]): boolean;
    static copy: (ele: HTMLElement) => void;
    render(): any;
}
