import type { IbaseProps } from '../../types/common'
import type { ButtonProps, FormItemProps } from 'antd'

export type InternalType =
  | 'timePicker'
  | 'monthPicker'
  | 'rangePicker'
  | 'cascader'
  | 'treeSelect'
  | 'input'
  | 'select'

export interface IFormMaxItemProps<T> extends FormItemProps {
  type: internalType
  props?: Record<string, any>
  key: keyof T | Array<string | number>
  label?: string
  col?: number
}

interface ButtonProps_<T> extends ButtonProps {
  onClick?: (result: T) => void
  fType?: 'reset'
  async?: boolean
}

export interface IFormMaxProps<T> extends IbaseProps {
  queryInit?: boolean
  config: IFormMaxItemProps<T>[]
  actions?: ButtonProps_<T>[]
  defaultValues?: T
  col?: number
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

declare interface FormMax {
  <T>(props: IFormMaxProps<T>): JSX.Element
  resiterComponent: IRegisterForm
  showComponents: () => Record<string, IRegisterFormParams>
}

export { FormMax }
