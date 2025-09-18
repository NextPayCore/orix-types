export interface IShortLink {
    _id: string;
    productId: number;
    userId: number;
    title: string;
    description: string;
    thumbnail: string;
    countClick: number;
    redirect: string;
    meta: IShortLinkMeta;
    createdAt: string;
    updatedAt: string;
    imageUrl: string[];
}
export interface IShortLinkMeta {
    [x: string]: unknown;
}
//# sourceMappingURL=short-link.interface.d.ts.map