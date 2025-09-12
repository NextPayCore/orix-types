import type { TransactionStatus, TransactionType, TransactionTypeReq } from '@/enums/wallet/transaction.enum.js';
export interface ITransaction {
    id: number;
    userId: number;
    orixWalletAccountId?: number;
    beneficiaryId: number;
    walletAccountId: number;
    transactionType: TransactionType;
    amount: number;
    transactionCode: string;
    balanceBefore: number;
    balanceAfter: number;
    description: string;
    referenceId: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    withdrawalCompletedAt?: string;
    note?: string;
    conditions?: string;
    type: TransactionType.WITHDRAWAL | TransactionType.COMMISSION;
    status: TransactionStatus;
    bankAccountInfo?: IBankAccountInfo;
    statusMessage?: string;
    actualReceivedAmount?: number;
    feeWithdrawal?: number;
    personalIncomeTaxRate?: number;
    source?: string;
}
export interface IBankAccountInfo {
    accountHolderName: string;
    accountNumber: string;
    bankName: string;
    bankCode: string;
}
export interface ITransactionListReq {
    transactionType?: TransactionTypeReq[];
    pagination: {
        page: number;
        size: number;
    };
}
export interface ICreateWithdrawalReq {
    amount: number;
    bankAccountId: number;
    reason: string;
}
export interface ICreateWithdrawalRes {
    id: number;
    walletAccountId: number;
    bankAccountId: number;
    amount: number;
    reason: string;
    status: string;
    approvedBy?: string;
    approvedDate?: string;
    createdAt: string;
    createdBy: string;
    withdrawCode: string;
}
//# sourceMappingURL=transaction.interface.d.ts.map