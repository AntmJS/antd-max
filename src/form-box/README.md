# form-box 表单盒子

### 介绍

基于`antd.Form`实现配置化渲染表单，统一管理表单信息，支持自定义扩展表单组件

### 引用

```tsx
import { FormBox } from 'antd-max'
```

### 基本使用

当前默认支持 `input`、`select`、`timePicker`、`cascader`、`treeSelect`、`monthPicker`、`rangePicker`组件

组件案例

::: demo-base :::

### 扩展组件

通过`FormBox.register`方法来扩展组件

如下重新定义`FormBox`, 扩展一个`imageUploader`图片上传组件

然后就可以使用`imageUploader`图片上传组件

::: demo-register :::

自定义组件需要设置[`antd.FormItemProps`](https://ant.design/components/form-cn#formitem)的属性, 如:

- getValueFromEvent： 设置如何将 event 的值转换成字段值
- trigger：设置收集字段值变更的时机
- validateTrigger： 设置字段校验的时机
- valuePropName： 子节点的值的属性，如 Switch 的是 'checked'。该属性为 getValueProps 的封装，自定义 getValueProps 后会失效

### 数据校验

::: demo-phone :::

### IFormBoxProps

`FormBox<T>`组件的 props 类型说明如下

| 参数          | 说明                                    | 类型                     |
| ------------- | --------------------------------------- | ------------------------ |
| queryInit     | 用地址中的参数初始化表单                | `boolean`                |
| config        | 表单渲染配置                            | `IFormBoxItemProps<T>[]` |
| actions       | 表单渲染配置, 继承 antd 的`ButtonProps` | `ButtonProps[]`          |
| defaultValues | 表单初始化, 默认`false`                 | `T`                      |
| form          | 传入`FormBox.use()[0]`                  | `antd.FormInstance`      |

### IFormBoxItemProps

`config`的配置项`IFormBoxItemProps<T>`继承了[antd.FormItemProps](https://ant.design/components/form-cn#formitem) ,类型如下

| 参数  | 说明                        | 类型                                                                                  |
| ----- | --------------------------- | ------------------------------------------------------------------------------------- |
| type  | 支持的组件的名称            | `'timePicker'/ 'monthPicker'/ 'rangePicker'/'cascader'/'treeSelect'/'input'/'select'` |
| props | 表单组件的参数              | `Record<string, any>`                                                                 |
| key   | 表单字段名称                | `keyof T`                                                                             |
| label | 表单 label                  | `string`                                                                              |
| col   | 大屏幕 24 分中占比, 默认`8` | `number`                                                                              |

### ButtonProps

`action`下的每一项继承了[`antd.ButtonProps`](https://ant.design/components/button-cn#api)
内部其他类型如下：

```ts
interface ButtonProps_<T> extends ButtonProps {
  // 点击事件回调返回表单数据
  onClick?: (result: T) => void
  // 重置表单操作
  fType?: 'reset'
  // 是否开启异步按钮
  async?: boolean
}
```

### IRegisterFormParams

FormBox.`showComponents` 和 FormBox.`registerComponent` 的方法：

```ts
type IRegisterForm = (params: IRegisterFormParams) => void
type showComponents = () => Record<string, IRegisterFormParams>
```

IRegisterFormParams 类型, 继承了[`antd.FormItem.Props`](https://ant.design/components/form-cn#formitem)，内部类型说明如下:

| 参数                  | 说明                                              | 类型                            |
| --------------------- | ------------------------------------------------- | ------------------------------- |
| type                  | 组件名称                                          | `string`                        |
| component             | 组件方法                                          | `any`                           |
| transformValue        | 转换提交的时候的表单数据                          | `(fields: any) => any`          |
| transformDefaultValue | 转换初始化的时候的 defaultValue                   | `(fields: any) => any`          |
| transformProps        | 转换传给组件的参数, `formItemProps`目前只有 label | `(props, formItemProps) => any` |
