import {
  useState,
  useCallback,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react'
import { Spin } from 'antd'
import { InfiniteScrollProps, InfiniteScrollInstance } from './types'
import './index.less'

const clsPrefix = `van-infinite-scroll`
type IStatus = 'loading' | 'complete' | 'error'
let compInitIndex = 0

function InfiniteScroll_(
  props: InfiniteScrollProps,
  ref?: React.ForwardedRef<InfiniteScrollInstance>,
) {
  const {
    renderLoading,
    renderComplete,
    renderError,
    parentClassName,
    loadMore,
    className = '',
    completeText = '没有更多了～',
    loadingText = '加载中...',
    errorText = '加载失败',
    reloadText = '重新加载',
  } = props
  const [status, setStatus] = useState<IStatus>('loading')
  const [onRequest, setOnRequest] = useState(false)
  const contentObserver = useRef<any>()
  const [compIndex] = useState(compInitIndex++)
  const thisDom = useRef<any>()
  const [forceKey, setForceKey] = useState(0) // 解决IntersectionObserver中执行loadmore时无法拿到最新的俩是state

  const reset = useCallback((): Promise<null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setForceKey(0)
        setStatus('loading')
        setOnRequest(false)
        resolve(null)
      })
    })
  }, [])

  const _loadMore = useCallback(
    async (immediately?: boolean) => {
      if ((!onRequest && status === 'loading') || immediately) {
        setOnRequest(true)
        const status = await loadMore()
        setStatus(status)
        setTimeout(() => {
          setOnRequest(false)
        }, 33)
      }
    },
    [loadMore, onRequest, status],
  )

  useEffect(() => {
    return () => {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (forceKey !== 0) _loadMore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceKey])

  const initObserve = useCallback(() => {
    const options: any = {
      threshold: [0.6],
    }
    if (parentClassName)
      options.root = document.getElementsByClassName(parentClassName)[0]
    const contentObserver_ = new IntersectionObserver(function (res: any) {
      const target = res[0]
      if (target && target.intersectionRatio >= 0.6) {
        setForceKey(Math.random() + Math.random())
      }
    }, options)
    contentObserver.current = contentObserver_
    contentObserver.current.observe(thisDom.current)
  }, [parentClassName])

  useEffect(() => {
    setTimeout(() => {
      initObserve()
    }, 66)

    return () => {
      if (contentObserver.current != null) {
        contentObserver.current.disconnect()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const retry = useCallback(() => {
    reset()
    _loadMore(true)
  }, [_loadMore, reset])

  useImperativeHandle(ref, () => {
    return {
      reset,
    }
  })

  return (
    <div
      className={`${clsPrefix} ${clsPrefix}${compIndex} ${className}`}
      ref={thisDom}
    >
      {status === 'loading' && (
        <>
          {renderLoading || (
            <Spin className={`${clsPrefix}-loading`} tip={loadingText}></Spin>
          )}
        </>
      )}
      {status === 'complete' && (
        <>
          {renderComplete || (
            <div className={`${clsPrefix}-complete`}>{completeText}</div>
          )}
        </>
      )}
      {status === 'error' && (
        <>
          {renderError || (
            <div className={`${clsPrefix}-error`}>
              <span>{errorText}</span>
              <span className="reload-btn" onClick={retry}>
                {reloadText}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export const InfiniteScroll = forwardRef(InfiniteScroll_)

export default InfiniteScroll
