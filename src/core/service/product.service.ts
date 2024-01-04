import ApiService, {TypeBaseUrlEnum} from '@src/core/service/api.service';
import {ConfigServiceAddress} from '@src/core/model/config-service-url';
import {ApiResult} from '@src/core/model/api-result';

export class ProductService extends ApiService {
  public static instance(configService: ConfigServiceAddress) {
    return new ProductService(configService);
  }
  private constructor(configService: ConfigServiceAddress) {
    super(configService);
  }
  public getListRecommendProduct(params: any) {
    const url =
      this.getBaseUrl(TypeBaseUrlEnum.MARKET) +
      '/api/v1/marketplaces/products/recommended';
    return this.apiGet<ApiResult>(url, params, true);
  }
  public getListProducts(params: any, loadMore?: boolean) {
    const url =
      this.getBaseUrl(TypeBaseUrlEnum.MARKET) + '/api/v1/marketplaces/products';
    return this.apiGet<ApiResult>(url, params, true, loadMore);
  }
  public getListProductsRecent(body: any) {
    const url =
      this.getBaseUrl(TypeBaseUrlEnum.MARKET) +
      '/api/v1/marketplaces/products/get-product-recent';
    return this.apiPost<ApiResult>(url, body, {}, true);
  }
  public getProductDetail(id: string) {
    const url =
      this.getBaseUrl(TypeBaseUrlEnum.MARKET) +
      `/api/v1/marketplaces/products/${id}`;
    return this.apiGet<ApiResult>(url, {}, true);
  }

  public getListClinics(params: any, loadMore?: boolean) {
    const url =
      this.getBaseUrl(TypeBaseUrlEnum.MARKET) + '/api/v1/marketplaces/clinics';
    return this.apiGet<ApiResult>(url, params, true, loadMore);
  }
}
