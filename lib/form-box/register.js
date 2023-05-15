"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formComponents: function() {
        return formComponents;
    },
    resiterComponent: function() {
        return resiterComponent;
    },
    showComponents: function() {
        return showComponents;
    }
});
const _interop_require_default = require("@swc/helpers/_/_interop_require_default");
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _jsxruntime = require("react/jsx-runtime");
const _antd = require("antd");
const _dayjs = /*#__PURE__*/ _interop_require_default._(require("dayjs"));
const MonthPicker = _antd.DatePicker.MonthPicker;
const RangePicker = _antd.DatePicker.RangePicker;
const Option = _antd.Select.Option;
const formComponents = {};
const commonDefaultDateTransform = (v, props)=>{
    if (!v) {
        return undefined;
    }
    if (Array.isArray(v)) {
        return v.map((item)=>{
            return item ? (0, _dayjs.default)(item, props.format) : undefined;
        });
    } else {
        return (0, _dayjs.default)(v, props.format);
    }
};
const commonDateTranform = (v, props)=>{
    if (!v) {
        return undefined;
    }
    if (Array.isArray(v)) {
        return v.map((item)=>{
            return item ? item.format(props.format) : undefined;
        });
    } else {
        return v ? v.format(props.format) : undefined;
    }
};
const defaultCompItems = [
    {
        type: 'timePicker',
        component: _antd.TimePicker,
        transformDefaultValue: commonDefaultDateTransform,
        transformValue: commonDateTranform,
        transformProps: (props, itemProps)=>{
            return _object_spread._({
                allowClear: true,
                format: 'YYYY-MM-DD',
                placeholder: `请选择${itemProps['label'] || ''}`
            }, props);
        }
    },
    {
        type: 'monthPicker',
        component: MonthPicker,
        transformDefaultValue: commonDefaultDateTransform,
        transformValue: commonDateTranform,
        transformProps: (props)=>{
            return _object_spread._({
                allowClear: true,
                format: 'YYYY-MM',
                placeholder: '请选择'
            }, props);
        }
    },
    {
        type: 'rangePicker',
        component: RangePicker,
        transformDefaultValue: commonDefaultDateTransform,
        transformValue: commonDateTranform,
        transformProps: (props)=>{
            return _object_spread._({
                allowClear: true,
                format: 'YYYY-MM-DD',
                placeholder: [
                    '开始时间',
                    '结束时间'
                ]
            }, props);
        }
    },
    {
        type: 'cascader',
        component: _antd.Cascader,
        transformProps: (props, itemProps)=>{
            return _object_spread._({
                allowClear: true,
                placeholder: `请选择${itemProps['label'] || ''}`
            }, props);
        }
    },
    {
        type: 'treeSelect',
        component: _antd.TreeSelect,
        transformProps: (props)=>{
            return _object_spread._({
                allowClear: true,
                showSearch: true,
                placeholder: '请选择'
            }, props);
        }
    },
    {
        type: 'input',
        component: _antd.Input,
        transformProps: (props, itemProps)=>{
            return _object_spread._({
                allowClear: true,
                placeholder: `请输入${itemProps['label'] || ''}`
            }, props);
        }
    },
    {
        type: 'select',
        component: _antd.Select,
        transformProps: (props, itemProps)=>{
            return _object_spread_props._(_object_spread._({
                allowClear: true,
                filterOption: props['showSearch'] ? (input, option)=>{
                    (option === null || option === void 0 ? void 0 : option['props'].children.props.title.toLowerCase().indexOf(input.toLowerCase())) >= 0;
                } : undefined,
                placeholder: `请输入${itemProps['label'] || ''}`
            }, props), {
                children: (props['options'] || []).map((item)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(Option, {
                        value: item.value,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Tooltip, {
                            title: item.value,
                            children: item.value
                        })
                    }, item.key))
            });
        }
    }
];
defaultCompItems.forEach((item)=>{
    resiterComponent(item);
});
function resiterComponent(params) {
    const { type  } = params;
    if (formComponents[type]) {
        console.warn(`FormMax: Overwrite existing component ${type}`);
    }
    formComponents[type] = params;
}
function showComponents() {
    return formComponents;
}
