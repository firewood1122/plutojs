import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const style = require("./index.less");

interface PropsType {
  children: React.ReactChild[];
  selectedItem?: number;
  showArrows?: boolean;
  showStatus?: boolean;
  showThumbs?: boolean;
  showIndicators?: boolean;
  transitionTime?: number;
  onChange?: () => void;
}
interface StateType {}

export default class extends Component<PropsType, StateType> {
  private startX = 0; // 开始滑动位置
  private componentObj: any = null;

  static defaultProps = {
    selectedItem: 0,
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    showIndicators: true,
    transitionTime: 150,
    onChange: () => {},
  };

  componentDidMount() {
    this.componentObj.addEventListener("touchstart", (e: TouchEvent) => {
      const { clientX } = e.targetTouches[0];
      this.startX = clientX;
    });
    this.componentObj.addEventListener(
      "touchmove",
      (e: TouchEvent) => {
        const { clientX } = e.targetTouches[0];
        const diffX = Math.abs(clientX - this.startX);

        // 发生横向滑动时，禁止默认滑动表现
        if (diffX > 30) {
          e.preventDefault();
        }
      },
      {
        passive: false,
      }
    );
  }

  render(): React.ReactNode {
    return (
      <div
        className={`${style.carouselContainer}`}
        ref={(item) => {
          this.componentObj = item;
        }}
      >
        <Carousel
          selectedItem={this.props.selectedItem}
          showArrows={this.props.showArrows}
          showStatus={this.props.showStatus}
          showThumbs={this.props.showThumbs}
          showIndicators={
            this.props.showIndicators && this.props.children.length > 1
          }
          transitionTime={this.props.transitionTime}
          onChange={this.props.onChange}
        >
          {this.props.children}
        </Carousel>
      </div>
    );
  }
}
