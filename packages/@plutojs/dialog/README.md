# `@plutojs/dialog`

> 对话框组件

## Confirm对话框

```
import Dialog from '@plutojs/dialog';
import '@plutojs/dialog/build/index.css';

Dialog.confirm('这是一个Confirm对话框，通常用于二次确认', () => {
  alert('点击了确定');
});
```
| 参数 | 描述 | 类型 | 可选 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| text | 对话框内容 | String | 否 | 无 |
| confirm | 点击确认回调方法 | Function | 否 | 无 |
| cancelText | 取消按钮文案 | String | 是 | 取消 |
| confirmText | 确定按钮文案 | String | 是 | 确定 |
