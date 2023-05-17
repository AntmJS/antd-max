import FormBox from '../index'
import { ISearchParams } from './demo-types'

export default function Index() {
  const [form] = FormBox.useForm()

  return (
    <FormBox<ISearchParams>
      queryInit
      form={form}
      actions={[
        {
          type: 'default',
          children: '重置',
          actionType: 'reset',
        },
        {
          type: 'primary',
          children: '搜索',
          onClick: (res) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                console.info(res)
                resolve(null)
              }, 2000)
            })
          },
          async: true,
        },
      ]}
      config={[
        {
          key: 'name',
          label: '用户名称',
          type: 'input',
        },
        {
          key: 'select',
          label: '下拉搜索',
          type: 'select',
          props: {
            options: [
              { label: '选项1', value: 'key1' },
              { label: '选项2', value: 'key2' },
            ],
          },
        },
        {
          key: 'time',
          label: '日期选择',
          type: 'timePicker',
        },
        {
          key: 'month',
          label: '月份选择',
          type: 'monthPicker',
        },
        {
          key: 'creatTime',
          label: '创建时间',
          type: 'rangePicker',
        },
        {
          key: 'treeSelect',
          label: '树选择',
          type: 'treeSelect',
          props: {
            treeData: [],
          },
        },
        {
          key: 'cascader',
          label: '树选择',
          type: 'cascader',
          props: {
            options: [],
          },
        },
      ]}
    />
  )
}
