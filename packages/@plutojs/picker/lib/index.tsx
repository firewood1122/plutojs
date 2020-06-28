import React, { Component } from 'react';
const style = require('./index.less');

interface GroupProps {
  containerHeight: number,
}
interface GroupState {
  itemHeight: number,
  selected: number,
}
class Group extends Component<GroupProps, GroupState> {
  state = {
    itemHeight: 0,
    selected: 0,
  }

  private item: any = null;

  componentDidMount() {
    const itemHeight = (this.item as HTMLElement).clientHeight / 2;
    this.setState({
      itemHeight,
    });
  }

  private getItemClassName = (index: number) => {
    const { selected } = this.state;
    const classNameItems = [style.groupItem];
    if (index === selected) classNameItems.push(style.selectedGroupItem);
    return classNameItems.join(' ');
  }

  render() {
    const { containerHeight } = this.props;
    const { itemHeight } = this.state;
    const transfromStyle = { transform: `translate3d(0px, ${containerHeight / 2 - itemHeight}px, 0px)` };

    const items = [
      {
        text: '个人',
        value: 1,
      },
      {
        text: '企业',
        value: 2,
      }
    ];
    return (
      <div style={transfromStyle}>
        {
          items.map((item, index) => (
            <div ref={item => { if (index === 0) this.item = item; }} key={`item-${index}`} className={this.getItemClassName(index)}>
              {item.text}
            </div>
          ))
        }
      </div>
    );
  }
}

interface PickerProps {
}
interface PickerState {
  containerHeight: number,
}
export default class extends Component<PickerProps, PickerState> {

  private scrollContainer: any = null;

  state = {
    containerHeight: 0,
  }

  componentDidMount() {
    const containerHeight = (this.scrollContainer as HTMLElement).clientHeight;
    this.setState({
      containerHeight,
    });
  }

  render() {
    const { containerHeight } = this.state;
    return (
      <div className={`${style.container}`}>
        <div className={`${style.action}`}>
          <div className={`${style.cancel}`}>取消</div>
          <div className={`${style.title}`}>请选择</div>
          <div className={`${style.confirm}`}>确定</div>
        </div>
        <div ref={item => { this.scrollContainer = item; }} className={`${style.scroll}`}>
          <div className={style.selected}></div>
          <Group containerHeight={containerHeight} />
        </div>
      </div>
    );
  }
}
