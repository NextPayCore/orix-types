export interface IRevenueStatistic {
  totalRevenue: number;
  totalCommissionReceived: number;
  totalOrdersReceived: number;
  totalCommissionPending: number;
  totalOrdersPending: number;
  totalRefund: number;
  totalRefundOrders: number;
  directSales: {
    totalAmount: number;
    totalOrders: number;
    pendingAmount: number;
    pendingOrders: number;
    receivedAmount: number;
    receivedOrders: number;
  };
  teamSales: {
    totalAmount: number;
    totalOrders: number;
    pendingAmount: number;
    pendingOrders: number;
    receivedAmount: number;
    receivedOrders: number;
  };
  referralSales: {
    totalAmount: number;
    totalOrders: number;
    pendingAmount: number;
    pendingOrders: number;
    receivedAmount: number;
    receivedOrders: number;
  };
}

export interface IRevenueListReq {
  fromDate: string;
  toDate: string;
}
