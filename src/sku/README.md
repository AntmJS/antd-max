# Sku 商品规格选择

### 介绍

基于商品规格和商品列表数据

### 引入

```js
import { Sku } from 'antd-max'
```

### 基本用法

- `sku.tsx`: 须要保证`items[xx].id`是唯一的

- `goodsList.tsx`: `商品列表` 数据格式

组件案例

::: demo-base :::

### SkuProps

| 参数              | 说明                                                                    | 类型                                                                                                               | 默认值 | 必填    |
| ----------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------ | ------- |
| className         | 样式名称                                                                | _&nbsp;&nbsp;string<br/>_                                                                                          | ''     | `false` |
| goodsId           | 默认选中的商品名称                                                      | _&nbsp;&nbsp;number<br/>_                                                                                          | -      | `false` |
| onChange          | 规格变化触发，回掉返回选中项商品，首次渲染没有传入`goodsId`，会触发     | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;goods?:&nbsp;IGoodItem<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_        | -      | `false` |
| clickAttrDisable  | 点击 sku`disabled`的属性项触发                                          | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;goods?:&nbsp;IGoodItem<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_        | -      | `false` |
| disabledClassName | 不可选 sku 项样式名称                                                   | _&nbsp;&nbsp;string<br/>_                                                                                          | -      | `false` |
| activeClassName   | 选中 sku 项样式名称                                                     | _&nbsp;&nbsp;string<br/>_                                                                                          | -      | `false` |
| goodsList         | 产品包含的所有商品列表                                                  | _&nbsp;&nbsp;IGoodItem[]<br/>_                                                                                     | -      | `true`  |
| sku               | 规格列表                                                                | _&nbsp;&nbsp;ISkuItem[]<br/>_                                                                                      | -      | `true`  |
| itemRender        | 自定义规格项的内部渲染                                                  | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;attr:&nbsp;IAttrItem<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;ReactNode<br/>_     | -      | `false` |
| itemDisable       | 自定义当前规格项组合（即商品）是否可选, 回掉参数为空的时候直接返回 true | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;goodsItem?:&nbsp;IGoodItem<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;boolean<br/>_ | -      | `false` |

### 商品项 IGoodItem

其它属性不限
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| id | 商品 ID | _&nbsp;&nbsp;number<br/>_ |
| skuIds | 对应每个 sku 的 ID | _&nbsp;&nbsp;number[]<br/>_ |
| disabled | 是否不可选择 | _&nbsp;&nbsp;boolean<br/>_ |

### Sku 项 ISkuItem

其它属性不限， 须要保证不同类别的 sku 的 id 都是唯一的
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| id | Sku ID | _&nbsp;&nbsp;number<br/>_ |
| name | Sku 名称 | _&nbsp;&nbsp;string<br/>_ |
| items | Sku 属性枚举 | _&nbsp;&nbsp;IAttrItem[]<br/>_ |

### Sku 属性项 IAttrItem

其它属性不限
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| id | 属性 ID | _&nbsp;&nbsp;number<br/>_ |
| name | 属性名称 | _&nbsp;&nbsp;string<br/>_ |
