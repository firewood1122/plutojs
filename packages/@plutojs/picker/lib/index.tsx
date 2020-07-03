import React, { Component } from 'react';
import Debounce from 'debounce';
import Modal from '@plutojs/modal';
import '@plutojs/modal/build/index.css'
const style = require('./index.less');

interface GroupProps {
  containerHeight: number,
  data: Array<{
    text: string,
    value: any,
  }>,
  onChange: Function,
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
    // 计算初始偏移值
    const { containerHeight } = this.props;
    const itemHeight = (this.item as HTMLElement).clientHeight;
    const translateY = (containerHeight - itemHeight) / 2;
    this.itemHeight = itemHeight;
    this.setState({
      translateY,
    });
  }

  /**
   * 获取数据项样式名称
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
    Debounce(() => {
      const translateY = this.computeTranslateY(e);
      (this.scrollContainer as HTMLElement).style.transform = `translate3d(0px, ${translateY}px, 0px)`;
    }, 200);
  }

  /**
   * 响应移动结束
   */
  private onTouchEnd = (e: React.TouchEvent) => {
    const { data, onChange } = this.props;
    const { selected } = this.state;
    const translateY = this.computeTranslateY(e);
    const newSelected = this.computeSelected(translateY);
    this.setState({
      translateY,
      selected: newSelected,
    });
    selected !== newSelected && data.length > 0 && onChange && onChange(data[newSelected]);
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

interface PickerItemType {
  text: string,
  value: any,
  children?: Array<PickerItemType>,
}
interface PickerProps {
  isOpened: boolean,
  onCancel: () => void,
  onConfirm: (items: Array<PickerItemType>) => void,
  items: Array<PickerItemType>,
  group?: number,
}
interface PickerState {
  showGroup: boolean,
  containerHeight: number,
  groupItems: Array<Array<PickerItemType>>,
}
export default class extends Component<PickerProps, PickerState> {

  private scrollContainer: any = null; // 可滚动容器
  private selected: Array<PickerItemType> = []; // 已选中数据

  state = {
    showGroup: false,
    containerHeight: 0,
    groupItems: [],
  }

  static defaultProps = {
    group: 1,
    items: [],
  }

  componentDidMount() {
    const { group, items } = this.props;
    const containerHeight = (this.scrollContainer as HTMLElement).clientHeight; // 父容器初始化完毕，再初始化子组件

    // 构造初始化数据
    const groupItems = this.initGroupItems(group, items);
    this.selected = this.initSelected(groupItems);

    this.setState({
      showGroup: true,
      containerHeight,
      groupItems,
    });
  }

  /**
   * 初始化各列数据项
   */
  private initGroupItems = (group: number, items: Array<PickerItemType>, index: number = 0) => {
    let groupItems = items ? [items] : [];
    if (index < group) {
      groupItems = groupItems.concat(this.initGroupItems(group, items[0].children, index + 1));
      return groupItems;
    }
    return groupItems;
  }

  /**
   * 初始化选中数据项
   */
  private initSelected = (groupItems: Array<Array<PickerItemType>>) => {
    return groupItems.map((items: Array<PickerItemType>) => {
      return items.length > 0 ? {
        text: items[0].text,
        value: items[0].value,
      } : null
    });
  }

  /**
   * 响应选中单个选择器
   */
  private onChange = (item: PickerItemType, index: number) => {
    // 处理选中数据
    this.selected = this.selected.slice(0, index).concat([item]).concat(this.selected.slice(index + 1));

    // 处理列数据项
    if (index < this.selected.length - 1) {
      const { group } = this.props;
      const { groupItems } = this.state;
      const newGroupItems = groupItems.slice(0, index + 1).concat(this.initGroupItems(group - index - 1, item.children || []));
      this.setState({
        groupItems: newGroupItems,
      });
    }
  }

  render() {
    const { isOpened, onCancel, onConfirm } = this.props;
    const { showGroup, containerHeight, groupItems } = this.state;

    return (
      <Modal isOpened={isOpened} position="bottom" onHide={onCancel}>
        <div className={`${style.container}`}>
          <div className={`${style.action}`}>
            <div className={`${style.cancel}`} onClick={onCancel}>取消</div>
            <div className={`${style.title}`}>请选择</div>
            <div className={`${style.confirm}`} onClick={() => { onConfirm && onConfirm(this.selected); }}>确定</div>
          </div>
          <div ref={item => { this.scrollContainer = item; }} className={`${style.scroll}`}>
            <div className={style.selected}></div>
            {
              showGroup && groupItems.length > 0 && (
                <div className={`${style.scrollInner}`}>
                  {
                    groupItems.map((items: Array<PickerItemType>, index: number) => (
                      <Group
                        key={`item-${index}`}
                        containerHeight={containerHeight}
                        data={items}
                        onChange={(item: PickerItemType) => { this.onChange(item, index); }}
                      />
                    ))
                  }
                </div>
              )
            }
          </div>
        </div>
      </Modal>
    );
  }
}
