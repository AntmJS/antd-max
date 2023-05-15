import { Upload } from 'antd'
import { IFormMaxItemProps, IFormMaxProps, InternalType } from '../types'
import FormMax from '../index'

interface IFormMaxItemPropsNew<T> extends IFormMaxItemProps<T> {
  type: InternalType | 'imageUploader'
}

interface IFormMaxPropsNew<T> extends IFormMaxProps<T> {
  config: IFormMaxItemPropsNew<T>[]
}

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e
  }
  return e?.fileList
}

FormMax.resiterComponent({
  type: 'imageUploader',
  component: Upload,
  trigger: 'onChange',
  valuePropName: 'fileList',
  getValueFromEvent: normFile,
  transformProps: (props) => {
    return {
      action: '/upload.do',
      listType: 'picture-card',
      children: <div style={{ marginTop: 8 }}>上传</div>,
      ...props,
    }
  },
})

export default function FormMax_<T>(props: IFormMaxPropsNew<T>) {
  return <FormMax {...props} />
}
