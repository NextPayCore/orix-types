export interface MyNextPayResponse<T> {
    code: number;
    message: string;
    result: boolean;
    data: T;
}
export interface MyNextPayPaginationResponse<T> extends MyNextPayResponse<T> {
    paging: {
        page: number;
        size: number;
        totalElements: number;
        totalPages: number;
        hasNext: boolean;
        hasPrevious: boolean;
    };
}
//# sourceMappingURL=mnpResponse.interface.d.ts.map