"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "transformValueByType", {
    enumerable: true,
    get: function() {
        return transformValueByType;
    }
});
function transformValueByType(values, config, formComponents) {
    for(const key in values){
        var _formComponents_type, _formComponents_type1;
        let type = '';
        let outProps = {};
        for(let i = 0; i < config.length; i++){
            const cc = config[i];
            if ((cc === null || cc === void 0 ? void 0 : cc.key) === key) {
                type = cc.type;
                outProps = cc.props;
            }
        }
        const transform = (_formComponents_type = formComponents[type]) === null || _formComponents_type === void 0 ? void 0 : _formComponents_type.transformDefaultValue;
        // @ts-ignore
        const propsNew = formComponents === null || formComponents === void 0 ? void 0 : (_formComponents_type1 = formComponents[type]) === null || _formComponents_type1 === void 0 ? void 0 : _formComponents_type1.transformProps(outProps, {});
        if (transform) {
            values[key] = transform(values[key], propsNew);
        }
    }
    return values;
}
