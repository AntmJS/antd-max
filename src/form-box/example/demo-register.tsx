import ButtonAsync from '../../button-async/index'
import FormBoxNew from './form-max-extra'
import { ISearchParams } from './demo-types'

const FormBoxD = FormBoxNew<ISearchParams>

export default function Index() {
  const [form] = FormBoxNew.useForm()

  const showFields = () => {
    alert(JSON.stringify(form.getFieldsValue()))
  }

  return (
    <div>
      <span>表单模块1</span>
      <FormBoxD
        form={form}
        config={[
          {
            key: 'images',
            label: '上传图片',
            type: 'imageUploader',
          },
          {
            key: 'checkbox',
            label: '选择品类',
            type: 'checkbox',
            props: {
              options: ['A', 'B', 'C', 'D'],
            },
          },
        ]}
      />
      <span>表单模块2</span>

      <FormBoxD
        form={form}
        config={[
          {
            col: 24,
            key: 'checkbox1',
            label: '选择品类',
            type: 'checkbox',
            props: {
              options: ['A', 'B', 'C', 'D'],
            },
          },
        ]}
      />
      <ButtonAsync onClick={showFields}>点击</ButtonAsync>
    </div>
  )
}
