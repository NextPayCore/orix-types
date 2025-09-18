export var TransactionType;
(function (TransactionType) {
    // rút tiền
    TransactionType["WITHDRAWAL"] = "WITHDRAWAL";
    // cộng tiền
    TransactionType["COMMISSION_DIRECT"] = "COMMISSION_DIRECT";
    TransactionType["COMMISSION_DEVELOP"] = "COMMISSION_DEVELOP";
    TransactionType["COMMISSION_MENTOR"] = "COMMISSION_MENTOR";
    TransactionType["COMMISSION_OVERRIDE"] = "COMMISSION_OVERRIDE";
    TransactionType["COMMISSION_REFERRAL"] = "COMMISSION_REFERRAL";
    TransactionType["COMMISSION_FALLBACK"] = "COMMISSION_FALLBACK";
    TransactionType["ADJUSTUP"] = "ADJUSTUP";
    // trừ tiền
    TransactionType["REFUND"] = "REFUND";
    TransactionType["ADJUSTDOWN"] = "ADJUSTDOWN"; // Điều chỉnh giảm
})(TransactionType || (TransactionType = {}));
export var WithdrawalStatus;
(function (WithdrawalStatus) {
    WithdrawalStatus["PENDING"] = "PENDING";
})(WithdrawalStatus || (WithdrawalStatus = {}));
export var TransactionTypeReq;
(function (TransactionTypeReq) {
    TransactionTypeReq["COMMISSION"] = "COMMISSION";
    TransactionTypeReq["WITHDRAWAL"] = "WITHDRAWAL";
    TransactionTypeReq["DEDUCTION"] = "DEDUCTION";
})(TransactionTypeReq || (TransactionTypeReq = {}));
export var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["SUCCESS"] = "SUCCESS";
    TransactionStatus["PENDING"] = "PENDING";
    TransactionStatus["FAILED"] = "FAILED";
})(TransactionStatus || (TransactionStatus = {}));
//# sourceMappingURL=transaction.enum.js.map