export enum OrderStatus {
  CREATED = 'CREATED', // Đơn mới tạo
  CONFIRMED = 'CONFIRMED', // Đã xác nhận
  PROCESSING = 'PROCESSING', // Đang xử lý
  SHIPPING = 'SHIPPING', // Đang giao hàng
  UNPAID = 'UNPAID', // Chưa thanh toán
  PAID = 'PAID', // Đã thanh toán
  FULFILLED = 'FULFILLED', // Đã hoàn tất/giao xong
  RETURNED = 'RETURNED', // Đã trả hàng/hoàn hàng
  CANCELLED = 'CANCELLED' // Đã hủy
}

export enum CommissionReceiveStatus {
  RECEIVED = 'RECEIVED', // Được nhận
  PENDING = 'PENDING' // Chờ nhận
}

export enum BenefitType {
  DIRECT = 'DIRECT', // trực tiếp
  INDIRECT = 'INDIRECT', // trung gian
  CTV = 'CTV' // Cộng tác viên
}

export enum OrderShoppingChannel {
  FACEBOOK = 'FACEBOOK',
  GOOGLE = 'GOOGLE',
  WEB = 'WEB',
  APP = 'APP',
  TIKTOK = 'TIKTOK',
  ZALO = 'ZALO'
}

export enum TypeOrder {
  SELF_EMPLOYMENT = 'SELF_EMPLOYMENT', // Tự doanh
  INTRODUCE = 'INTRODUCE' // Giới thiệu
}

export enum PaymentMethod {
  COD = 'COD', // Thanh toán khi nhận hàng
  BANK_TRANSFER = 'BANK_TRANSFER', // Chuyển khoản ngân hàng
}
