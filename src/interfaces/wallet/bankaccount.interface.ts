import type { BankAccountStatus } from '@/enums/wallet/bankaccount.enum.js';

export interface IBankAccount {
  id: number;
  userId: number;
  accountHolderName: string;
  accountNumber: string;
  bankShortName: string;
  bankFullName: string;
  bankCode: string;
  isDefault: boolean;
  status: BankAccountStatus;
  createdAt: string;
  updatedAt: string;
}
