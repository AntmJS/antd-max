import { message } from 'antd'
import FormBox from '../index'
import { ISearchParams } from './demo-types'

export default function Index() {
  const [form] = FormBox.useForm()

  return (
    <FormBox<ISearchParams>
      queryInit
      form={form}
      config={[
        {
          key: 'phone',
          label: '手机号输入',
          type: 'input',
          rules: [
            { required: true, message: '请输入手机号' },
            {
              pattern:
                /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
              message: '请输入正确的手机号',
            },
          ],
        },
      ]}
      actions={[
        {
          type: 'primary',
          children: '提交',
          onClick: () => {
            form
              .validateFields()
              .then((res) => {
                message.error(JSON.stringify(res))
              })
              .catch((res) => {
                message.error(JSON.stringify(res))
              })
          },
        },
      ]}
    />
  )
}
