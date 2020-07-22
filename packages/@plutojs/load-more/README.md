# `@plutojs/load-more`

> LoadMore 加载更多 

## Usage

```
import LoadMore from '@plutojs/load-more';

<LoadMore loadMore={() => { alert('load more'); }}>
  <div className="load-more-demo-field">
  </div>
</LoadMore
```

| 参数 | 描述 | 类型 | 可选 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| bodyScroll | 是否页面body滚动 | boolean | 是 | true |
| scrollThreshold | 滚动边界系数 | 小于或等于1的正小数 | 是 | 1 |
| loadMore | 响应方法 | Function | 是 | 无 |
| debounceTime | 防抖间隔时间 | number | 是 | 1000 |
