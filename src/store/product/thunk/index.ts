import {ConfigServiceAddress} from '@src/core/model/config-service-url';
import {PagingModel, PagingProductModel} from '@src/core/model/paging.model';
import {ProductInfoModel} from '@src/core/model/product-model';
import {ProductService} from '@src/core/service/product.service';

import {LoadDataStatusEnum, SearchTypeEnum} from '@src/core/libs/constants';
import {
  onGetListProducts,
  onGetListProductsRecent,
  onGetListProductsRecommend,
  onGetListProductsSearch,
} from '@src/store/product/reducer/actions';

export const onThunkGetListRecommendProducts =
  (
    configService: ConfigServiceAddress,
    userId: string,
    pageNumber: PagingModel,
    onSuccess?: (data: ProductInfoModel[]) => void,
    onFail?: (message: string | undefined) => void,
  ): any =>
  async dispatch => {
    try {
      const param = {
        userId: userId,
        productType: 1,
      };
      const value = await ProductService.instance(
        configService,
      ).getListRecommendProduct(param);
      if (value.success) {
        dispatch(onGetListProductsRecommend(value.data ?? []));
        onSuccess?.(value.data ?? []);
      } else {
        onFail?.(value.message);
      }
    } catch (error) {
      onFail?.(JSON.stringify(error));
    }
  };

export const onThunkGetListProducts =
  (
    configService: ConfigServiceAddress,
    paging: PagingModel,
    keyword: string,
    loadMore: boolean,
    onSuccess: (paging: PagingModel, loadMore: boolean) => void,
    onFail?: (message: string | undefined) => void,
    orgId?: string,
  ): any =>
  async dispatch => {
    try {
      let param = {
        productType: 1,
        start: paging.start,
        length: paging.pageSize,
        keyword: keyword,
        orgId: '',
      };
      if (orgId) {
        param = {
          ...param,
          orgId,
        };
      }
      const res = await ProductService.instance(configService).getListProducts(
        param,
        false,
      );
      if (res.success) {
        onSuccess(
          {
            start: paging.start,
            pageNumber: res.data.pageNumber,
            pageSize: res.data.pageSize,
            totalItems: res.data.totalItems,
            totalPages: res.data.totalPages,
          },
          loadMore,
        );
        dispatch(
          onGetListProducts(
            res.data.items ?? [],
            loadMore ? LoadDataStatusEnum.LoadMore : LoadDataStatusEnum.LoadNew,
          ),
        );
      } else {
        onFail?.(res.message);
      }
    } catch (error) {
      onFail?.(JSON.stringify(error));
    }
  };
export const onThunkGetListProductsSearch =
  (
    configService: ConfigServiceAddress,
    paging: PagingProductModel,
    loadMore: boolean,
    onSuccess: (
      paging: PagingModel,
      loadMore: boolean,
      items: ProductInfoModel[],
    ) => void,
    keyword?: string,
    onFail?: (message: string | undefined) => void,
    showSpinner?: boolean,
  ): any =>
  async dispatch => {
    try {
      const param = {
        productType:
          paging.productType === SearchTypeEnum.All
            ? undefined
            : paging.productType,
        start: paging.start,
        length: paging.pageSize,
        keyword: keyword,
        category: paging.category,
        usagePurpose: paging.usagePurpose,
        skinType: paging.skinType,
        areaTreatment: paging.areaTreatment,
        treatmentType: paging.treatmentType,
        serviceGroup: paging.serviceGroup,
        classify: paging.classify,
        brand: paging.brand,
        madeIn: paging.madeIn,
      };

      const res = await ProductService.instance(configService).getListProducts(
        param,
        loadMore || showSpinner,
      );
      if (res.success) {
        onSuccess(
          {
            start: paging.start,
            pageNumber: res.data.pageNumber,
            pageSize: res.data.pageSize,
            totalItems: res.data.totalItems,
            totalPages: res.data.totalPages,
          },
          loadMore,
          res.data.items ?? [],
        );
        dispatch(
          onGetListProductsSearch(
            res.data.items ?? [],
            loadMore ? LoadDataStatusEnum.LoadMore : LoadDataStatusEnum.LoadNew,
          ),
        );
      } else {
        onFail?.(res.message);
      }
    } catch (error) {
      onFail?.(JSON.stringify(error));
    }
  };
export const onThunkGetListProductsRecent =
  (
    configService: ConfigServiceAddress,
    productIds: string[],
    onSuccess?: (data: ProductInfoModel[]) => void,
    onFail?: (message: string | undefined) => void,
  ): any =>
  async dispatch => {
    try {
      const body = {
        productIds: productIds,
      };
      const res = await ProductService.instance(
        configService,
      ).getListProductsRecent(body);
      if (res.success) {
        dispatch(onGetListProductsRecent(res.data ?? []));
        onSuccess?.(res.data ?? []);
      } else {
        onFail?.(res.message);
      }
    } catch (error) {
      onFail?.(JSON.stringify(error));
    }
  };

export const onThunkGetListService = async (
  configService: ConfigServiceAddress,
  pageNumber: PagingModel,
  onSuccess?: (data: any) => void,
  onFail?: (message: string) => void,
) => {
  try {
    // onSuccess?.(hardcode);
    // const value = await ProductService.instance(configService).getListService(
    //   pageNumber
    // );
    // if (value.success) {
    //   onSuccess?.(hardcode);
    // } else {
    //   onFail?.(value.message);
    // }
  } catch (error) {
    onFail?.(JSON.stringify(error));
  }
};
