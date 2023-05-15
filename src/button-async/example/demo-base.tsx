import ButtonAsync from '../index'

export default function Index() {
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null)
      }, 2000)
    })
  }

  return (
    <>
      <ButtonAsync
        loadingText="数据提交中..."
        async
        type="primary"
        onClick={handleClick}
      >
        点击等待2s
      </ButtonAsync>
    </>
  )
}
