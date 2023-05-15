import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { useCallback, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Form, Col, Row } from 'antd';
import { queryToObj, objToQuery } from '../utils/query';
import ButtonAsync from '../button-async';
import { transformValueByType } from './utils';
import { formComponents, resiterComponent, showComponents } from './register';
const clsPrefix = 'antm-ui';
const FormItem = Form.Item;
let initIndex = 0;
function FormMax_(props, ref) {
    const { config , defaultValues , actions , queryInit , col  } = props;
    const defaultCol = col;
    const [form] = Form.useForm();
    const [componentIndex] = useState(initIndex++);
    useEffect(()=>{
        if (queryInit) {
            const queryRes = queryToObj();
            const values = transformValueByType(queryRes, config, formComponents);
            form.setFieldsValue(values);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const renderItem = useCallback((item, index)=>{
        const { type , key , label , props , col  } = item;
        const componentInfo = formComponents[type];
        const { component , transformProps  } = componentInfo;
        const Component = component;
        const propsNew = transformProps === null || transformProps === void 0 ? void 0 : transformProps(props || {}, {
            label
        });
        return /*#__PURE__*/ _jsx(Col, {
            xl: col || defaultCol || 8,
            lg: 12,
            md: 24,
            sm: 24,
            xs: 24,
            style: {
                marginBottom: '24px'
            },
            children: /*#__PURE__*/ _jsx(FormItem, _object_spread_props(_object_spread({
                label: label,
                name: key
            }, componentInfo), {
                children: /*#__PURE__*/ _jsx(Component, _object_spread({}, propsNew))
            }))
        }, `${clsPrefix}-form-col${index}-${componentIndex}@${Array.isArray(key) ? key.join('_') : key}`);
    }, [
        componentIndex,
        defaultCol
    ]);
    const getAllValues = useCallback(()=>{
        const vs = form.getFieldsValue();
        for(const key in vs){
            var _formComponents_type;
            let type = '';
            let outProps = {};
            for(let i = 0; i < config.length; i++){
                const cc = config[i];
                if ((cc === null || cc === void 0 ? void 0 : cc.key) === key) {
                    type = cc.type;
                    outProps = cc.props;
                }
            }
            const transform = (_formComponents_type = formComponents[type]) === null || _formComponents_type === void 0 ? void 0 : _formComponents_type.transformValue;
            // @ts-ignore
            const propsNew = formComponents[type].transformProps(outProps, {});
            if (transform) {
                vs[key] = transform(vs[key], propsNew);
            }
        }
        return vs;
    }, [
        config,
        form
    ]);
    const handleAction = useCallback((it)=>{
        var _it_onClick;
        const vs = getAllValues();
        if (it.fType === 'query') {
            const s = objToQuery(vs);
            window.location.href = window.location.href + '?' + s;
        }
        if (it.fType === 'reset') {
            form.resetFields();
        }
        return (_it_onClick = it.onClick) === null || _it_onClick === void 0 ? void 0 : _it_onClick.call(it, getAllValues());
    }, [
        form,
        getAllValues
    ]);
    useImperativeHandle(ref, function() {
        return _object_spread({}, form);
    });
    const _defaultValues = useCallback(()=>{
        return transformValueByType(defaultValues || {}, config, formComponents);
    }, [
        config,
        defaultValues
    ]);
    return /*#__PURE__*/ _jsxs(Form, {
        initialValues: _defaultValues || {},
        className: `${clsPrefix}-form-max`,
        layout: "inline",
        form: form,
        labelCol: {
            xl: 7
        },
        wrapperCol: {
            xl: 17
        },
        children: [
            /*#__PURE__*/ _jsx(Row, {
                style: {
                    width: '100%'
                },
                children: config.map((it, index)=>{
                    return renderItem(it, index);
                })
            }),
            /*#__PURE__*/ _jsx(Row, {
                style: {
                    width: '100%'
                },
                children: /*#__PURE__*/ _jsx(Col, {
                    span: 24,
                    className: `${clsPrefix}-form-max-btns`,
                    children: actions === null || actions === void 0 ? void 0 : actions.map((act, index)=>/*#__PURE__*/ _createElement(ButtonAsync, _object_spread_props(_object_spread({}, act), {
                            className: `${clsPrefix}-form-max-btn ${act.className || ''}`,
                            key: `${clsPrefix}-btn${componentIndex}@${index}`,
                            onClick: ()=>handleAction(act)
                        })))
                })
            })
        ]
    });
}
// @ts-ignore
const FormMax = /*#__PURE__*/ forwardRef(FormMax_);
FormMax['resiterComponent'] = resiterComponent;
FormMax['showComponents'] = showComponents;
export default FormMax;
