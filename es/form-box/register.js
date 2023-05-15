import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { jsx as _jsx } from "react/jsx-runtime";
import { Input, TimePicker, DatePicker, Cascader, TreeSelect, Select, Tooltip } from 'antd';
import dayjs from 'dayjs';
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;
export const formComponents = {};
const commonDefaultDateTransform = (v, props)=>{
    if (!v) {
        return undefined;
    }
    if (Array.isArray(v)) {
        return v.map((item)=>{
            return item ? dayjs(item, props.format) : undefined;
        });
    } else {
        return dayjs(v, props.format);
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
        component: TimePicker,
        transformDefaultValue: commonDefaultDateTransform,
        transformValue: commonDateTranform,
        transformProps: (props, itemProps)=>{
            return _object_spread({
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
            return _object_spread({
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
            return _object_spread({
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
        component: Cascader,
        transformProps: (props, itemProps)=>{
            return _object_spread({
                allowClear: true,
                placeholder: `请选择${itemProps['label'] || ''}`
            }, props);
        }
    },
    {
        type: 'treeSelect',
        component: TreeSelect,
        transformProps: (props)=>{
            return _object_spread({
                allowClear: true,
                showSearch: true,
                placeholder: '请选择'
            }, props);
        }
    },
    {
        type: 'input',
        component: Input,
        transformProps: (props, itemProps)=>{
            return _object_spread({
                allowClear: true,
                placeholder: `请输入${itemProps['label'] || ''}`
            }, props);
        }
    },
    {
        type: 'select',
        component: Select,
        transformProps: (props, itemProps)=>{
            return _object_spread_props(_object_spread({
                allowClear: true,
                filterOption: props['showSearch'] ? (input, option)=>{
                    (option === null || option === void 0 ? void 0 : option['props'].children.props.title.toLowerCase().indexOf(input.toLowerCase())) >= 0;
                } : undefined,
                placeholder: `请输入${itemProps['label'] || ''}`
            }, props), {
                children: (props['options'] || []).map((item)=>/*#__PURE__*/ _jsx(Option, {
                        value: item.value,
                        children: /*#__PURE__*/ _jsx(Tooltip, {
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
export function resiterComponent(params) {
    const { type  } = params;
    if (formComponents[type]) {
        console.warn(`FormMax: Overwrite existing component ${type}`);
    }
    formComponents[type] = params;
}
export function showComponents() {
    return formComponents;
}
