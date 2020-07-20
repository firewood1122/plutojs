# `@plutojs/input`

> 输入框组件

## Usage

```
import Input from '@plutojs/input';

const [text, setText] = useState('');
<Input type="textarea" value={text} onChange={e => setText(e.target.value)} />
```

| 参数 | 描述 | 类型 | 可选 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| type | 输入框类型 | string | 否 | 'text' |
| value | 输入内容 | string | 否 | '' |
| className | 样式名称 | string | 是 | '' |
| placeholder | 占位文字 | string | 是 | '' |
| onChange | 输入响应方法 | Function | 是 | {} |
| onFocus | 聚焦响应方法 | Function | 是 | {} |
| maxLength | 最大输入长度 | number | 是 | 无 |
| offsetBottom | 底部距离 | number | 是 | 50 |
