import React from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

let index = 0

export default function Index(props: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#54bf8e',
        },
      }}
      key={`configProvider@${index++}`}
    >
      {props['children']}
    </ConfigProvider>
  )
}
