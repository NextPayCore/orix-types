import { TransactionStatus, TransactionType } from '@/enums/wallet/transaction.enum';
// sử dụng cho dropdown (nếu có)
export const listTransactionStatus = [
    { label: 'Thành công', value: TransactionStatus.SUCCESS, class: '!bg-[#00A57B]' },
    { label: 'Đang xử lý', value: TransactionStatus.PENDING, class: '!bg-[#FF821E]' },
    { label: 'Thất bại', value: TransactionStatus.FAILED, class: '!bg-[#F44336]' }
];
// Mặc định sẽ có label này
// sử dụng trong table (list): getTransactionStatusText = computed(() => return (status: TransactionStatus) => mapTransactionStatusText[status] || 'default')
// sử dụng trong detail (1 item): mapTransactionStatusText[status] || 'default'
export const mapTransactionStatusText = listTransactionStatus.reduce((map, item) => {
    map[item.value] = item.label;
    return map;
}, {});
// Đây là phần mở rộng thêm, nếu cần thêm thì khai báo extends thêm ở ITransactionStatus
// sử dụng trong table (list): getTransactionStatusText = computed(() => return (status: TransactionStatus) => mapTransactionStatusClass[status] || 'default')
// sử dụng trong detail (1 item): mapTransactionStatusClass[status] || 'default'
export const mapTransactionStatusClass = listTransactionStatus.reduce((map, item) => {
    map[item.value] = item.class;
    return map;
}, {});
export const listTransactionTypes = [
    {
        label: 'Bán trực tiếp',
        value: TransactionType.COMMISSION_DIRECT,
        color: '#00A57B',
        iconColor: '#22c55e',
        amountColor: 'text-[#00A57B]',
        iconComponent: 'GrowUpIconComponents',
        titleTemplate: 'Đơn {{orderCode}}',
        keyTemplate: '{{orderCode}}',
        valueTemplate: 'orderCode'
    },
    {
        label: 'Hoa hồng phát triển',
        value: TransactionType.COMMISSION_DEVELOP,
        color: '#FF821E',
        iconColor: '#22c55e',
        amountColor: 'text-[#00A57B]',
        iconComponent: 'GrowUpIconComponents',
        titleTemplate: 'Đơn {{orderCode}}',
        keyTemplate: '{{orderCode}}',
        valueTemplate: 'orderCode',
        source: 'CTV'
    },
    {
        label: 'Hoa hồng cố vấn',
        value: TransactionType.COMMISSION_MENTOR,
        color: '#FFB800',
        iconColor: '#22c55e',
        amountColor: 'text-[#00A57B]',
        iconComponent: 'GrowUpIconComponents',
        titleTemplate: 'Đơn {{orderCode}}',
        keyTemplate: '{{orderCode}}',
        valueTemplate: 'orderCode',
        source: 'CTV'
    },
    {
        label: 'Hoa hồng vượt cấp',
        value: TransactionType.COMMISSION_OVERRIDE,
        color: '#FF5722',
        iconColor: '#22c55e',
        amountColor: 'text-[#00A57B]',
        iconComponent: 'GrowUpIconComponents',
        titleTemplate: 'Đơn {{orderCode}}',
        keyTemplate: '{{orderCode}}',
        valueTemplate: 'orderCode'
    },
    {
        label: 'Hoa hồng giới thiệu',
        value: TransactionType.COMMISSION_REFERRAL,
        color: '#9C27B0',
        iconColor: '#22c55e',
        amountColor: 'text-[#00A57B]',
        iconComponent: 'GrowUpIconComponents',
        titleTemplate: 'Đơn {{orderCode}}',
        keyTemplate: '{{orderCode}}',
        valueTemplate: 'orderCode',
        source: 'Giới thiệu'
    },
    {
        label: 'Hoa hồng hoàn trả',
        value: TransactionType.COMMISSION_FALLBACK,
        color: '#F44336',
        iconColor: '#ef4444',
        amountColor: 'text-[#E00000]',
        iconComponent: 'GrowDownIconComponents',
        titleTemplate: 'Hoàn đơn {{orderCode}}',
        keyTemplate: '{{orderCode}}',
        valueTemplate: 'orderCode'
    },
    {
        label: 'Hoàn tiền',
        value: TransactionType.REFUND,
        color: '#03A9F4',
        iconColor: '#ef4444',
        amountColor: 'text-[#E00000]',
        iconComponent: 'GrowDownIconComponents',
        titleTemplate: 'Hoàn đơn {{orderCode}}',
        keyTemplate: '{{orderCode}}',
        valueTemplate: 'orderCode'
    },
    {
        label: 'Điều chỉnh tăng',
        value: TransactionType.ADJUSTUP,
        color: '#4CAF50',
        iconColor: '#22c55e',
        amountColor: 'text-[#00A57B]',
        iconComponent: 'GrowUpIconComponents',
        titleTemplate: 'Điều chỉnh tăng'
    },
    {
        label: 'Điều chỉnh giảm',
        value: TransactionType.ADJUSTDOWN,
        color: '#F44336',
        iconColor: '#ef4444',
        amountColor: 'text-[#E00000]',
        iconComponent: 'GrowDownIconComponents',
        titleTemplate: 'Điều chỉnh giảm'
    },
    {
        label: 'Rút tiền',
        value: TransactionType.WITHDRAWAL,
        color: '#9C27B0',
        iconColor: '#3b82f6',
        amountColor: 'text-[#E00000]',
        iconComponent: 'MoneyMobileIconComponents',
        titleTemplate: 'Rút tiền'
    }
];
export const mapTransactionTypes = listTransactionTypes.reduce((map, item) => {
    map[item.value] = item.label;
    return map;
}, {});
export const mapTransactionIconColors = listTransactionTypes.reduce((map, item) => {
    map[item.value] = item.iconColor;
    return map;
}, {});
export const mapTransactionAmountColors = listTransactionTypes.reduce((map, item) => {
    map[item.value] = item.amountColor;
    return map;
}, {});
export const mapTransactionIconComponents = listTransactionTypes.reduce((map, item) => {
    map[item.value] = item.iconComponent;
    return map;
}, {});
export const mapTransactionTitleTemplates = listTransactionTypes.reduce((map, item) => {
    map[item.value] = item.titleTemplate;
    return map;
}, {});
export const mapTransactionKeyTemplates = listTransactionTypes.reduce((map, item) => {
    map[item.value] = item.keyTemplate;
    return map;
}, {});
export const mapTransactionValueTemplates = listTransactionTypes.reduce((map, item) => {
    map[item.value] = item.valueTemplate;
    return map;
}, {});
export const mapTransactionSource = listTransactionTypes.reduce((map, item) => {
    map[item.value] = item.source;
    return map;
}, {});
//# sourceMappingURL=transaction.constant.js.map