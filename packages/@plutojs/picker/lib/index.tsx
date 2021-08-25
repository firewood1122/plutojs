import React, { Component } from 'react';
import Modal from '~/core/modal/lib';
const style = require('./index.less');

interface GroupProps {
  containerHeight: number,
  data: Array<{
    text: string,
    value: any,
  }>,
  selected: any,
  onChange: Function,
  renderItem?: Function,
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
  private lastMoveTime: number = 0; // 上次移动开始时间，用于节流

  componentDidMount() {
    // 计算初始偏移值
    this.setTranslateY();
  }

  componentDidUpdate(preProps: GroupProps) {
    const { selected } = this.props;
    if (preProps.selected !== selected) this.setTranslateY(); // 更新偏移值
  }

  /**
   * 更新偏移值
   */
  private setTranslateY = () => {
    const { data, selected } = this.props;
    let selectedIndex = data.findIndex(item => item.value === selected);
    if (selectedIndex < 0) selectedIndex = 0;

    // 计算初始偏移值
    const { containerHeight } = this.props;
    const itemHeight = (this.item as HTMLElement).getBoundingClientRect().height;
    const translateY = (containerHeight - itemHeight) / 2 - itemHeight * selectedIndex;
    this.itemHeight = itemHeight;
    this.setState({
      translateY,
      selected: selectedIndex,
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
    const now = Date.now();
    if (now - this.lastMoveTime < 100) return;
    this.lastMoveTime = now;
    const translateY = this.computeTranslateY(e);
    (this.scrollContainer as HTMLElement).style.transform = `translate3d(0px, ${translateY}px, 0px)`;
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
    const { data, renderItem } = this.props;
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
                {renderItem ? renderItem(item, index) : item.text}
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
  selected?: Array<PickerItemType>,
  group?: number,
  renderItem?: Function,
  text?: {
    confirm: string,
    title: string,
    cancel: string,
  },
  className?: string,
  renderBottom?: (onConfirm: () => void) => JSX.Element,
}
interface PickerState {
  showGroup: boolean,
  containerHeight: number,
  groupItems: Array<Array<PickerItemType>>,
}
class Picker extends Component<PickerProps, PickerState> {

  private scrollContainer: any = null; // 可滚动容器
  private selected: Array<PickerItemType> = []; // 已选中数据
  private updated: boolean = false; // 标识是否需更新

  state = {
    showGroup: false,
    containerHeight: 0,
    groupItems: [],
  }

  static defaultProps = {
    items: [],
    selected: [],
    group: 1,
    text: {
      confirm: '确定',
      title: '请选择',
      cancel: '取消',
    },
  }

  componentDidMount() {
    const { group, items, selected } = this.props;
    if (!selected[0]) selected.pop();
    const containerHeight = (this.scrollContainer as HTMLElement).clientHeight; // 父容器初始化完毕，再初始化子组件

    let groupItems = [];
    if (selected.length > 0) {
      // 默认选中
      this.selected = selected;
      groupItems = this.initGroupItems(group, items, selected);
    } else {
      // 没有默认选中
      groupItems = this.initGroupItems(group, items);
      this.selected = this.initSelected(groupItems);
    }

    this.setState({
      showGroup: true,
      containerHeight,
      groupItems,
    });

    // 阻止默认行为
    document.body.addEventListener('touchmove', this.preventDefault, { passive: false });
  }

  componentDidUpdate() {
    if (this.updated) {
      const { group, items, selected } = this.props;
      let { groupItems } = this.state;

      this.selected = selected.length > 0 ? selected : this.initSelected(groupItems);
      if (selected.length > 0) groupItems = this.initGroupItems(group, items, selected);

      this.updated = false;
      this.setState({
        groupItems,
      });
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('touchmove', this.preventDefault);
  }

  private preventDefault = (e: TouchEvent) => {
    e.preventDefault();
  }

  /**
   * 初始化各列数据项
   */
  private initGroupItems = (group: number, items: Array<PickerItemType>, selected: Array<PickerItemType> = [], index: number = 0) => {
    let groupItems = items ? [items] : [];
    if (index < group) {
      const children = selected[index] ? items.find(item => item.value === selected[index].value).children : items[0].children;
      groupItems = groupItems.concat(this.initGroupItems(group, children, selected, index + 1));
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
    if (index < this.selected.length - 1) {
      // 处理列数据项
      const { group } = this.props;
      const { groupItems } = this.state;
      const newGroupItems = groupItems.slice(0, index + 1).concat(this.initGroupItems(group - index - 1, item.children || []));
      this.setState({
        groupItems: newGroupItems,
      });

      // 处理选中数据
      this.selected = this.selected.slice(0, index).concat([item]).concat(this.initSelected(newGroupItems).slice(index + 1));
    } else {
      // 处理选中数据
      this.selected = this.selected.slice(0, index).concat([item]).concat(this.selected.slice(index + 1));
    }
  }

  /**
   * 取消选择
   */
  private cancel = () => {
    const { onCancel } = this.props;
    onCancel && onCancel();
    this.updated = true;
  }

  render() {
    const { onConfirm, renderItem, text, className = '', renderBottom } = this.props;
    const { showGroup, containerHeight, groupItems } = this.state;

    return (
      <Modal isOpened={true} position="bottom" onHide={this.cancel}>
        <div className={`${style.container} ${className}`}>
          <div className={`${style.action}`}>
            <div className={`${style.cancel}`} onClick={this.cancel}>{text.cancel}</div>
            <div className={`${style.title}`}>{text.title}</div>
            <div className={`${style.confirm}`} onClick={() => { onConfirm && onConfirm(this.selected); }}>{text.confirm}</div>
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
                        selected={this.selected[index] ? this.selected[index].value : null}
                        onChange={(item: PickerItemType) => { this.onChange(item, index); }}
                        renderItem={renderItem}
                      />
                    ))
                  }
                </div>
              )
            }
          </div>
          {renderBottom && renderBottom(() => { onConfirm(this.selected); })}
        </div>
      </Modal>
    );
  }
}

export default (props: PickerProps) => {
  if (props.isOpened) return <Picker {...props} />
  return null
}
