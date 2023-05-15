import type { ButtonProps } from 'antd'

export interface ButtonAsyncProps extends ButtonProps {
  loadingText?: string
  onClick?:
    | React.MouseEventHandler<HTMLButtonElement>
    | ((e: HTMLButtonElement) => Promise<any>)
  async?: boolean
}

declare const ButtonAsync: FunctionComponent<ButtonAsyncProps>

export { ButtonAsync }
