import type { WalletStatus } from '../../enums/wallet/wallet.enum';

export interface IWallet {
  userId: number; // Id của người sử dụng ví
  accountName: string; // Tên tài khoản ví
  accountNumber: string; // Số tài khoản ví
  totalBalance: number; // Tổng số dư tài khoản ví(Tổng tất cả số tiền đã nhận)
  availableBalance: number; // Số dư khả dụng tài khoản ví(Số tiền thực tế có trong ví user có thể thực hiện rút tiền)
  withdrawnAmount: number; // Số tiền đã rút(Tổng số tiền user đã rút về tài khoản ngân hàng)
  pendingAmount: number; // Số tiền rút chờ xác nhận
  directOrderAmount: number; // Số tiền hoa hồng bán hàng trực tiếp
  directOrderCount: number; // Số đơn bán hàng trực tiếp
  developmentAmount: number; // Số tiền hoa hồng phát triển đội nhóm
  developmentOrderCount: number; // Số lượng đơn hàng phát triển đội nhóm
  developmentUserCount: number; // Số lượng user phát triển đội nhóm
  status: WalletStatus; // Trạng thái tài khoản
  createdAt: string; // Thời điểm tạo tài khoản
  updatedAt: string; // Thời điểm update thông tin tài khoản
  createdBy?: string; // Người tạo tài khoản
  updatedBy?: string; // Người update tài khoản
}

export interface ICreateWalletReq {
  accountHolderName: string;
  accountNumber: string;
  bankName: string;
  bankCode: string;
}
