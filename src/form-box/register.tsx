import type { IRegisterFormParams } from './types'
import {
  Input,
  TimePicker,
  DatePicker,
  Cascader,
  TreeSelect,
  Select,
  Tooltip,
} from 'antd'
import dayjs from 'dayjs'

const MonthPicker = DatePicker.MonthPicker
const RangePicker = DatePicker.RangePicker
const Option = Select.Option

export const formComponents: Record<string, IRegisterFormParams> = {}

const commonDefaultDateTransform = (v, props) => {
  if (!v) {
    return undefined
  }
  if (Array.isArray(v)) {
    return v.map((item) => {
      return item ? dayjs(item, props.format) : undefined
    })
  } else {
    return dayjs(v, props.format)
  }
}

const commonDateTranform = (v, props) => {
  if (!v) {
    return undefined
  }
  if (Array.isArray(v)) {
    return v.map((item) => {
      return item ? item.format(props.format) : undefined
    })
  } else {
    return v ? v.format(props.format) : undefined
  }
}

const defaultCompItems: IRegisterFormParams[] = [
  {
    type: 'timePicker',
    component: TimePicker,
    transformDefaultValue: commonDefaultDateTransform,
    transformValue: commonDateTranform,
    transformProps: (props, itemProps) => {
      return {
        allowClear: true,
        format: 'YYYY-MM-DD',
        placeholder: `请选择${itemProps['label'] || ''}`,
        ...props,
      }
    },
  },
  {
    type: 'monthPicker',
    component: MonthPicker,
    transformDefaultValue: commonDefaultDateTransform,
    transformValue: commonDateTranform,
    transformProps: (props) => {
      return {
        allowClear: true,
        format: 'YYYY-MM',
        placeholder: '请选择',
        ...props,
      }
    },
  },
  {
    type: 'rangePicker',
    component: RangePicker,
    transformDefaultValue: commonDefaultDateTransform,
    transformValue: commonDateTranform,
    transformProps: (props) => {
      return {
        allowClear: true,
        format: 'YYYY-MM-DD',
        placeholder: ['开始时间', '结束时间'],
        ...props,
      }
    },
  },
  {
    type: 'cascader',
    component: Cascader,
    transformProps: (props, itemProps) => {
      return {
        allowClear: true,
        placeholder: `请选择${itemProps['label'] || ''}`,
        ...props,
      }
    },
  },
  {
    type: 'treeSelect',
    component: TreeSelect,
    transformProps: (props) => {
      return {
        allowClear: true,
        showSearch: true,
        placeholder: '请选择',
        ...props,
      }
    },
  },
  {
    type: 'input',
    component: Input,
    transformProps: (props, itemProps) => {
      return {
        allowClear: true,
        placeholder: `请输入${itemProps['label'] || ''}`,
        ...props,
      }
    },
  },
  {
    type: 'select',
    component: Select,
    transformProps: (props, itemProps) => {
      return {
        allowClear: true,
        filterOption: props['showSearch']
          ? (input, option) => {
              option?.['props'].children.props.title
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          : undefined,
        placeholder: `请输入${itemProps['label'] || ''}`,
        ...props,
        children: (props['options'] || []).map((item) => (
          <Option key={`${item.value}_${item.label}`} value={item.value}>
            <Tooltip title={item.label}>{item.label}</Tooltip>
          </Option>
        )),
      }
    },
  },
]

defaultCompItems.forEach((item) => {
  resiterComponent(item)
})

export function resiterComponent(params: IRegisterFormParams) {
  const { type } = params
  if (formComponents[type]) {
    console.warn(`FormBox: Overwrite existing component ${type}`)
  }
  formComponents[type] = params
}

export function showComponents() {
  return formComponents
}
