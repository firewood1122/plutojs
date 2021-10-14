import React, { useState, useRef, useCallback, useEffect } from "react";
import style from "./index.less";

interface PropsType {
  className?: string;
  disabled?: boolean; // 是否开启拖拽
  show: boolean; // 是否展开状态
  setShow: (bol: boolean) => void; // 设置展开状态
  zIndex?: number;
  openDistance?: number;
  closeDistance?: number;
  children?: React.ReactNode;
}

const Swipe = (props: PropsType) => {
  const {
    className,
    disabled,
    show,
    setShow,
    zIndex,
    openDistance,
    closeDistance,
    children,
  } = props;
  const classString = [style.swipeAction, className].join(" ");

  const [newHeight, setNewHeight] = useState(0);
  const showRef = useRef(show);
  const swipeRef = useRef(null); // 滑块对象
  const initHeight = useRef(0); // 初始高度
  const currentHight = useRef(0); // 当前高度
  const startY = useRef(0); // 开始移动时的Y坐标
  const preY = useRef(0); // 最新移动的Y坐标

  // 获取初始高度
  const setSwipeRef = useCallback((node: HTMLElement) => {
    if (node === null) return;
    swipeRef.current = node;
    const height = node.getBoundingClientRect().height;
    initHeight.current = height;
    currentHight.current = height;
  }, []);

  // 绑定事件
  const setContainerRef = useCallback((node: HTMLElement) => {
    if (node === null) return;
    node.addEventListener("touchstart", handleTouchStart, { passive: false });
    node.addEventListener("touchmove", handleTouchMove, { passive: false });
    node.addEventListener("touchend", handleTouchEnd, { passive: false });
  }, []);

  useEffect(() => {
    showRef.current = show;
  }, [show]);

  /**
   * 开始移动
   */
  const handleTouchStart = (e: TouchEvent) => {
    if (disabled) return;
    swipeRef.current.classList.remove(style.moveActive);
    const { clientY } = e.touches[0];
    startY.current = clientY;
    preY.current = clientY;
  };

  /**
   * 移动中
   */
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    if (disabled) return;

    // 处理滑动超出上边界
    const { clientY } = e.touches[0];
    if (clientY < 0) {
      handleTouchEnd(e);
      return;
    }

    const prePosition = preY.current;
    preY.current = clientY;
    const distance = Math.abs(clientY - prePosition); // 每次移动的距离
    if (clientY === startY.current) return;

    const curHeight = currentHight.current;
    if (clientY > startY.current) {
      // 向下移动
      if (!showRef.current) return;
      currentHight.current = curHeight - distance;
    } else {
      // 向上移动
      if (showRef.current) return;
      currentHight.current = curHeight + distance;
    }

    // 不能小于初始高度
    if (currentHight.current < initHeight.current) {
      currentHight.current = initHeight.current;
    }
    setNewHeight(currentHight.current);
  };

  /**
   * 获取内容高度，设置为浮层高度
   */
  const updateContentHeight = () => {
    const endHeight = swipeRef.current.getBoundingClientRect().height;
    currentHight.current = endHeight;
    setNewHeight(endHeight);
    if (!showRef.current) initHeight.current = endHeight;
  };

  /**
   * 移动结束
   */
  const handleTouchEnd = (e: TouchEvent) => {
    if (disabled) return;

    if (Math.abs(preY.current - startY.current) > 0) {
      swipeRef.current.classList.add(style.moveActive);
      if (showRef.current) {
        // 当前状态为展开状态，移动距离大于阀值，状态设为收起
        if (preY.current - startY.current > closeDistance) {
          setShow(false);
          setTimeout(updateContentHeight, 0);
        } else {
          updateContentHeight();
        }
      } else {
        // 当前状态为收起状态，移动距离大于阀值，状态设为展开
        if (currentHight.current > initHeight.current + openDistance) {
          setShow(true);
          setTimeout(updateContentHeight, 0);
        } else {
          currentHight.current = initHeight.current;
          setNewHeight(initHeight.current);
        }
      }
    }
  };

  return (
    <div className={`${style.swipeWrapper}`} style={{ zIndex }}>
      <div
        ref={setContainerRef}
        className={classString}
        style={{ height: newHeight ? `${newHeight}px` : "auto" }}
      >
        <div ref={setSwipeRef} className={`${style.container}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

Swipe.defaultProps = {
  calssName: "",
  disabled: false,
  zIndex: 999,
  openDistance: 150,
  closeDistance: 20,
};

export default Swipe;
