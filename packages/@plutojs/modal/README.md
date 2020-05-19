# `@plutojs/modal`

> 基础模态框组件

## Usage

```
import Modal, { useModal } from '@plutojs/modal';

const inputModal = useModal();
const position = 'center';
const closeOnClickOverlay = true;

<Modal
  isOpened={inputModal.isOpened}
  onHide={inputModal.hide}
  position={position}
  closeOnClickOverlay={closeOnClickOverlay}>
  ...
</Modal>
```

| 参数 | 类型 | 可选 | 默认值 |
| ---- | ---- | ---- | ---- |
| isOpened | Boolean | 否 | 无 |
| onHide | Function | 否 | 无 |
| position | top/center/bottom | 是 | center |
| closeOnClickOverlay | Boolean | 是 | true |
