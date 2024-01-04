import {
  GET_LIST_PRODUCT_RECOMMEND,
  GET_LIST_PRODUCT,
  GET_LIST_SERVICE,
  GetListProducts,
  GetListProductsRecommend,
  GetListServices,
  GET_LIST_PRODUCT_RECENT,
  GetListProductsRecent,
  GetListProductIds,
  GET_LIST_PRODUCTIDS,
  GetListProductsSearch,
  GET_LIST_PRODUCT_SEARCH,
  cleanData,
  CLEAN_DATA,
} from './types';
import { ProductInfoModel } from "@src/core/model/product-model";
import { LoadDataStatusEnum } from "@src/core/libs/constants";

export const onGetListProductsRecommend = (
  payload: ProductInfoModel[],
): GetListProductsRecommend => ({
  type: GET_LIST_PRODUCT_RECOMMEND,
  payload,
});
export const onGetListProductsRecent = (
  payload: ProductInfoModel[],
): GetListProductsRecent => ({
  type: GET_LIST_PRODUCT_RECENT,
  payload,
});
export const onGetListProducts = (
  payload: ProductInfoModel[],
  status: LoadDataStatusEnum,
): GetListProducts => ({
  type: GET_LIST_PRODUCT,
  payload,
  status,
});
export const onGetListProductsSearch = (
  payload: ProductInfoModel[],
  status: LoadDataStatusEnum,
): GetListProductsSearch => ({
  type: GET_LIST_PRODUCT_SEARCH,
  payload,
  status,
});
export const onGetListServices = (
  payload: ProductInfoModel[],
): GetListServices => ({
  type: GET_LIST_SERVICE,
  payload,
});
export const onGetListProductIds = (payload: string[]): GetListProductIds => ({
  type: GET_LIST_PRODUCTIDS,
  payload,
});

export const cleanDataProduct = (): cleanData => ({
  type: CLEAN_DATA,
});
