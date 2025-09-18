import type { BenefitType, CommissionReceiveStatus, OrderShoppingChannel, OrderStatus, PaymentMethod, TypeOrder } from '@/enums/order/order.enum';
export interface IOrderCreateFast {
    productId: number;
    quantity: number;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerProvince: string;
    customerAddress: string;
    customerNote: string;
}
export interface IOrderDetail {
    id: string;
    status: OrderStatus;
    product: {
        name: string;
        unitPrice: number;
        quantity: number;
        totalAmount: number;
    };
    paymentMethod: string;
    commission: {
        amount: number;
        currency: string;
    };
    buyer: {
        channel: string;
        name: string;
        phone: string;
        address: string;
    };
    createdAt: string;
    updatedAt: string;
}
export interface IOrderStatusConfig {
    label: string;
    class: string;
    color: string;
}
export interface IOrderStatus {
    label: string;
    class: string;
    value: string;
}
export interface IDataFilter {
    label: string;
    value: string;
    items: {
        label: string;
        value: string;
    }[];
}
export interface IOrderRequest {
    orderStatus?: OrderStatus | string;
    fullTextSearch?: string;
    orderShoppingChannels?: OrderShoppingChannel[];
    productIds?: number[] | string[];
    typeOrder?: TypeOrder;
    page?: number;
    size?: number;
}
export interface IOrderItem {
    createAt: string;
    orderId: number;
    orderNo: string;
    orderStatus: OrderStatus;
    commissionAmount: number;
    commissionReceiveStatus: CommissionReceiveStatus;
    customerInfo: string;
    directSellerName?: string;
    benefitType: BenefitType;
    orderShoppingChannel: OrderShoppingChannel;
    productName: string;
}
export interface IOrderDetailItem extends IOrderItem {
    id: number;
    customer: IOrderCustomer;
    sellerId: number;
    introducerId: number;
    items: IOrderItemResponse[];
    notes: string;
    orderHistoryRes: IOrderHistoryRes[];
    paymentMethod: PaymentMethod;
    commission: number;
    seller: IUserResponse;
    paymentReceiptNote?: string;
}
export interface IOrderCustomer {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerProvince: string;
    customerAddress: string;
    customerNote: string;
}
export interface IOrderItemResponse {
    quantity: number;
    productNameSnapshot: string;
    productPriceSnapshot: number;
    lineTotal: number;
}
export interface IOrderHistoryRes {
    fromStatus: OrderStatus;
    toStatus: OrderStatus;
    note: string;
    createdAt: string;
}
export interface IUserResponse {
    id: number;
    name: string;
    address: string;
    phone: string;
    urlAvatar: string;
    username: string;
    email: string;
    referralCode: string;
    status: string;
    role: string;
    lastLogin: string;
    isActive: string;
    createdAt: string;
    updatedAt: string;
    level: string;
    regionId: string;
    wardId: string;
    cityId: string;
    upgradedAt: string;
    mentorId: string;
    referenceBy: string;
    externalUserId: string;
    sourceCode: string;
    mentorLineage: string;
    referenceLineage: string;
}
export interface ITimelineItem {
    title: string;
    time: string;
}
//# sourceMappingURL=order.interface.d.ts.map