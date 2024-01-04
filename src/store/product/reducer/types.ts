import {ProductInfoModel} from '@src/core/model/product-model';
import {LoadDataStatusEnum} from '@src/core/libs/constants';

export interface ProductsState {
  productsRecommend: ProductInfoModel[];
  productsRecent: ProductInfoModel[];
  products: ProductInfoModel[];
  productsSearch: ProductInfoModel[];
  services: ProductInfoModel[];
  productIds: string[];
}

export const GET_LIST_PRODUCT_RECOMMEND = 'GET_LIST_PRODUCT_RECOMMEND';
export const GET_LIST_PRODUCT_RECENT = 'GET_LIST_PRODUCT_RECENT';
export const GET_LIST_PRODUCT = 'GET_LIST_PRODUCT';
export const GET_LIST_SERVICE = 'GET_LIST_SERVICE';
export const GET_LIST_PRODUCTIDS = 'GET_LIST_PRODUCTIDS';
export const GET_LIST_PRODUCT_SEARCH = 'GET_LIST_PRODUCT_SEARCH';
export const CLEAN_DATA = 'CLEAN_DATA';
export interface GetListProductsRecommend {
  type: typeof GET_LIST_PRODUCT_RECOMMEND;
  payload: ProductInfoModel[];
}
export interface GetListProducts {
  type: typeof GET_LIST_PRODUCT;
  payload: ProductInfoModel[];
  status: LoadDataStatusEnum;
}
export interface GetListProductsSearch {
  type: typeof GET_LIST_PRODUCT_SEARCH;
  payload: ProductInfoModel[];
  status: LoadDataStatusEnum;
}

export interface GetListServices {
  type: typeof GET_LIST_SERVICE;
  payload: ProductInfoModel[];
}

export interface GetListProductsRecent {
  type: typeof GET_LIST_PRODUCT_RECENT;
  payload: ProductInfoModel[];
}

export interface GetListProductIds {
  type: typeof GET_LIST_PRODUCTIDS;
  payload: string[];
}

export interface cleanData {
  type: typeof CLEAN_DATA;
}
export type ProductListActionTypes =
  | GetListProductsRecommend
  | GetListProducts
  | GetListProductsSearch
  | GetListServices
  | GetListProductsRecent
  | cleanData
  | GetListProductIds;
