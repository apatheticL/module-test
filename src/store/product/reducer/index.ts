import {
  ProductsState,
  ProductListActionTypes,
  GET_LIST_PRODUCT_RECOMMEND,
  GET_LIST_PRODUCT_RECENT,
  GET_LIST_SERVICE,
  GET_LIST_PRODUCT,
  GET_LIST_PRODUCTIDS,
  GET_LIST_PRODUCT_SEARCH,
  CLEAN_DATA,
} from './types';
import { LoadDataStatusEnum } from "@src/core/libs/constants";

const initialState: ProductsState = {
  productsRecommend: [],
  productsRecent: [],
  products: [],
  productsSearch: [],
  productIds: [],
  services: [],
};

export const productReducer = (
  state = initialState,
  action: ProductListActionTypes,
): ProductsState => {
  switch (action.type) {
    case GET_LIST_PRODUCT_RECOMMEND:
      return {...state, productsRecommend: action.payload || []};
    case GET_LIST_PRODUCT: {
      if (action.status === LoadDataStatusEnum.LoadNew) {
        return {
          ...state,
          products: action.payload,
        };
      }
      if (action.status === LoadDataStatusEnum.LoadMore) {
        return {
          ...state,
          products: [...state.products, ...action.payload],
        };
      } else {
        return state;
      }
    }
    case GET_LIST_PRODUCT_SEARCH: {
      if (action.status === LoadDataStatusEnum.LoadNew) {
        return {
          ...state,
          productsSearch: action.payload,
        };
      }
      if (action.status === LoadDataStatusEnum.LoadMore) {
        return {
          ...state,
          productsSearch: [...state.productsSearch, ...action.payload],
        };
      } else {
        return state;
      }
    }
    case GET_LIST_SERVICE:
      console.log('GET_LIST_SERVICE reducer action.payload', action.payload);
      return {...state, services: action.payload};
    case GET_LIST_PRODUCT_RECENT:
      return {...state, productsRecent: action.payload};
    case CLEAN_DATA:
      return initialState;
    default:
      return {...state};
  }
};

export const productStorageReducer = (
  state = initialState,
  action: ProductListActionTypes,
): ProductsState => {
  switch (action.type) {
    case GET_LIST_PRODUCTIDS:
      return {...state, productIds: action.payload};

    default:
      return {...state};
  }
};
