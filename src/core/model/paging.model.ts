import { SearchTypeEnum } from '../libs/constants';

export class PagingModel {
  start: number;
  pageNumber: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;

  constructor() {
    this.pageNumber = 0;
    this.start = 1;
    this.totalItems = 0;
    this.totalPages = 0;
    this.pageSize = 10;
  }
}

export class PagingProductModel extends PagingModel {
  productType?: SearchTypeEnum;
  category?: string;
  usagePurpose?: string;
  skinType?: string;
  areaTreatment?: string;
  treatmentType?: string;
  serviceGroup?: string;
  classify?: string;
  brand?: string;
  madeIn?: string;
}
