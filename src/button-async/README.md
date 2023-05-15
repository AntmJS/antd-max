# ButtonAsync 异步按钮

### 介绍

基于[`antd.Button`](https://ant.design/components/button-cn)封装的异步操作按钮，内置 loading 状态变更

### 引用

```tsx
import { ButtonAsync } from '@antmjs/antd-max'
```

### 基本使用

::: demo-base :::

### ButtonAsync

继承了[`antd.ButtonProps`](https://ant.design/components/button-cn#api)

| 参数        | 说明                 | 类型                                                                                    |
| ----------- | -------------------- | --------------------------------------------------------------------------------------- |
| async       | 开启异步模式         | `boolean`                                                                               |
| loadingText | 加载中的文案         | `string`                                                                                |
| onClick     | 返回 Promised 的函数 | `React.MouseEventHandler<HTMLButtonElement> / ((e: HTMLButtonElement) => Promise<any>)` |
