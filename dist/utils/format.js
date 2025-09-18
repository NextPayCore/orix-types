export const formatPriceVn = (price, text = 'đ') => {
    return new Intl.NumberFormat('vi-VN').format(price || 0) + text;
};
export const formatAmountWithSign = (amount) => {
    const prefix = amount > 0 ? '+' : amount;
    return `${prefix}${formatPriceVn(amount)}`;
};
//# sourceMappingURL=format.js.map