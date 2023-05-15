"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ButtonAsync;
    }
});
const _async_to_generator = require("@swc/helpers/_/_async_to_generator");
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _antd = require("antd");
function ButtonAsync(props) {
    const { onClick , children , async , loadingText  } = props, ps = _object_without_properties._(props, [
        "onClick",
        "children",
        "async",
        "loadingText"
    ]);
    const [loading, setLoading] = (0, _react.useState)(false);
    const _onClick = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator._(function*(e) {
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
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Button, _object_spread_props._(_object_spread._({}, ps), {
        onClick: _onClick,
        loading: loading,
        children: loading ? loadingText || children : children
    }));
}
