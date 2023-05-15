import FormMax_ from './form-max-extra'

type ISearchParams = {
  images: string[]
}

export default function Index() {
  return (
    <FormMax_<ISearchParams>
      actions={[
        {
          type: 'primary',
          children: '提交',
          onClick: (res) => console.info(res),
        },
      ]}
      config={[
        {
          key: 'images',
          label: '上传图片',
          type: 'imageUploader',
        },
      ]}
    />
  )
}
