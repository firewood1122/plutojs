# `@plutojs/picker`

> 选择器组件

## Usage

```
const items = [
  {
    text: '天河区',
    value: 1,
  },
  {
    text: '海珠区',
    value: 2,
  },
  {
    text: '白云区',
    value: 3,
  },
];
const [isOpened, setIsOpened] = useState(true);
const [selected, setSelected] = useState([]);

<Picker
  isOpened={isOpened}
  onCancel={() => { setIsOpened(false); }}
  onConfirm={data => {
    setIsOpened(false);
    setSelected(data);
  }}
  selected={selected}
  items={items}
/>
```

| 参数 | 描述 | 类型 | 可选 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| isOpened | 是否显示 | Boolean | 否 | 无 |
| onCancel | 取消回调方法 | Function | 否 | 无 |
| onConfirm | 确定回调方法 | Function | 否 | 无 |
| items | 可选择节点 | Array<{ text: string, value: any }> | 否 | [] |
| selected | 已选择节点 | Array<{ text: string, value: any }> | 是 | [] |
| group | 可选择列数 | Number | 是 | 1 |