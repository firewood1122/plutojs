import React, { useEffect, useRef } from 'react';
const style = require('./index.less');

interface Props {
  startColor?: string,
  endColor?: string,
  contentColor?: string,
  barLineWidth?: number,
  contentLineWidth?: number,
  percent?: number,
  children?: React.ReactNode,
}
interface ProcessBarType {
  startColor: string,
  endColor: string,
  contentColor: string,
  barLineWidth: number,
  percent: number,
}
interface ProcessBarContentType {
  contentColor: string,
  contentLineWidth: number,
}

/**
 * 初始化canvas区域
 */
const initCanvas = (container: HTMLDivElement, canvas: HTMLCanvasElement) => {
  const { width, height } = container.getBoundingClientRect();
  canvas.width = width;
  canvas.height = height;
};

/**
 * 绘画圆形
 */
const drawCircle = (circleObj) => {
  const ctx = circleObj.ctx;
  ctx.beginPath();
  ctx.arc(circleObj.x, circleObj.y, circleObj.radius, circleObj.startAngle, circleObj.endAngle);
  ctx.lineWidth = circleObj.lineWidth;
  ctx.strokeStyle = circleObj.color;
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.closePath();
};

/**
 * 绘画进度条
 */
const drawProcessBar = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, options: ProcessBarType) => {
  const { startColor, endColor, contentColor, barLineWidth, percent } = options;
  let grd = ctx.createLinearGradient(canvas.width / 2, 0, 0, canvas.height);
  grd.addColorStop(0, startColor);
  grd.addColorStop(1, endColor);

  if (percent > 0) {
    drawCircle({
      ctx,
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: canvas.width / 2 - 20,
      lineWidth: barLineWidth,
      color: grd,
      startAngle: Math.PI * (1.5 + 2 * (100 - percent) / 100),
      endAngle: Math.PI * (2 + 1.5),
    });
  } else {
    drawCircle({
      ctx,
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: canvas.width / 2 - 20,
      lineWidth: barLineWidth + 1, // 覆盖进度条边缘
      color: contentColor,
      startAngle: Math.PI * 1.5,
      endAngle: Math.PI * (2 + 1.5),
    });
  }
};

/**
 * 绘画进度条底层圆环
 */
const drawProcessBarContainer = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, options: ProcessBarContentType) => {
  const { contentColor, contentLineWidth } = options;
  drawCircle({
    ctx,
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: canvas.width / 2 - 20,
    lineWidth: contentLineWidth,
    color: contentColor,
    startAngle: 0,
    endAngle: Math.PI * 2,
  });
};

export default (props: Props) => {
  const {
    startColor = '#6DC9FF',
    endColor = '#3B99FF',
    barLineWidth = 20,
    contentColor = '#EAEFF3',
    contentLineWidth = 32,
    percent = 100,
    children = null,
  } = props;
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 初始化canvas区域
    initCanvas(containerRef.current, canvas);

    // 初始化进度条底层圆环
    drawProcessBarContainer(ctx, canvas, { contentColor, contentLineWidth });

    // 初始化进度条
    drawProcessBar(ctx, canvas, {
      startColor,
      endColor,
      contentColor,
      barLineWidth,
      percent,
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 更新进度条
    drawProcessBar(ctx, canvas, {
      startColor,
      endColor,
      contentColor,
      barLineWidth,
      percent,
    });
  }, [percent]);

  return (
    <div ref={item => containerRef.current = item} className={`${style.container}`}>
      <canvas ref={item => canvasRef.current = item}></canvas>
      <div className={`${style.info}`}>{children}</div>
    </div>
  );
};
