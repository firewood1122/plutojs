# `@plutojs/countdown`

> 倒计时组件

## Countdown倒计时组件

```
import Countdown from '@plutojs/countdown';

<Countdown leftSecond={20} done={() => { Toast.info('倒计时结束'); }} />
```
| 参数 | 描述 | 类型 | 可选 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| leftSecond | 剩余时间（秒） | number | 否 | 无 |
| renderChildren | 内容构造方法 | (hour: number, min: number, second: number) => React.ReactNode | 是 | `${hour}小时${min}分${second}秒` |
| done | 倒计时回调方法 | Function | 是 | 无 |
