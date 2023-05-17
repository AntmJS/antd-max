import { useState, useRef } from 'react'
import { InfiniteScroll } from '../index'
import { InfiniteScrollInstance } from '../types'
import { mockGoods } from './common'
import './demo.less'

export default function Demo() {
  const [data, setdata] = useState<any>([])
  const InfiniteScrollInstance = useRef<InfiniteScrollInstance>(null)

  const loadMore: () => Promise<'complete' | 'loading'> = async () => {
    return new Promise(async (resolve) => {
      const reslult = await mockGoods()
      const newData: any[] = data.concat(reslult)
      setdata(newData)
      // 以下是简单的模拟请求，正常请求请按条件执行`resolve('complete')`
      resolve(newData.length > 10 ? 'complete' : 'loading')
    })
  }

  return (
    <div style={{ padding: '4px 6px', height: 550, overflow: 'scroll' }}>
      {data.map((item: any, index) => (
        <div
          className="van-demo-goods-item-wrapper"
          key={`van-demo-goods-item-wrapper-infinite${index}`}
        >
          <div className="van-demo-goods-item">
            <img src={item.image} className="img" />
            <div className="right-show">
              <div className="title">{item.title}</div>
              {item.isCutPrice && <span className="cutPrice">最近大降价</span>}
              <div className="price">{item.price}</div>
            </div>
          </div>
        </div>
      ))}
      <InfiniteScroll loadMore={loadMore} ref={InfiniteScrollInstance} />
    </div>
  )
}
