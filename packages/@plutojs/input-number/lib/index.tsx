import React, { Component, createRef } from "react";
import style from "./index.less";

interface PropsType {
  default?: number;
  min?: number;
  max?: number;
  keyboard?: boolean;
  onChange: (count: number) => void;
}
interface StateType {
  count: number;
}
class InputNumber extends Component<PropsType, StateType> {
  static defaultProps = {
    min: 1,
    max: 0,
    keyboard: true,
    onChange: () => {
      // do nothing
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      count: props.default || props.min,
    };
    this.inputEl = createRef();
  }

  componentDidUpdate(prevProps: PropsType) {
    const { default: defaultValue, max, onChange } = this.props;
    if (defaultValue !== prevProps.default) {
      this.setState({
        count: defaultValue,
      });
    }
    if (max !== prevProps.max && this.state.count > max) {
      // 检查最大值
      this.setState({
        count: max,
      });
      // 回调onChange方法
      onChange && onChange(max);
    }
  }

  private inputEl; // 输入框实例

  /**
   * 响应输入框修改
   */
  private change = (event) => {
    const { min, max, onChange } = this.props;
    const { value } = event.target;

    if (value === "" || !/^[0-9]*$/.test(value)) {
      // 处理异常输入
      this.setState({
        count: value === "" ? 0 : min,
      });
      return;
    } else if (min !== 0 && parseInt(value) < min) {
      // 处理超出最小值
      this.setState({
        count: min,
      });
      return;
    } else if (max !== 0 && parseInt(value) > max) {
      // 处理超出最大值
      this.setState({
        count: max,
      });
      return;
    }
    const inputValue = parseInt(value);
    this.inputEl.current.value = inputValue;
    this.setState({
      count: inputValue,
    });

    // 回调onChange方法
    onChange && onChange(inputValue);
  };

  /**
   * 点击减少按钮
   */
  private reduce = () => {
    const { min, onChange } = this.props;
    const { count } = this.state;

    if (count - 1 >= min) {
      this.setState({
        count: count - 1,
      });
      // 回调onChange方法
      onChange && onChange(count - 1);
    }
  };

  /**
   * 点击增加按钮
   */
  private add = () => {
    const { max, onChange } = this.props;
    const { count } = this.state;

    if (max !== 0 && count + 1 > max) {
      return;
    }
    this.setState({
      count: count + 1,
    });
    // 回调onChange方法
    onChange && onChange(count + 1);
  };

  /**
   * 响应输入框点击
   */
  private onFocus = () => {
    this.inputEl.current.value = "";
  };

  /**
   * 响应输入框失去焦点
   */
  private onBlur = () => {
    const { min, onChange } = this.props;
    const { value } = this.inputEl.current;
    if (value === "" || parseInt(value) < min) {
      this.setState({
        count: min,
      });
      // 回调onChange方法
      onChange && onChange(min);
    }
  };

  render() {
    const { keyboard } = this.props;
    const { count } = this.state;

    return (
      <div className={style.container}>
        <div className={style.reduce} onClick={this.reduce}></div>
        {keyboard ? (
          <input
            ref={this.inputEl}
            className={style.input}
            type="number"
            pattern="[0-9]*"
            value={count}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.change}
          />
        ) : (
          <div className={style.input}>{count}</div>
        )}
        <div className={style.add} onClick={this.add}></div>
      </div>
    );
  }
}

export default InputNumber;
