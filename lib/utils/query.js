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
    queryToObj: function() {
        return queryToObj;
    },
    objToQuery: function() {
        return objToQuery;
    }
});
const queryToObj = (url = window.location.href)=>{
    const value = url.split('?')[1];
    const params = {};
    if (value) {
        const curStr = value.split('&');
        for(let i = 0; i < curStr.length; i++){
            var _curStr_i;
            const item = (_curStr_i = curStr[i]) === null || _curStr_i === void 0 ? void 0 : _curStr_i.split('=');
            params[item[0]] = item[1] ? deCodeUrlData(item[1]) : undefined;
        }
    }
    return params;
};
function deCodeUrlData(d) {
    const data = decodeURIComponent(d);
    if (typeof data === 'object') {
        return JSON.parse(d);
    } else {
        return d;
    }
}
const objToQuery = function(obj) {
    let queryStr = '';
    const keys = Object.keys(obj).filter((key)=>{
        const item = obj[key];
        return item !== undefined;
    });
    keys.map((key, index)=>{
        const item = obj[key];
        let res = `${key}=${enCodeUrlData(item)}&`;
        if (index === keys.length - 1) {
            res = `${key}=${enCodeUrlData(item)}`;
        }
        queryStr += res;
    });
    return queryStr;
};
function enCodeUrlData(d) {
    if (typeof d === 'object') {
        return encodeURIComponent(JSON.stringify(d));
    } else {
        return d;
    }
}
