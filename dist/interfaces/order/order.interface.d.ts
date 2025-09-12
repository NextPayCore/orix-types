import type { BenefitType, CommissionReceiveStatus, OrderShoppingChannel, OrderStatus, PaymentMethod, TypeOrder } from '@/enums/order/order.enum.js';
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
export interface IOrder {
    id: number;
    orderNo: string;
    customer: IOrderCustomer;
    sellerId: number;
    introducerId: number | null;
    items: IOrderItem[];
    notes: string | null;
    orderHistoryRes: IOrderHistoryRes[];
    paymentMethod: PaymentMethod;
    commission: number;
    benefitType: string;
    seller: IOrderSeller | null;
    orderShoppingChannel: OrderShoppingChannel;
    paymentReceiptNote: string | null;
}
export interface IOrderItem {
    quantity: number;
    productNameSnapshot: string;
    productPriceSnapshot: number;
    lineTotal: number;
}
export interface IOrderSeller {
    id: number;
    username: string;
    name: string;
    email: string | null;
    phone: string;
    referralCode: string | null;
    status: string | null;
    role: string;
    lastLogin: string | null;
    isActive: boolean | null;
    createdAt: string | null;
    updatedAt: string | null;
    level: string | null;
    regionId: number | null;
    wardId: number | null;
    cityId: number | null;
    upgradedAt: string | null;
    mentorId: number | null;
    referenceBy: number | null;
    externalUserId: string | null;
    sourceCode: string | null;
    address: string | null;
    mentorLineage: string | null;
    referenceLineage: string | null;
    urlAvatar: string | null;
}
export interface ICreateOrderSingleProductRequest {
    token: string;
    productId: number;
    quantity: number;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerProvince: string;
    customerAddress: string;
    customerNote?: string;
    referralCode?: string;
    shoppingChannel?: OrderShoppingChannel;
    paymentMethod: PaymentMethod;
}
export interface ICreateOrderLocalData extends ICreateOrderSingleProductRequest {
    product: Record<string, unknown>;
    token: string;
}
export interface ICreateReferLinkReq {
    productId: number;
    imageUrl?: string;
    title?: string;
    description?: string;
    expiresAt?: number;
}
//# sourceMappingURL=order.interface.d.ts.map