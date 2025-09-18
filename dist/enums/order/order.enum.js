export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["CREATED"] = "CREATED";
    OrderStatus["CONFIRMED"] = "CONFIRMED";
    OrderStatus["PROCESSING"] = "PROCESSING";
    OrderStatus["SHIPPING"] = "SHIPPING";
    OrderStatus["UNPAID"] = "UNPAID";
    OrderStatus["PAID"] = "PAID";
    OrderStatus["FULFILLED"] = "FULFILLED";
    OrderStatus["RETURNED"] = "RETURNED";
    OrderStatus["CANCELLED"] = "CANCELLED"; // Đã hủy
})(OrderStatus || (OrderStatus = {}));
export var CommissionReceiveStatus;
(function (CommissionReceiveStatus) {
    CommissionReceiveStatus["RECEIVED"] = "RECEIVED";
    CommissionReceiveStatus["PENDING"] = "PENDING"; // Chờ nhận
})(CommissionReceiveStatus || (CommissionReceiveStatus = {}));
export var BenefitType;
(function (BenefitType) {
    BenefitType["DIRECT"] = "DIRECT";
    BenefitType["INDIRECT"] = "INDIRECT";
    BenefitType["CTV"] = "CTV"; // Cộng tác viên
})(BenefitType || (BenefitType = {}));
export var OrderShoppingChannel;
(function (OrderShoppingChannel) {
    OrderShoppingChannel["FACEBOOK"] = "FACEBOOK";
    OrderShoppingChannel["GOOGLE"] = "GOOGLE";
    OrderShoppingChannel["WEB"] = "WEB";
    OrderShoppingChannel["APP"] = "APP";
    OrderShoppingChannel["TIKTOK"] = "TIKTOK";
    OrderShoppingChannel["ZALO"] = "ZALO";
})(OrderShoppingChannel || (OrderShoppingChannel = {}));
export var TypeOrder;
(function (TypeOrder) {
    TypeOrder["SELF_EMPLOYMENT"] = "SELF_EMPLOYMENT";
    TypeOrder["INTRODUCE"] = "INTRODUCE"; // Giới thiệu
})(TypeOrder || (TypeOrder = {}));
export var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["COD"] = "COD";
    PaymentMethod["BANK_TRANSFER"] = "BANK_TRANSFER";
    PaymentMethod["WALLET"] = "WALLET";
    PaymentMethod["CARD"] = "CARD"; // Thẻ (Credit/Debit)
})(PaymentMethod || (PaymentMethod = {}));
//# sourceMappingURL=order.enum.js.map