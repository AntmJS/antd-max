import {
  useCallback,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { Form, Col, Row, FormInstance } from 'antd'
import { queryToObj, objToQuery } from '../utils/query'
import ButtonAsync from '../button-async'
import {
  IFormMaxProps,
  IFormMaxItemProps,
  IRegisterFormParams,
  IRegisterForm,
} from './types'
import { transformValueByType } from './utils'
import { formComponents, resiterComponent, showComponents } from './register'

const clsPrefix = 'antm-ui'
const FormItem = Form.Item

let initIndex = 0

interface IFormMax {
  <T>(props: IFormMaxProps<T>): JSX.Element
  resiterComponent: IRegisterForm
  showComponents: () => Record<string, IRegisterFormParams>
}

function FormMax_<T>(
  props: IFormMaxProps<T>,
  ref?: React.ForwardedRef<FormInstance>,
) {
  const { config, defaultValues, actions, queryInit, col } = props
  const defaultCol = col
  const [form] = Form.useForm()
  const [componentIndex] = useState(initIndex++)

  useEffect(() => {
    if (queryInit) {
      const queryRes = queryToObj()

      const values = transformValueByType(queryRes, config, formComponents)

      form.setFieldsValue(values)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderItem = useCallback(
    (item: IFormMaxItemProps<Record<string, any>>, index) => {
      const { type, key, label, props, col } = item
      const componentInfo = formComponents[type] as IRegisterFormParams

      const { component, transformProps } = componentInfo
      const Component = component
      const propsNew = transformProps?.(props || {}, {
        label,
      })

      return (
        <Col
          xl={col || defaultCol || 8}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          key={`${clsPrefix}-form-col${index}-${componentIndex}@${
            Array.isArray(key) ? key.join('_') : key
          }`}
          style={{ marginBottom: '24px' }}
        >
          <FormItem label={label} name={key} {...componentInfo}>
            <Component {...propsNew} />
          </FormItem>
        </Col>
      )
    },
    [componentIndex, defaultCol],
  )

  const getAllValues = useCallback(() => {
    const vs = form.getFieldsValue()
    for (const key in vs) {
      let type = ''
      let outProps: any = {}
      for (let i = 0; i < config.length; i++) {
        const cc = config[i]
        if (cc?.key === key) {
          type = cc.type
          outProps = cc.props
        }
      }
      const transform = formComponents[type]?.transformValue
      // @ts-ignore
      const propsNew = formComponents[type].transformProps(outProps, {})
      if (transform) {
        vs[key] = transform(vs[key], propsNew)
      }
    }
    return vs
  }, [config, form])

  const handleAction = useCallback(
    (it) => {
      const vs = getAllValues()
      if (it.fType === 'query') {
        const s = objToQuery(vs)
        window.location.href = window.location.href + '?' + s
      }
      if (it.fType === 'reset') {
        form.resetFields()
      }
      return it.onClick?.(getAllValues())
    },
    [form, getAllValues],
  )

  useImperativeHandle(ref, function () {
    return { ...form }
  })

  const _defaultValues = useCallback(() => {
    return transformValueByType(defaultValues || {}, config, formComponents)
  }, [config, defaultValues])

  return (
    <Form
      initialValues={_defaultValues || {}}
      className={`${clsPrefix}-form-max`}
      layout="inline"
      form={form}
      labelCol={{ xl: 7 }}
      wrapperCol={{ xl: 17 }}
    >
      <Row style={{ width: '100%' }}>
        {config.map((it, index) => {
          return renderItem(it as any, index)
        })}
      </Row>
      <Row style={{ width: '100%' }}>
        <Col span={24} className={`${clsPrefix}-form-max-btns`}>
          {actions?.map((act, index) => (
            <ButtonAsync
              {...act}
              className={`${clsPrefix}-form-max-btn ${act.className || ''}`}
              key={`${clsPrefix}-btn${componentIndex}@${index}`}
              onClick={() => handleAction(act)}
            />
          ))}
        </Col>
      </Row>
    </Form>
  )
}

// @ts-ignore
const FormMax = forwardRef(FormMax_) as IFormMax

FormMax['resiterComponent'] = resiterComponent
FormMax['showComponents'] = showComponents

export default FormMax
