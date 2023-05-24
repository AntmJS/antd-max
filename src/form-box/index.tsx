/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState, useEffect } from 'react'
import { Form, Col, Row } from 'antd'
import { queryToObj } from '../utils/query'
import ButtonAsync from '../button-async'
import { IFormBoxProps, IFormBoxItemProps, IRegisterFormParams } from './types'
import { transformValueByType } from './utils'
import { formComponents, resiterComponent, showComponents } from './register'

const clsPrefix = 'antm-ui'
const FormItem = Form.Item

let initIndex = 0

function FormBox<T>(props: IFormBoxProps<T>) {
  const { config, defaultValues, actions, queryInit, col, form, ...oprops } =
    props
  const defaultCol = col
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
    (item: IFormBoxItemProps<Record<string, any>>, index: any) => {
      const { type, key, label, props, col, ...others } = item
      const componentInfo = formComponents[type] as IRegisterFormParams

      const {
        component,
        transformProps,
        transformDefaultValue,
        transformValue,
        ...formItemProps
      } = componentInfo
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
          key={`${clsPrefix}-form-col${index}_${componentIndex}_${
            Array.isArray(key) ? key.join('_') : key
          }`}
          style={{ marginBottom: '24px' }}
        >
          <FormItem
            label={label}
            name={key}
            {...Object.assign(formItemProps, others)}
          >
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
    (item) => {
      const vs = getAllValues()
      if (item.actionType === 'reset') {
        form.resetFields()
      }
      item.onClick?.(vs)
    },
    [form, getAllValues],
  )

  const _defaultValues = useCallback(() => {
    return transformValueByType(defaultValues || {}, config, formComponents)
  }, [config, defaultValues])

  return (
    <Form
      initialValues={_defaultValues || {}}
      className={`${clsPrefix}-form-max`}
      layout="inline"
      form={form}
      {...oprops}
    >
      <Row style={{ width: '100%' }}>
        {config.map((it, index) => {
          return renderItem(it as any, index)
        })}
      </Row>
      <Row style={{ width: '100%' }}>
        <Col span={24} className={`${clsPrefix}-form-max-btns`}>
          {actions?.map((act, index) => {
            const { actionType, ...oprops } = act
            return (
              <ButtonAsync
                {...oprops}
                className={`${clsPrefix}-form-max-btn ${act.className || ''}`}
                key={`${clsPrefix}-btn_${componentIndex}_${index}`}
                onClick={() => handleAction(act)}
              />
            )
          })}
        </Col>
      </Row>
    </Form>
  )
}

FormBox['resiterComponent'] = resiterComponent
FormBox['showComponents'] = showComponents
FormBox['useForm'] = Form.useForm

export default FormBox
