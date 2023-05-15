import { useState, useCallback } from 'react'
import { Button } from 'antd'
import { ButtonAsyncProps } from './types'

export default function ButtonAsync(props: ButtonAsyncProps) {
  const { onClick, children, async, loadingText, ...ps } = props
  const [loading, setLoading] = useState(false)

  const _onClick = useCallback(
    async (e) => {
      if (!loading) {
        if (onClick && async) {
          setLoading(true)
          await onClick(e)
          setLoading(false)
        } else if (onClick) {
          onClick(e)
        }
      }
    },
    [async, loading, onClick],
  )

  return (
    <Button {...ps} onClick={_onClick} loading={loading}>
      {loading ? loadingText || children : children}
    </Button>
  )
}
