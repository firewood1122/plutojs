import { Component } from "react";

/**
 * 选择节点
 *
 * @param ele 节点对象
 */
const select = (ele: HTMLElement) => {
  if (ele.hasAttribute("contenteditable")) ele.focus();

  const range = document.createRange();
  range.selectNodeContents(ele);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  return selection.toString();
};

export default class Copy extends Component<any, any> {
  /**
   * 检查是否支持复制
   *
   * @param action
   */
  static isSupported(action = ["copy", "cut"]) {
    const actions = typeof action === "string" ? [action] : action;
    let support = !!document.queryCommandSupported;

    actions.forEach((action) => {
      support = support && !!document.queryCommandSupported(action);
    });
    return support;
  }

  /**
   * 复制文案
   *
   * @param ele
   */
  static copy = (ele: HTMLElement) => {
    select(ele);
    document.execCommand("copy");
  };

  render() {
    return null;
  }
}
