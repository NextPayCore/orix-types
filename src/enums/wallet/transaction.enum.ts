export enum TransactionType {
  // rút tiền
  WITHDRAWAL = 'WITHDRAWAL', // Rút tiền
  // cộng tiền
  COMMISSION = 'COMMISSION',
  COMMISSION_DIRECT = 'COMMISSION_DIRECT', // Hoa hồng bán hàng trực tiếp
  COMMISSION_DEVELOP = 'COMMISSION_DEVELOP', // Hoa hồng phát triển đội nhóm
  COMMISSION_MENTOR = 'COMMISSION_MENTOR', // Hoa hồng tư vấn
  COMMISSION_OVERRIDE = 'COMMISSION_OVERRIDE', // Hoa hồng vượt cấp
  ADJUSTUP = 'ADJUSTUP', // Điều chỉnh tăng

  // trừ tiền
  REFUND = 'REFUND', // Hoàn tiền
  ADJUSTDOWN = 'ADJUSTDOWN' // Điều chỉnh giảm
}

export enum WithdrawalStatus {
  PENDING = 'PENDING'
}

export enum TransactionTypeReq {
  COMMISSION = 'COMMISSION',
  WITHDRAWAL = 'WITHDRAWAL',
  DEDUCTION = 'DEDUCTION'
}

export enum TransactionStatus {
  SUCCESS = 'SUCCESS',
  PENDING = 'PENDING',
  FAILED = 'FAILED'
}
