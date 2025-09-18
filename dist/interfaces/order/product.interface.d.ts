import type { IFile } from '../file.interface';
export interface IProductBase {
    id: number;
    sku: string;
    name: string;
    description: string;
    files: IFile[];
    active: boolean;
    policy: string;
    detail: string;
    newPrice: number;
    oldPrice: number;
    currency: string;
    commission: number;
    finalizeOrder: number;
}
export interface ISampleContent {
    appId: string;
    appName: string;
    appIcon: string;
    target: {
        id: number;
        name: string;
        contents: string[];
    }[];
}
export interface IProduct extends IProductBase {
    thumbnail: string;
    sampleContent: ISampleContent[];
    faq: {
        groupId: number;
        groupName: string;
        qa: {
            question: string;
            answer: string;
        }[];
    }[];
}
export interface TabProductSell {
    alias: string;
    title: string;
    content?: string;
    [key: string]: any;
}
export interface IProductDescription {
    isHot: boolean;
    title: string;
    orderCompleted: number;
}
export interface IProductSelfSell {
    orderCompleted: number;
    commission: number;
}
export interface IStatiticsMeAndProductId {
    fulfilledOrders: number;
    paidOrders: number;
    totalCommissionReceived: number;
}
export interface IProductListReq {
    name?: string;
    page: number;
    size: number;
}
export interface IProductList extends Pick<IProduct, 'id' | 'name' | 'thumbnail' | 'newPrice' | 'commission'> {
    totalOrders: number;
    link: string;
    imageAvatar: string;
}
//# sourceMappingURL=product.interface.d.ts.map