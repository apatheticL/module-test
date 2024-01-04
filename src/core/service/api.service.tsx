import axios, {AxiosPromise, AxiosRequestConfig, Method} from 'axios';
import {ConfigServiceAddress} from '@src/core/model/config-service-url';
const marketApiInstance = axios.create({});

export enum TypeBaseUrlEnum {
  MARKET,
}
export enum ContentTypeEnum {
  Json,
  Urlencoded,
  formData,
}
marketApiInstance.interceptors.request.use(
  async value => {
    try {
      const countryCode = 'vn';
      if (countryCode) {
        value.headers.CountryCode = countryCode;
      } else {
        value.headers.CountryCode = 'vn';
      }
    } catch (e) {}

    return value;
  },
  err => {
    return Promise.reject(err);
  },
);

marketApiInstance.interceptors.response.use(
  response => {
    return response;
  },
  async err => {
    const originalRequest = err?.config;
    if (
      (err?.response?.status === 401 || JSON.stringify(err).includes('401')) &&
      !originalRequest?._retry
    ) {
      const {config} = err;
      originalRequest._retry = true;
      return marketApiInstance.request(config);
    } else {
      originalRequest._retry = false;
      return Promise.reject(err);
    }
  },
);
export enum ContentTypeValueEnum {
  Json = 'application/json',
  Urlencoded = 'application/x-www-form-urlencoded;charset=UTF-8',
  formData = 'multipart/form-data',
}
interface RequestHeader {
  Accept?: string;
  'Content-Type': string;
  Authorization?: string;
  'Accept-Language'?: string;
  'Accept-Encoding'?: string;
  'Access-Control-Allow-Origin'?: string;
}

const appendHeaders = (
  _hasToken: boolean = false,
  contentType?: ContentTypeEnum,
): RequestHeader => {
  // const languageKey = 'en';

  const headers: RequestHeader = {
    Accept: 'application/json',
    'Content-Type': ContentTypeValueEnum.Json,
  };

  // if (hasToken && !isEmpty(AppListener.getInstance().idToken)) {
  //   headers.Authorization = `Bearer ${AppListener.getInstance().idToken}`;
  //   headers['Accept-Language'] = languageKey;
  // }
  switch (contentType) {
    case ContentTypeEnum.Urlencoded: {
      headers['Content-Type'] = ContentTypeValueEnum.Urlencoded;
      break;
    }
    case ContentTypeEnum.formData: {
      headers['Content-Type'] = ContentTypeValueEnum.formData;
      break;
    }
    default: {
      headers['Content-Type'] = ContentTypeValueEnum.Json;
      break;
    }
  }
  return headers;
};
export default class ApiService {
  public getBaseUrl(typeURL: TypeBaseUrlEnum): string {
    var baseURL = this.configServerModel.PRODUCT_URL;
    switch (typeURL) {
      case TypeBaseUrlEnum.MARKET: {
        baseURL = this.configServerModel.MARKET_URL;
        break;
      }
      default: {
        break;
      }
    }
    return baseURL;
  }
  configServerModel: ConfigServiceAddress;
  constructor(configServerModel: ConfigServiceAddress) {
    this.configServerModel = configServerModel;
  }

  protected apiGet<T>(
    url: string,
    params: object = {},
    hasToken: boolean = false,
    showSpinner?: boolean,
    contentType?: ContentTypeEnum,
  ): Promise<T> {
    return this.apiRun<T>(
      'get',
      url,
      null,
      params,
      hasToken,
      showSpinner,
      contentType,
    );
  }

  protected apiPost<T>(
    url: string,
    body: any = null,
    params: object = {},
    hasToken: boolean = false,
    showSpinner?: boolean,
    contentType?: ContentTypeEnum,
  ): Promise<T> {
    return this.apiRun<T>(
      'post',
      url,
      body,
      params,
      hasToken,
      showSpinner,
      contentType,
    );
  }

  protected apiPut<T>(
    url: string,
    body: any = null,
    params: object = {},
    hasToken: boolean = false,
    showSpinner: boolean = true,
    contentType?: ContentTypeEnum,
  ): Promise<T> {
    return this.apiRun<T>(
      'put',
      url,
      body,
      params,
      hasToken,
      showSpinner,
      contentType,
    );
  }

  protected apiDelete<T>(
    url: string,
    body: any = null,
    params: object = {},
    hasToken: boolean = true,
    showSpinner?: boolean,
    contentType?: ContentTypeEnum,
  ): Promise<T> {
    return this.apiRun<T>(
      'delete',
      url,
      body,
      params,
      hasToken,
      showSpinner,
      contentType,
    );
  }

  private apiRun<T>(
    method: Method,
    url: string,
    body: any = null,
    params: object = {},
    hasToken: boolean = false,
    showSpinner?: boolean,
    contentType?: ContentTypeEnum,
  ): Promise<T> {
    const config: AxiosRequestConfig = {
      url,
      method,
      params,
      data: body,
      headers: appendHeaders(hasToken, contentType),
      timeout: 120000,
    };
    return new Promise<T>(async (resolve, reject) => {
      this.instanceAxios(config)
        .then(({data}) => {
          resolve(data);
        })
        .catch(error => {
          console.log(
            '🚀 ~ file: api.service.ts:246 ~ ApiService ~ returnnewPromise<T> ~ error:',
            error,
          );
          reject(error);
        })
        .finally(() => {});
    });
  }
  private instanceAxios(config: AxiosRequestConfig): AxiosPromise<any> {
    return marketApiInstance(config);
  }
}
