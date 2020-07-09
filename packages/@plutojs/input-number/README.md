# `@plutojs/input-number`

> InputNumber 数字输入框

## Usage

```
import InputNumber from '@plutojs/input-number';
import '@plutojs/input-number/build/index.css';

<InputNumber min={1} max={5} keyboard={false} onChange={val => { console.log(val); }} />
```

| 参数 | 描述 | 类型 | 可选 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| default | 默认值 | Number | 是 | 无 |
| min | 最小值 | Number | 是 | 1 |
| max | 最大值 | Number | 是 | 无 |
| keyboard | 可键盘输入 | Boolean | 是 | true |
| onChange | 值变化回调方法 | Function | 否 | 无 |