# `@plutojs/video`

> 视频组件

## Video视频组件

```
import Video from '@plutojs/video';
import '@plutojs/video/build/index.css';

<Video
  coverUrl="https://img11.360buyimg.com/n1/s450x450_jfs/t1/112811/33/9121/246982/5ed786a7E22ec29b5/dc259bda64040882.jpg"
  videoUrl="https://media.w3.org/2010/05/sintel/trailer.mp4" />
```

| 参数 | 描述 | 类型 | 可选 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| coverUrl | 封面图片链接 | string | 否 | 无 |
| videoUrl | 视频链接 | string | 否 | 无 |
| controls | 是否有控制条 | boolean | 是 | true |
| playsInline | 播放时局域播放 | boolean | 是 | true |
