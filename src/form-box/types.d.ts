import type { IbaseProps } from '../../types/common'
import type { ButtonProps, FormInstance, FormItemProps, InputProps } from 'antd'

export type InternalType =
  | 'timePicker'
  | 'monthPicker'
  | 'rangePicker'
  | 'cascader'
  | 'treeSelect'
  | 'input'
  | 'select'

export interface IFormBoxItemProps<T> extends FormItemProps {
  type: internalType
  props?: Record<string, any>
  key: keyof T | Array<string | number>
  label?: string
  col?: number
}

interface ButtonProps_<T> extends ButtonProps {
  onClick?: (result: T) => void
  actionType?: 'reset'
  async?: boolean
}

export interface IFormBoxProps<T> extends IbaseProps {
  queryInit?: boolean
  config: IFormBoxItemProps<T>[]
  actions?: ButtonProps_<T>[]
  defaultValues?: T
  col?: number
  form: FormInstance
}

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
