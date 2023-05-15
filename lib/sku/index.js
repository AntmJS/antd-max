"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Sku;
    }
});
const _interop_require_default = require("@swc/helpers/_/_interop_require_default");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classnames = /*#__PURE__*/ _interop_require_default._(require("classnames"));
const _antd = require("antd");
const _utils = require("./utils");
const preCls = `antm-ui-sku`;
const { useToken  } = _antd.theme;
function Sku(props) {
    const { sku =[] , className ='' , goodsList =[] , goodsId , onChange , clickAttrDisable , itemRender , disabledClassName ='' , activeClassName ='' , itemDisable  } = props;
    const [currentGoods, setCurrentGoods] = (0, _react.useState)();
    const { token  } = useToken();
    (0, _react.useEffect)(function() {
        if (!goodsId && goodsList) {
            for(let i = 0; i < goodsList.length; i++){
                const goodsItem = goodsList[i];
                if ((goodsItem === null || goodsItem === void 0 ? void 0 : goodsItem.disabled) !== true) {
                    setCurrentGoods(goodsItem);
                    if (onChange) onChange(goodsItem);
                    break;
                }
            }
        }
        if (goodsId && goodsList) {
            for(let i = 0; i < goodsList.length; i++){
                const goodsItem = goodsList[i];
                if ((goodsItem === null || goodsItem === void 0 ? void 0 : goodsItem.id) === goodsId) {
                    setCurrentGoods(goodsItem);
                    break;
                }
            }
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        goodsId,
        goodsList
    ]);
    const currentAttrCanBuy = (0, _react.useCallback)(function(attrId, attrs) {
        let skuIds = [
            ...(currentGoods === null || currentGoods === void 0 ? void 0 : currentGoods.skuIds) || []
        ];
        if (!skuIds.length) return undefined;
        const usedAttrId = attrs.filter((it)=>skuIds.includes(it.id))[0].id;
        skuIds.splice(skuIds.indexOf(usedAttrId), 1);
        skuIds = skuIds.concat(attrId);
        let canBuyGoodsItem = undefined;
        for(let i = 0; i < goodsList.length; i++){
            var _goodsList_i, _goodsList_i1;
            if (((_goodsList_i = goodsList[i]) === null || _goodsList_i === void 0 ? void 0 : _goodsList_i.skuIds) && (0, _utils.everyItemEqual)(((_goodsList_i1 = goodsList[i]) === null || _goodsList_i1 === void 0 ? void 0 : _goodsList_i1.skuIds) || [], skuIds)) {
                canBuyGoodsItem = goodsList[i];
                break;
            }
        }
        return canBuyGoodsItem;
    }, [
        currentGoods === null || currentGoods === void 0 ? void 0 : currentGoods.skuIds,
        goodsList
    ]);
    const attrClick = (0, _react.useCallback)(function(canBuyGoodsItem, canBuy) {
        if (canBuy) {
            setCurrentGoods(canBuyGoodsItem);
            if (onChange) onChange(canBuyGoodsItem);
        } else {
            if (clickAttrDisable) clickAttrDisable(canBuyGoodsItem);
        }
    }, [
        clickAttrDisable,
        onChange
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: `${preCls} ${className}`,
        children: sku.map((item, index)=>{
            /*#__PURE__*/ return (0, _jsxruntime.jsxs)("div", {
                className: `${preCls}-item`,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: `${preCls}-name`,
                        children: item.name
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: `${preCls}-attrs`,
                        children: item.items.map((it, index)=>{
                            const canBuyGoodsItem = currentAttrCanBuy(it.id, item.items);
                            const canBuy = !canBuyGoodsItem || canBuyGoodsItem.disabled === true || itemDisable && itemDisable(canBuyGoodsItem) ? false : true;
                            return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                onClick: ()=>attrClick(canBuyGoodsItem, canBuy),
                                className: (0, _classnames.default)({
                                    [`${preCls}-attr`]: true,
                                    [`${preCls}-attr-active ${activeClassName}`]: currentGoods === null || currentGoods === void 0 ? void 0 : currentGoods.skuIds.includes(it.id),
                                    [`${preCls}-attr-disable ${disabledClassName}`]: !canBuy
                                }),
                                style: (currentGoods === null || currentGoods === void 0 ? void 0 : currentGoods.skuIds.includes(it.id)) ? {
                                    color: token.colorPrimary,
                                    background: `fade(${token.colorPrimary}, 10%)`,
                                    border: `1px solid ${token.colorPrimary}`
                                } : {},
                                children: itemRender ? itemRender(it) : it.name
                            }, `attr#${index}@${it.id}`);
                        })
                    })
                ]
            }, `sku#${index}@${item.id}`);
        })
    });
}
