import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useCallback } from 'react';
import classnames from 'classnames';
import { theme } from 'antd';
import { everyItemEqual } from './utils';
const preCls = `antm-ui-sku`;
const { useToken  } = theme;
export default function Sku(props) {
    const { sku =[] , className ='' , goodsList =[] , goodsId , onChange , clickAttrDisable , itemRender , disabledClassName ='' , activeClassName ='' , itemDisable  } = props;
    const [currentGoods, setCurrentGoods] = useState();
    const { token  } = useToken();
    useEffect(function() {
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
    const currentAttrCanBuy = useCallback(function(attrId, attrs) {
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
            if (((_goodsList_i = goodsList[i]) === null || _goodsList_i === void 0 ? void 0 : _goodsList_i.skuIds) && everyItemEqual(((_goodsList_i1 = goodsList[i]) === null || _goodsList_i1 === void 0 ? void 0 : _goodsList_i1.skuIds) || [], skuIds)) {
                canBuyGoodsItem = goodsList[i];
                break;
            }
        }
        return canBuyGoodsItem;
    }, [
        currentGoods === null || currentGoods === void 0 ? void 0 : currentGoods.skuIds,
        goodsList
    ]);
    const attrClick = useCallback(function(canBuyGoodsItem, canBuy) {
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
    return /*#__PURE__*/ _jsx("div", {
        className: `${preCls} ${className}`,
        children: sku.map((item, index)=>{
            /*#__PURE__*/ return _jsxs("div", {
                className: `${preCls}-item`,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: `${preCls}-name`,
                        children: item.name
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: `${preCls}-attrs`,
                        children: item.items.map((it, index)=>{
                            const canBuyGoodsItem = currentAttrCanBuy(it.id, item.items);
                            const canBuy = !canBuyGoodsItem || canBuyGoodsItem.disabled === true || itemDisable && itemDisable(canBuyGoodsItem) ? false : true;
                            return /*#__PURE__*/ _jsx("div", {
                                onClick: ()=>attrClick(canBuyGoodsItem, canBuy),
                                className: classnames({
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
