import type { WalletStatus } from '../../enums/wallet/wallet.enum';
export interface IWallet {
    userId: number;
    accountName: string;
    accountNumber: string;
    totalBalance: number;
    availableBalance: number;
    withdrawnAmount: number;
    pendingAmount: number;
    directOrderAmount: number;
    directOrderCount: number;
    developmentAmount: number;
    developmentOrderCount: number;
    developmentUserCount: number;
    status: WalletStatus;
    createdAt: string;
    updatedAt: string;
    createdBy?: string;
    updatedBy?: string;
}
export interface ICreateWalletReq {
    accountHolderName: string;
    accountNumber: string;
    bankName: string;
    bankCode: string;
}
//# sourceMappingURL=wallet.interface.d.ts.map