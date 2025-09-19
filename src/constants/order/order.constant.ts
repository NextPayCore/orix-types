import {
  BenefitType,
  CommissionReceiveStatus,
  OrderShoppingChannel,
  OrderStatus,
  TypeOrder
} from '../../enums/order/order.enum';
import type { IConstantListEnum } from '../../interfaces/constantEnum.interface';

interface IOrderStatusConfig<T> extends IConstantListEnum<T> {
  class: string;
}

interface ICommissionStatusConfig<T> extends IConstantListEnum<T> {
  class: string;
}

interface IReferralTypeConfig<T> extends IConstantListEnum<T> {
  class: string;
}

interface IShoppingChannelConfig<T> extends IConstantListEnum<T> {
  class: string;
}

interface IOrderTypeConfig<T> extends IConstantListEnum<T> {
  class: string;
}

// Order statuses - sử dụng cho dropdown (nếu có)
export const listOrderStatus: IOrderStatusConfig<OrderStatus>[] = [
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
export const listCommissionStatus: ICommissionStatusConfig<CommissionReceiveStatus>[] = [
  { label: 'Đã nhận', value: CommissionReceiveStatus.RECEIVED, class: 'text-[#00A57B]' },
  { label: 'Chờ nhận', value: CommissionReceiveStatus.PENDING, class: 'text-[#E25C2F]' }
];

// Referral types - sử dụng cho dropdown (nếu có)
export const listReferralType: IReferralTypeConfig<BenefitType>[] = [
  { label: 'CTV', value: BenefitType.CTV, class: 'people' },
  { label: 'Giới thiệu', value: BenefitType.INDIRECT, class: 'introduce' },
  { label: 'Trực tiếp', value: BenefitType.DIRECT, class: 'direct' }
];

// Shopping channel types - sử dụng cho dropdown (nếu có)
export const listShoppingChannel: IShoppingChannelConfig<OrderShoppingChannel>[] = [
  { label: 'Facebook', value: OrderShoppingChannel.FACEBOOK, class: 'facebook' },
  { label: 'Google', value: OrderShoppingChannel.GOOGLE, class: 'google' },
  { label: 'Web', value: OrderShoppingChannel.WEB, class: 'web' },
  { label: 'App', value: OrderShoppingChannel.APP, class: 'app' },
  { label: 'TikTok', value: OrderShoppingChannel.TIKTOK, class: 'tiktok' },
  { label: 'Zalo', value: OrderShoppingChannel.ZALO, class: 'zalo' }
];

// Order types - sử dụng cho dropdown (nếu có)
export const listOrderType: IOrderTypeConfig<TypeOrder>[] = [
  { label: 'Tự doanh', value: TypeOrder.SELF_EMPLOYMENT, class: 'self-employed' },
  { label: 'Giới thiệu', value: TypeOrder.INTRODUCE, class: 'referral' }
];

// Mặc định sẽ có label này
// sử dụng trong table (list): getOrderStatusText = computed(() => return (status: OrderStatus) => mapOrderStatusText[status] || 'default')
// sử dụng trong detail (1 item): mapOrderStatusText[status] || 'default'
export const mapOrderStatusText = listOrderStatus.reduce(
  (map: Record<OrderStatus, string>, item: IOrderStatusConfig<OrderStatus>) => {
    map[item.value] = item.label;
    return map;
  },
  {} as Record<OrderStatus, string>
);

// Đây là phần mở rộng thêm, nếu cần thêm thì khai báo extends thêm ở IOrderStatusConfig
// sử dụng trong table (list): getOrderStatusClass = computed(() => return (status: OrderStatus) => mapOrderStatusClass[status] || 'default')
// sử dụng trong detail (1 item): mapOrderStatusClass[status] || 'default'
export const mapOrderStatusClass = listOrderStatus.reduce(
  (map: Record<OrderStatus, string>, item: IOrderStatusConfig<OrderStatus>) => {
    map[item.value] = item.class;
    return map;
  },
  {} as Record<OrderStatus, string>
);

// Commission status maps
export const mapCommissionStatusText = listCommissionStatus.reduce(
  (map: Record<CommissionReceiveStatus, string>, item: ICommissionStatusConfig<CommissionReceiveStatus>) => {
    map[item.value] = item.label;
    return map;
  },
  {} as Record<CommissionReceiveStatus, string>
);

export const mapCommissionStatusClass = listCommissionStatus.reduce(
  (map: Record<CommissionReceiveStatus, string>, item: ICommissionStatusConfig<CommissionReceiveStatus>) => {
    map[item.value] = item.class;
    return map;
  },
  {} as Record<CommissionReceiveStatus, string>
);

// Referral type maps
export const mapReferralTypeText = listReferralType.reduce(
  (map: Record<BenefitType, string>, item: IReferralTypeConfig<BenefitType>) => {
    map[item.value] = item.label;
    return map;
  },
  {} as Record<BenefitType, string>
);

export const mapReferralTypeClass = listReferralType.reduce(
  (map: Record<BenefitType, string>, item: IReferralTypeConfig<BenefitType>) => {
    map[item.value] = item.class;
    return map;
  },
  {} as Record<BenefitType, string>
);

// Shopping channel maps
export const mapShoppingChannelText = listShoppingChannel.reduce(
  (map: Record<OrderShoppingChannel, string>, item: IShoppingChannelConfig<OrderShoppingChannel>) => {
    map[item.value] = item.label;
    return map;
  },
  {} as Record<OrderShoppingChannel, string>
);

export const mapShoppingChannelClass = listShoppingChannel.reduce(
  (map: Record<OrderShoppingChannel, string>, item: IShoppingChannelConfig<OrderShoppingChannel>) => {
    map[item.value] = item.class;
    return map;
  },
  {} as Record<OrderShoppingChannel, string>
);

// Order type maps
export const mapOrderTypeText = listOrderType.reduce(
  (map: Record<TypeOrder, string>, item: IOrderTypeConfig<TypeOrder>) => {
    map[item.value] = item.label;
    return map;
  },
  {} as Record<TypeOrder, string>
);

export const mapOrderTypeClass = listOrderType.reduce(
  (map: Record<TypeOrder, string>, item: IOrderTypeConfig<TypeOrder>) => {
    map[item.value] = item.class;
    return map;
  },
  {} as Record<TypeOrder, string>
);

// Backward compatibility - keep old exports for existing code
export const ORDER_STATUSES = listOrderStatus;
export const COMMISSION_STATUSES = listCommissionStatus;
export const REFERRAL_TYPES = listReferralType;
export const SHOPPING_CHANNEL_TYPES = listShoppingChannel;
export const ORDER_TYPES = listOrderType;

// Helper functions using reducer pattern - keep for backward compatibility
export const getStatusClass = (status: string): string => {
  return mapOrderStatusClass[status as OrderStatus] || 'bg-[#00A57B]';
};

export const getStatusText = (status: string): string => {
  return mapOrderStatusText[status as OrderStatus] || 'Đã giao hàng';
};

export const getCommissionStatusClass = (status: string): string => {
  return mapCommissionStatusClass[status as CommissionReceiveStatus] || 'text-[#00A57B]';
};

export const getCommissionStatusText = (status: string): string => {
  return mapCommissionStatusText[status as CommissionReceiveStatus] || 'Đã nhận';
};

export const getReferralIcon = (referralType?: string): string => {
  return mapReferralTypeClass[referralType as BenefitType] || 'people';
};

export const getReferralText = (referralType?: string): string => {
  return mapReferralTypeText[referralType as BenefitType] || 'CTV';
};

export const getShoppingChannelText = (channel?: string): string => {
  return mapShoppingChannelText[channel as OrderShoppingChannel] || 'Web';
};

export const getOrderTypeClass = (orderType?: string): string => {
  return mapOrderTypeClass[orderType as TypeOrder] || 'self-employed';
};

export const getOrderTypeText = (orderType?: string): string => {
  return mapOrderTypeText[orderType as TypeOrder] || 'Tự doanh';
};
