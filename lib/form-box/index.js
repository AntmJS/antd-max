"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = require("@swc/helpers/_/_interop_require_default");
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _antd = require("antd");
const _query = require("../utils/query");
const _buttonasync = /*#__PURE__*/ _interop_require_default._(require("../button-async"));
const _utils = require("./utils");
const _register = require("./register");
const clsPrefix = 'antm-ui';
const FormItem = _antd.Form.Item;
let initIndex = 0;
function FormMax_(props, ref) {
    const { config , defaultValues , actions , queryInit , col  } = props;
    const defaultCol = col;
    const [form] = _antd.Form.useForm();
    const [componentIndex] = (0, _react.useState)(initIndex++);
    (0, _react.useEffect)(()=>{
        if (queryInit) {
            const queryRes = (0, _query.queryToObj)();
            const values = (0, _utils.transformValueByType)(queryRes, config, _register.formComponents);
            form.setFieldsValue(values);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const renderItem = (0, _react.useCallback)((item, index)=>{
        const { type , key , label , props , col  } = item;
        const componentInfo = _register.formComponents[type];
        const { component , transformProps  } = componentInfo;
        const Component = component;
        const propsNew = transformProps === null || transformProps === void 0 ? void 0 : transformProps(props || {}, {
            label
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Col, {
            xl: col || defaultCol || 8,
            lg: 12,
            md: 24,
            sm: 24,
            xs: 24,
            style: {
                marginBottom: '24px'
            },
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(FormItem, _object_spread_props._(_object_spread._({
                label: label,
                name: key
            }, componentInfo), {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, _object_spread._({}, propsNew))
            }))
        }, `${clsPrefix}-form-col${index}-${componentIndex}@${Array.isArray(key) ? key.join('_') : key}`);
    }, [
        componentIndex,
        defaultCol
    ]);
    const getAllValues = (0, _react.useCallback)(()=>{
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
            const transform = (_formComponents_type = _register.formComponents[type]) === null || _formComponents_type === void 0 ? void 0 : _formComponents_type.transformValue;
            // @ts-ignore
            const propsNew = _register.formComponents[type].transformProps(outProps, {});
            if (transform) {
                vs[key] = transform(vs[key], propsNew);
            }
        }
        return vs;
    }, [
        config,
        form
    ]);
    const handleAction = (0, _react.useCallback)((it)=>{
        var _it_onClick;
        const vs = getAllValues();
        if (it.fType === 'query') {
            const s = (0, _query.objToQuery)(vs);
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
    (0, _react.useImperativeHandle)(ref, function() {
        return _object_spread._({}, form);
    });
    const _defaultValues = (0, _react.useCallback)(()=>{
        return (0, _utils.transformValueByType)(defaultValues || {}, config, _register.formComponents);
    }, [
        config,
        defaultValues
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_antd.Form, {
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
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Row, {
                style: {
                    width: '100%'
                },
                children: config.map((it, index)=>{
                    return renderItem(it, index);
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Row, {
                style: {
                    width: '100%'
                },
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Col, {
                    span: 24,
                    className: `${clsPrefix}-form-max-btns`,
                    children: actions === null || actions === void 0 ? void 0 : actions.map((act, index)=>/*#__PURE__*/ (0, _react.createElement)(_buttonasync.default, _object_spread_props._(_object_spread._({}, act), {
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
const FormMax = /*#__PURE__*/ (0, _react.forwardRef)(FormMax_);
FormMax['resiterComponent'] = _register.resiterComponent;
FormMax['showComponents'] = _register.showComponents;
const _default = FormMax;
