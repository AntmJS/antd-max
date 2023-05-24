import type { CheckboxGroupProps } from 'antd/es/checkbox/index'
import { Upload, Checkbox, Col, UploadProps } from 'antd'
import {
  IFormBoxItemProps,
  IMakeFormBoxProps,
  IMakeFormCompProps,
} from '../types'
import FormBox from '../index'

export type IFormBoxItemPropsNew<T> =
  | IFormBoxItemProps<T>
  | IMakeFormCompProps<'checkbox', CheckboxGroupProps, T>
  | IMakeFormCompProps<'imageUploader', UploadProps, T>

export type IFormBoxPropsNew<T> = IMakeFormBoxProps<T, IFormBoxItemPropsNew<T>>

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e
  }
  return e?.fileList
}

FormBox.resiterComponent({
  type: 'checkbox',
  component: Checkbox.Group,
  transformProps: (props) => {
    return {
      children: ({ options }) => (
        <>
          {options.map((item, index) => {
            if (typeof item === 'object') {
              return (
                <Col span={8} key={`${item.value}_${index}`}>
                  <Checkbox value={item.value}>{item.label}</Checkbox>
                </Col>
              )
            } else {
              return (
                <Col span={8} key={`${item}_${index}`}>
                  <Checkbox value={item}>{item}</Checkbox>
                </Col>
              )
            }
          })}
        </>
      ),
      ...props,
    }
  },
})

FormBox.resiterComponent({
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

export default function FormBox_<T>(props: IFormBoxPropsNew<T>) {
  return <FormBox {...(props as any)} />
}

FormBox_['resiterComponent'] = FormBox.resiterComponent
FormBox_['showComponents'] = FormBox.showComponents
FormBox_['useForm'] = FormBox.useForm
