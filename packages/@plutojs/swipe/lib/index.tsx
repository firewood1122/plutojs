import React, { useState, useRef } from 'react';
const style = require('./index.less');

interface PropsType {
  className?: string;
  disabled?: boolean;                     // 是否开启拖拽
  showDetail: boolean;                    // 是否展开状态
  setShowDetail: (bol: boolean) => void;  // 设置展开状态
  children?: React.ReactNode;
}

const Swipe = (props: PropsType) => {
  const { className, disabled, showDetail, setShowDetail, children } = props;
  const classString = [style.swipeAction, className].join(' ');

  const [newHeight, setNewHeight] = useState(0);
  const swipeRef = useRef(null);      // 滑块对象
  const initHeight = useRef(0);       // 初始高度
  const currentHight = useRef(0);     // 当前高度
  const startY = useRef(0);           // 开始移动时的Y坐标
  const preY = useRef(0);             // 上一次移动的Y坐标

  // 获取初始高度
  const setSwipeRef = (node: HTMLElement) => {
    if (node === null) return;
    swipeRef.current = node;
    const height = node.getBoundingClientRect().height;
    initHeight.current = height;
    currentHight.current = height;
  };

  /**
   * 开始移动
   */
  const handleTouchStart = (e: React.TouchEvent) => {
    if (disabled) return;
    swipeRef.current.classList.remove(style.moveActive);
    const { clientY } = e.touches[0];
    startY.current = clientY;
    preY.current = clientY;
  };

  /**
   * 移动中
   */
  const handleTouchMove = (e: React.TouchEvent) => {
    if (disabled) return;

    // 处理滑动超出边界
    const { clientY } = e.touches[0];
    if (clientY < 0) {
      handleTouchEnd(e);
      return;
    }

    const prePosition = preY.current;
    preY.current = clientY;
    const distance = Math.abs(clientY - prePosition); // 每次移动的距离
    if (clientY === prePosition) return;

    const curHeight = currentHight.current;
    if (clientY > prePosition) { // 向下移动
      currentHight.current = curHeight - distance;
    } else { // 向上移动
      currentHight.current = curHeight + distance;
    }
    setNewHeight(curHeight);
  };

  /**
   * 移动结束
   */
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (disabled) return;

    if (Math.abs(preY.current - startY.current) > 0) {
      swipeRef.current.classList.add(style.moveActive);
      if (showDetail) {
        // 当前状态为展开状态，高度距离大于50，状态设为收起
        if (preY.current - startY.current > 50) {
          currentHight.current = initHeight.current;
          setNewHeight(initHeight.current);
          setShowDetail(false);
        } else {
          const endHeight = swipeRef.current.getBoundingClientRect().height;
          currentHight.current = endHeight;
          setNewHeight(endHeight);
        }
      } else {
        // 当前状态为收起状态，移动距离大于150，状态设为展开
        if (currentHight.current > initHeight.current + 150) {
          setShowDetail(true);
          setTimeout(() => {
            // 获取内容高度，设置为浮层高度
            const endHeight = swipeRef.current.getBoundingClientRect().height;
            currentHight.current = endHeight;
            setNewHeight(endHeight);
          }, 0);
        } else {
          currentHight.current = initHeight.current;
          setNewHeight(initHeight.current);
        }
      }
    }
  };

  return (
    <div
      className={classString}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ height: newHeight ? `${newHeight}px` : 'auto' }}>
      <div ref={setSwipeRef} className="container">
        {children}
      </div>
    </div>
  );
};

Swipe.defaultProps = {
  disabled: false,
};

export default Swipe;
