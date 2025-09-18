export const formatPriceVn = (price: number, text: string = 'đ'): string => {
  return new Intl.NumberFormat('vi-VN').format(price || 0) + text;
};
export const formatAmountWithSign = (amount: number) => {
  const prefix = amount > 0 ? '+' : amount;
  return `${prefix}${formatPriceVn(amount)}`;
};
