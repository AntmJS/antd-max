import type { IbaseProps } from '../../types/common'
import type {
  ButtonProps,
  FormInstance,
  FormItemProps,
  InputProps,
  TimePickerProps,
  TreeProps,
  SelectProps,
  CascaderProps,
} from 'antd'
import { MonthPickerProps, RangePickerProps } from 'antd/es/date-picker'

export interface IMakeFormCompProps<Type, Props, T> extends FormItemProps {
  type: Type
  props?: Props
  key: keyof T | Array<string | number>
  label?: string
  col?: number
}

export type IFormBoxItemProps<T> =
  | IMakeFormCompProps<'timePicker', TimePickerProps, T>
  | IMakeFormCompProps<'monthPicker', MonthPickerProps, T>
  | IMakeFormCompProps<'rangePicker', RangePickerProps, T>
  | IMakeFormCompProps<'cascader', CascaderProps, T>
  | IMakeFormCompProps<'treeSelect', TreeProps, T>
  | IMakeFormCompProps<'input', InputProps, T>
  | IMakeFormCompProps<'select', SelectProps, T>

interface ButtonProps_<T> extends ButtonProps {
  onClick?: (result: T) => void
  actionType?: 'reset'
  async?: boolean
}

export type IFormBoxProps<T, CP = IFormBoxItemProps> = {
  queryInit?: boolean
  config: CP[]
  actions?: ButtonProps_<T>[]
  defaultValues?: T
  col?: number
  form: FormInstance
} & IbaseProps

export interface IRegisterFormParams extends FormItemProps {
  type: string
  component: any
  transformProps?: (
    props: Record<string, any>,
    itemProps: Record<string, any>,
  ) => Record<string, any>
  transformValue?: (params: any, props: any) => any
  transformDefaultValue?: (params: any, props: any) => any
}

export type IRegisterForm = (params: IRegisterFormParams) => void

declare interface FormBox {
  <T>(props: IFormBoxProps<T>): JSX.Element
  resiterComponent: IRegisterForm
  showComponents: () => Record<string, IRegisterFormParams>
  useForm<Values = any>(form?: FormInstance<Values>): [FormInstance<Values>]
}

export { FormBox }
