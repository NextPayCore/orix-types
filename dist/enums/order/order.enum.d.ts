export declare enum OrderStatus {
    CREATED = "CREATED",// Đơn mới tạo
    CONFIRMED = "CONFIRMED",// Đã xác nhận
    PROCESSING = "PROCESSING",// Đang xử lý
    SHIPPING = "SHIPPING",// Đang giao hàng
    UNPAID = "UNPAID",// Chưa thanh toán
    PAID = "PAID",// Đã thanh toán
    FULFILLED = "FULFILLED",// Đã hoàn tất/giao xong
    RETURNED = "RETURNED",// Đã trả hàng/hoàn hàng
    CANCELLED = "CANCELLED"
}
export declare enum CommissionReceiveStatus {
    RECEIVED = "RECEIVED",// Được nhận
    PENDING = "PENDING"
}
export declare enum BenefitType {
    DIRECT = "DIRECT",// trực tiếp
    INDIRECT = "INDIRECT",// trung gian
    CTV = "CTV"
}
export declare enum OrderShoppingChannel {
    FACEBOOK = "FACEBOOK",
    GOOGLE = "GOOGLE",
    WEB = "WEB",
    APP = "APP",
    TIKTOK = "TIKTOK",
    ZALO = "ZALO"
}
export declare enum TypeOrder {
    SELF_EMPLOYMENT = "SELF_EMPLOYMENT",// Tự doanh
    INTRODUCE = "INTRODUCE"
}
export declare enum PaymentMethod {
    COD = "COD",// Thanh toán khi nhận hàng
    BANK_TRANSFER = "BANK_TRANSFER",// Chuyển khoản ngân hàng
    WALLET = "WALLET",// Ví nội bộ
    CARD = "CARD"
}
//# sourceMappingURL=order.enum.d.ts.map