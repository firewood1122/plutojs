# `@plutojs/modal`

> 基础模态框组件

## Usage

```
import React, { useState } from 'react';
import Modal from '@plutojs/modal';
import '@plutojs/modal/build/index.css';

const [isOpened, setIsOpened] = useState(false);

<Modal
  isOpened={isOpened}
  onHide={() => { setIsOpened(false); }}
  position='center'
  closeOnClickOverlay={true}>
  ...
</Modal>
```

| 参数 | 描述 | 类型 | 可选 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| isOpened | 是否显示模态框 | Boolean | 否 | 无 |
| onHide | 关闭模态框方法 | Function | 否 | 无 |
| position | 模态框内容定位 | top/center/bottom | 是 | center |
| closeOnClickOverlay | 是否有不透明背景 | Boolean | 是 | true |
