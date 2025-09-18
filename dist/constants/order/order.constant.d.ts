import { BenefitType, CommissionReceiveStatus, OrderShoppingChannel, OrderStatus, TypeOrder } from '@/enums/order/order.enum';
import type { IConstantListEnum } from '@/interfaces/constantEnum.interface';
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
export declare const listOrderStatus: IOrderStatusConfig<OrderStatus>[];
export declare const listCommissionStatus: ICommissionStatusConfig<CommissionReceiveStatus>[];
export declare const listReferralType: IReferralTypeConfig<BenefitType>[];
export declare const listShoppingChannel: IShoppingChannelConfig<OrderShoppingChannel>[];
export declare const listOrderType: IOrderTypeConfig<TypeOrder>[];
export declare const mapOrderStatusText: Record<OrderStatus, string>;
export declare const mapOrderStatusClass: Record<OrderStatus, string>;
export declare const mapCommissionStatusText: Record<CommissionReceiveStatus, string>;
export declare const mapCommissionStatusClass: Record<CommissionReceiveStatus, string>;
export declare const mapReferralTypeText: Record<BenefitType, string>;
export declare const mapReferralTypeClass: Record<BenefitType, string>;
export declare const mapShoppingChannelText: Record<OrderShoppingChannel, string>;
export declare const mapShoppingChannelClass: Record<OrderShoppingChannel, string>;
export declare const mapOrderTypeText: Record<TypeOrder, string>;
export declare const mapOrderTypeClass: Record<TypeOrder, string>;
export declare const ORDER_STATUSES: IOrderStatusConfig<OrderStatus>[];
export declare const COMMISSION_STATUSES: ICommissionStatusConfig<CommissionReceiveStatus>[];
export declare const REFERRAL_TYPES: IReferralTypeConfig<BenefitType>[];
export declare const SHOPPING_CHANNEL_TYPES: IShoppingChannelConfig<OrderShoppingChannel>[];
export declare const ORDER_TYPES: IOrderTypeConfig<TypeOrder>[];
export declare const getStatusClass: (status: string) => string;
export declare const getStatusText: (status: string) => string;
export declare const getCommissionStatusClass: (status: string) => string;
export declare const getCommissionStatusText: (status: string) => string;
export declare const getReferralIcon: (referralType?: string) => string;
export declare const getReferralText: (referralType?: string) => string;
export declare const getShoppingChannelText: (channel?: string) => string;
export declare const getOrderTypeClass: (orderType?: string) => string;
export declare const getOrderTypeText: (orderType?: string) => string;
export {};
//# sourceMappingURL=order.constant.d.ts.map