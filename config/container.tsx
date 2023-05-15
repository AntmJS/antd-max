import React from 'react'
import { ConfigProvider } from 'antd'

let index = 0

export default function Index(props: { children: React.ReactNode }) {
  return (
    <ConfigProvider
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
