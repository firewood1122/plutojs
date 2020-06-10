# `@plutojs/modal`

> 基础模态框组件

## 页面组件引用

```
import React, { useState } from 'react';
import Modal from '@plutojs/modal';
import '@plutojs/modal/build/index.css';

const [isOpened, setIsOpened] = useState(false);

<Modal
  isOpened={isOpened}
  position="center"
  isMask={true}
  isLock={true}
  closeOnClickOverlay={true}
  onHide={() => { setIsOpened(false); }}>
  <div className="modal-demo-text">模态框内容</div>
</Modal>
```

## 代码动态引用

```
const { destroy } = Modal.popup({
  children: <div className="modal-demo-text">文字内容</div>,
  isOpened: true,
  position: 'center',
  isMask: true,
  isLock: true,
  closeOnClickOverlay; true,
  onHide: () => { destroy(); },
});
```

| 参数 | 描述 | 类型 | 可选 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| isOpened | 是否显示模态框 | Boolean | 否 | 无 |
| position | 模态框内容定位 | top/center/bottom | 是 | center |
| isMask | 背景是否透明 | Boolean | 是 | true |
| isLock | 锁定页面滚动 | Boolean | 是 | true |
| closeOnClickOverlay | 点击背景关闭模态框 | Boolean | 是 | true |
| zIndex | 组件层级 | Number | 是 | 999 |
| onHide | 关闭模态框方法 | Function | 否 | 无 |
