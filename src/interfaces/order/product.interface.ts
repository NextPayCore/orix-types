import type { IFile } from '../file.interface';
// source docs của CườngLV: https://docs.google.com/spreadsheets/d/1X4N4suBuPRL1GW89Xxq_fBqys13m4ulEEMRbv4YbRv8/edit?gid=0#gid=0

export interface IProductBase {
  id: number;
  sku: string;
  name: string;
  description: string;
  files: IFile[];
  // imageUrl: string[];
  active: boolean;
  policy: string;
  detail: string;
  // faq: string;
  newPrice: number;
  oldPrice: number;
  currency: string;
  commission: number;
  finalizeOrder: number;

  // sampleContent: {[key: string]: string};
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
  // name: string;
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
