import { BenefitType, CommissionReceiveStatus, OrderShoppingChannel, OrderStatus, TypeOrder } from '@/enums/order/order.enum';
// Order statuses - sử dụng cho dropdown (nếu có)
export const listOrderStatus = [
    { label: 'Đã giao hàng', value: OrderStatus.FULFILLED, class: 'bg-[#00A57B]' },
    { label: 'Mới tạo', value: OrderStatus.CREATED, class: 'bg-[#457DF5]' },
    { label: 'Đã xác nhận', value: OrderStatus.CONFIRMED, class: 'bg-[#457DF5]' },
    { label: 'Chưa thanh toán', value: OrderStatus.UNPAID, class: 'bg-[#29313F]' },
    { label: 'Đã thanh toán', value: OrderStatus.PAID, class: 'bg-[#457DF5]' },
    { label: 'Đang lấy hàng', value: OrderStatus.PROCESSING, class: 'bg-[#E25C2F]' },
    { label: 'Đang giao hàng', value: OrderStatus.SHIPPING, class: 'bg-[#E25C2F]' },
    { label: 'Đã trả hàng', value: OrderStatus.RETURNED, class: 'bg-[#F0224F]' },
    { label: 'Huỷ đơn', value: OrderStatus.CANCELLED, class: 'bg-[#F0224F]' }
];
// Commission statuses - sử dụng cho dropdown (nếu có)
export const listCommissionStatus = [
    { label: 'Đã nhận', value: CommissionReceiveStatus.RECEIVED, class: 'text-[#00A57B]' },
    { label: 'Chờ nhận', value: CommissionReceiveStatus.PENDING, class: 'text-[#E25C2F]' }
];
// Referral types - sử dụng cho dropdown (nếu có)
export const listReferralType = [
    { label: 'CTV', value: BenefitType.CTV, class: 'people' },
    { label: 'Giới thiệu', value: BenefitType.INDIRECT, class: 'introduce' },
    { label: 'Trực tiếp', value: BenefitType.DIRECT, class: 'direct' }
];
// Shopping channel types - sử dụng cho dropdown (nếu có)
export const listShoppingChannel = [
    { label: 'Facebook', value: OrderShoppingChannel.FACEBOOK, class: 'facebook' },
    { label: 'Google', value: OrderShoppingChannel.GOOGLE, class: 'google' },
    { label: 'Web', value: OrderShoppingChannel.WEB, class: 'web' },
    { label: 'App', value: OrderShoppingChannel.APP, class: 'app' },
    { label: 'TikTok', value: OrderShoppingChannel.TIKTOK, class: 'tiktok' },
    { label: 'Zalo', value: OrderShoppingChannel.ZALO, class: 'zalo' }
];
// Order types - sử dụng cho dropdown (nếu có)
export const listOrderType = [
    { label: 'Tự doanh', value: TypeOrder.SELF_EMPLOYMENT, class: 'self-employed' },
    { label: 'Giới thiệu', value: TypeOrder.INTRODUCE, class: 'referral' }
];
// Mặc định sẽ có label này
// sử dụng trong table (list): getOrderStatusText = computed(() => return (status: OrderStatus) => mapOrderStatusText[status] || 'default')
// sử dụng trong detail (1 item): mapOrderStatusText[status] || 'default'
export const mapOrderStatusText = listOrderStatus.reduce((map, item) => {
    map[item.value] = item.label;
    return map;
}, {});
// Đây là phần mở rộng thêm, nếu cần thêm thì khai báo extends thêm ở IOrderStatusConfig
// sử dụng trong table (list): getOrderStatusClass = computed(() => return (status: OrderStatus) => mapOrderStatusClass[status] || 'default')
// sử dụng trong detail (1 item): mapOrderStatusClass[status] || 'default'
export const mapOrderStatusClass = listOrderStatus.reduce((map, item) => {
    map[item.value] = item.class;
    return map;
}, {});
// Commission status maps
export const mapCommissionStatusText = listCommissionStatus.reduce((map, item) => {
    map[item.value] = item.label;
    return map;
}, {});
export const mapCommissionStatusClass = listCommissionStatus.reduce((map, item) => {
    map[item.value] = item.class;
    return map;
}, {});
// Referral type maps
export const mapReferralTypeText = listReferralType.reduce((map, item) => {
    map[item.value] = item.label;
    return map;
}, {});
export const mapReferralTypeClass = listReferralType.reduce((map, item) => {
    map[item.value] = item.class;
    return map;
}, {});
// Shopping channel maps
export const mapShoppingChannelText = listShoppingChannel.reduce((map, item) => {
    map[item.value] = item.label;
    return map;
}, {});
export const mapShoppingChannelClass = listShoppingChannel.reduce((map, item) => {
    map[item.value] = item.class;
    return map;
}, {});
// Order type maps
export const mapOrderTypeText = listOrderType.reduce((map, item) => {
    map[item.value] = item.label;
    return map;
}, {});
export const mapOrderTypeClass = listOrderType.reduce((map, item) => {
    map[item.value] = item.class;
    return map;
}, {});
// Backward compatibility - keep old exports for existing code
export const ORDER_STATUSES = listOrderStatus;
export const COMMISSION_STATUSES = listCommissionStatus;
export const REFERRAL_TYPES = listReferralType;
export const SHOPPING_CHANNEL_TYPES = listShoppingChannel;
export const ORDER_TYPES = listOrderType;
// Helper functions using reducer pattern - keep for backward compatibility
export const getStatusClass = (status) => {
    return mapOrderStatusClass[status] || 'bg-[#00A57B]';
};
export const getStatusText = (status) => {
    return mapOrderStatusText[status] || 'Đã giao hàng';
};
export const getCommissionStatusClass = (status) => {
    return mapCommissionStatusClass[status] || 'text-[#00A57B]';
};
export const getCommissionStatusText = (status) => {
    return mapCommissionStatusText[status] || 'Đã nhận';
};
export const getReferralIcon = (referralType) => {
    return mapReferralTypeClass[referralType] || 'people';
};
export const getReferralText = (referralType) => {
    return mapReferralTypeText[referralType] || 'CTV';
};
export const getShoppingChannelText = (channel) => {
    return mapShoppingChannelText[channel] || 'Web';
};
export const getOrderTypeClass = (orderType) => {
    return mapOrderTypeClass[orderType] || 'self-employed';
};
export const getOrderTypeText = (orderType) => {
    return mapOrderTypeText[orderType] || 'Tự doanh';
};
//# sourceMappingURL=order.constant.js.map