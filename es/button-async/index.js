import { _ as _async_to_generator } from "@swc/helpers/_/_async_to_generator";
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { Button } from 'antd';
export default function ButtonAsync(props) {
    const { onClick , children , async , loadingText  } = props, ps = _object_without_properties(props, [
        "onClick",
        "children",
        "async",
        "loadingText"
    ]);
    const [loading, setLoading] = useState(false);
    const _onClick = useCallback(function() {
        var _ref = _async_to_generator(function*(e) {
            if (!loading) {
                if (onClick && async) {
                    setLoading(true);
                    yield onClick(e);
                    setLoading(false);
                } else if (onClick) {
                    onClick(e);
                }
            }
        });
        return function(e) {
            return _ref.apply(this, arguments);
        };
    }(), [
        async,
        loading,
        onClick
    ]);
    return /*#__PURE__*/ _jsx(Button, _object_spread_props(_object_spread({}, ps), {
        onClick: _onClick,
        loading: loading,
        children: loading ? loadingText || children : children
    }));
}
