import { TransactionStatus, TransactionType } from '@/enums/wallet/transaction.enum';
import type { IConstantListEnum } from '@/interfaces/constantEnum.interface';
interface ITransactionStatus<T> extends IConstantListEnum<T> {
    class: string;
}
export declare const listTransactionStatus: ITransactionStatus<TransactionStatus>[];
export declare const mapTransactionStatusText: Record<TransactionStatus, string>;
export declare const mapTransactionStatusClass: Record<TransactionStatus, string>;
export declare const listTransactionTypes: ({
    label: string;
    value: TransactionType;
    color: string;
    iconColor: string;
    amountColor: string;
    iconComponent: string;
    titleTemplate: string;
    keyTemplate: string;
    valueTemplate: string;
    source?: undefined;
} | {
    label: string;
    value: TransactionType;
    color: string;
    iconColor: string;
    amountColor: string;
    iconComponent: string;
    titleTemplate: string;
    keyTemplate: string;
    valueTemplate: string;
    source: string;
} | {
    label: string;
    value: TransactionType;
    color: string;
    iconColor: string;
    amountColor: string;
    iconComponent: string;
    titleTemplate: string;
    keyTemplate?: undefined;
    valueTemplate?: undefined;
    source?: undefined;
})[];
export declare const mapTransactionTypes: Record<TransactionType, string>;
export declare const mapTransactionIconColors: Record<TransactionType, string>;
export declare const mapTransactionAmountColors: Record<TransactionType, string>;
export declare const mapTransactionIconComponents: Record<TransactionType, string>;
export declare const mapTransactionTitleTemplates: Record<TransactionType, string>;
export declare const mapTransactionKeyTemplates: Record<TransactionType, string | undefined>;
export declare const mapTransactionValueTemplates: Record<TransactionType, string | undefined>;
export declare const mapTransactionSource: Record<TransactionType, string | undefined>;
export {};
//# sourceMappingURL=transaction.constant.d.ts.map