# `@plutojs/camera`

> 摄像头组件

## Usage

```
import Camera from '@plutojs/camera';
import '@plutojs/camera/build/index.css';

const onChange = (files) => {
  ...
};

<Camera text="点击录制" onChange={onChange} />
<Camera text="点击拍照" type="image" onChange={onChange} />
```

| 参数 | 描述 | 类型 | 可选 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| text | 显示文案 | string | 是 | 开始录制 |
| type | 文件类型 | video/image | 是 | video |
| onChange | 回调方法 | Function | 是 | 无 |