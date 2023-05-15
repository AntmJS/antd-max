import { useState } from 'react'
import Sku from '../index'
import { sku } from './sku'
import { goodsList } from './goodsList'

export default function Demo() {
  // 选中的商品，可以获取自定义属性如：商品图片、价格、数量
  const [currentGoods, setCurrent] = useState<any>({})

  const itemDisable = (goodsItem) => {
    if (!goodsItem) return true
    // 商品表可设定count为库存数，或者通过其它条件判断
    if (goodsItem.count === 0) return true
    return false
  }

  return (
    <>
      <div>当前选择商品：</div>
      <div style={{ paddingBottom: 10 }}>
        HUAWEI手机【{currentGoods['skuName'] || '--'}】
      </div>
      <Sku
        sku={sku}
        goodsList={goodsList}
        onChange={(e) => setCurrent(e)}
        itemDisable={itemDisable}
        itemRender={(it) => {
          if (it['color']) {
            return (
              <div className="sku-color-item">
                <div
                  className="color-item"
                  style={{ background: it['color'] }}
                ></div>
                <div>{it.name}</div>
              </div>
            )
          }

          return it.name
        }}
      />
    </>
  )
}
