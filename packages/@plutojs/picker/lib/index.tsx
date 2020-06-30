import React, { Component } from 'react';
const style = require('./index.less');

interface GroupProps {
  containerHeight: number,
  data: Array<{
    text: string,
    value: any,
  }>,
}
interface GroupState {
  translateY: number,
  selected: number,
}
class Group extends Component<GroupProps, GroupState> {
  state = {
    translateY: 0,
    selected: 0,
  }

  private scrollContainer: any = null; // 可滚动容器
  private item: any = null; // 第一个数据项对象，用于取出高度
  private itemHeight: number = 0; // 数据项高度
  private startY: number = 0; // 移动开始时Y座标 

  componentDidMount() {
    const { containerHeight } = this.props;
    const itemHeight = (this.item as HTMLElement).clientHeight;
    const translateY = (containerHeight - itemHeight) / 2;
    this.itemHeight = itemHeight;
    this.setState({
      translateY,
    });
  }

  /**
   * 获取数据库样式名称
   * 
   * @param index 
   */
  private getItemClassName = (index: number) => {
    const { selected } = this.state;
    const classNameItems = [style.groupItem];
    if (index === selected) classNameItems.push(style.selectedGroupItem);
    return classNameItems.join(' ');
  }

  /**
   * 计算移动距离
   */
  private computeTranslateY = (e: React.TouchEvent) => {
    const { data } = this.props;
    const { translateY, selected } = this.state;

    // 没有数据，不能移动
    if (data.length === 0) {
      return translateY;
    }

    // 实际移动距离
    const currentY = e.changedTouches[0].clientY;
    let distanceY = currentY - this.startY;

    // 计算可上移最大距离
    const maxUpDistanceY = (data.length - (selected + 1)) * this.itemHeight;
    if (distanceY < 0 && Math.abs(distanceY) > maxUpDistanceY) distanceY = - maxUpDistanceY;

    // 计算可下移最大距离
    const maxDownDistanceY = selected * this.itemHeight;
    if (distanceY > 0 && distanceY > maxDownDistanceY) distanceY = maxDownDistanceY;

    // 可移动规围内取整
    distanceY = parseInt((distanceY / this.itemHeight).toFixed(0)) * this.itemHeight;

    return translateY + distanceY;
  }

  /**
   * 计算移动后选中数据项
   * 
   * @param translateY 移动后偏移量
   */
  private computeSelected = (translateY: number) => {
    const { containerHeight } = this.props;
    const baseTranslateY = (containerHeight - this.itemHeight) / 2;
    const selected = parseInt((Math.abs(translateY - baseTranslateY) / this.itemHeight).toFixed(0));
    return selected;
  }

  /**
   * 响应移动开始
   */
  private onTouchStart = (e: React.TouchEvent) => {
    this.startY = e.changedTouches[0].clientY;
  }

  /**
   * 响应移动中
   */
  private onTouchMove = (e: React.TouchEvent) => {
    const translateY = this.computeTranslateY(e);
    (this.scrollContainer as HTMLElement).style.transform = `translate3d(0px, ${translateY}px, 0px)`;
  }

  /**
   * 响应移动结束
   */
  private onTouchEnd = (e: React.TouchEvent) => {
    const translateY = this.computeTranslateY(e);
    this.setState({
      translateY,
      selected: this.computeSelected(translateY),
    });
  }

  render() {
    const { data } = this.props;
    const { translateY } = this.state;
    const transfromStyle = { transform: `translate3d(0px, ${translateY}px, 0px)` }; // 选择框偏移量

    return (
      <div
        className={style.groupOuterContainer}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}>
        <div
          className={style.groupScrollContainer}
          style={transfromStyle}
          ref={item => { this.scrollContainer = item; }}>
          {
            data.map((item, index) => (
              <div ref={item => { if (index === 0) this.item = item; }} key={`item-${index}`} className={this.getItemClassName(index)}>
                {item.text}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

interface PickerProps {
}
interface PickerState {
  showGroup: boolean,
  containerHeight: number,
}
export default class extends Component<PickerProps, PickerState> {

  private scrollContainer: any = null; // 可滚动容器

  state = {
    showGroup: false,
    containerHeight: 0,
  }

  componentDidMount() {
    // 父容器初始化完毕，再初始化子组件
    const containerHeight = (this.scrollContainer as HTMLElement).clientHeight;
    this.setState({
      showGroup: true,
      containerHeight,
    });
  }

  render() {
    const { showGroup, containerHeight } = this.state;
    const items = [
      {
        text: '个人1',
        value: 1,
      },
      {
        text: '个人2',
        value: 2,
      },
      {
        text: '个人3',
        value: 3,
      },
      {
        text: '个人4',
        value: 4,
      },
      {
        text: '个人5',
        value: 5,
      }
    ];

    return (
      <div className={`${style.container}`}>
        <div className={`${style.action}`}>
          <div className={`${style.cancel}`}>取消</div>
          <div className={`${style.title}`}>请选择</div>
          <div className={`${style.confirm}`}>确定</div>
        </div>
        <div ref={item => { this.scrollContainer = item; }} className={`${style.scroll}`}>
          <div className={style.selected}></div>
          {
            showGroup && (
              <Group containerHeight={containerHeight} data={items} />
            )
          }
        </div>
      </div>
    );
  }
}
